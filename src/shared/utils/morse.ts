const INITIAL_CONSONANTS = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
] as const;

const VOWELS = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
] as const;

const FINAL_CONSONANTS = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
] as const;

const MORSE_CODE: Record<string, string> = {
  ㄱ: '.-..',
  ㄴ: '..-.',
  ㄷ: '-...',
  ㄹ: '...-',
  ㅁ: '--',
  ㅂ: '.--',
  ㅅ: '--.',
  ㅇ: '-.-',
  ㅈ: '.--.',
  ㅊ: '-.-.',
  ㅋ: '-..-',
  ㅌ: '--..',
  ㅍ: '---',
  ㅎ: '.---',
  ㅏ: '.',
  ㅑ: '..',
  ㅓ: '-',
  ㅕ: '...',
  ㅗ: '.-',
  ㅛ: '-.',
  ㅜ: '....',
  ㅠ: '.-.',
  ㅡ: '-..',
  ㅣ: '..-',
};

const COMPOSITE_JAMO: Record<string, string[]> = {
  ㄲ: ['ㄱ', 'ㄱ'],
  ㄳ: ['ㄱ', 'ㅅ'],
  ㄵ: ['ㄴ', 'ㅈ'],
  ㄶ: ['ㄴ', 'ㅎ'],
  ㄸ: ['ㄷ', 'ㄷ'],
  ㄺ: ['ㄹ', 'ㄱ'],
  ㄻ: ['ㄹ', 'ㅁ'],
  ㄼ: ['ㄹ', 'ㅂ'],
  ㄽ: ['ㄹ', 'ㅅ'],
  ㄾ: ['ㄹ', 'ㅌ'],
  ㄿ: ['ㄹ', 'ㅍ'],
  ㅀ: ['ㄹ', 'ㅎ'],
  ㅃ: ['ㅂ', 'ㅂ'],
  ㅄ: ['ㅂ', 'ㅅ'],
  ㅆ: ['ㅅ', 'ㅅ'],
  ㅉ: ['ㅈ', 'ㅈ'],
  ㅐ: ['ㅏ', 'ㅣ'],
  ㅒ: ['ㅑ', 'ㅣ'],
  ㅔ: ['ㅓ', 'ㅣ'],
  ㅖ: ['ㅕ', 'ㅣ'],
  ㅘ: ['ㅗ', 'ㅏ'],
  ㅙ: ['ㅗ', 'ㅏ', 'ㅣ'],
  ㅚ: ['ㅗ', 'ㅣ'],
  ㅝ: ['ㅜ', 'ㅓ'],
  ㅞ: ['ㅜ', 'ㅓ', 'ㅣ'],
  ㅟ: ['ㅜ', 'ㅣ'],
  ㅢ: ['ㅡ', 'ㅣ'],
};

const HANGUL_START_CODE = 0xac00;
const HANGUL_END_CODE = 0xd7a3;
const VOWEL_COUNT = VOWELS.length;
const FINAL_CONSONANT_COUNT = FINAL_CONSONANTS.length;

const isHangulSyllable = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= HANGUL_START_CODE && code <= HANGUL_END_CODE;
};

const splitJamo = (jamo: string) => COMPOSITE_JAMO[jamo] ?? [jamo];

const decomposeHangul = (char: string) => {
  const code = char.charCodeAt(0) - HANGUL_START_CODE;
  const initialIndex = Math.floor(code / (VOWEL_COUNT * FINAL_CONSONANT_COUNT));
  const vowelIndex = Math.floor((code % (VOWEL_COUNT * FINAL_CONSONANT_COUNT)) / FINAL_CONSONANT_COUNT);
  const finalIndex = code % FINAL_CONSONANT_COUNT;

  return [
    ...splitJamo(INITIAL_CONSONANTS[initialIndex]),
    ...splitJamo(VOWELS[vowelIndex]),
    ...splitJamo(FINAL_CONSONANTS[finalIndex]),
  ].filter(Boolean);
};

const convertJamoToMorse = (jamo: string) => MORSE_CODE[jamo] ?? jamo;

export const convertHangulToMorse = (text: string) => {
  return Array.from(text)
    .map((char) => {
      if (char === ' ') {
        return '/';
      }

      const jamoList = isHangulSyllable(char) ? decomposeHangul(char) : splitJamo(char);

      return jamoList.map(convertJamoToMorse).join(' ');
    })
    .join(' ');
};
