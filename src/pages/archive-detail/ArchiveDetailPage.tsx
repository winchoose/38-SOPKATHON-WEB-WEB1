import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../shared/components/Button';
import MessageOpenGraphic from '../../shared/assets/svg/messageopen_graphic.svg';
import TranslateButton from '../../shared/assets/svg/translate_button.svg';
import { convertHangulToMorse } from '../../shared/utils/morse';
import Header from '../home/components/Header';

interface ArchiveDetailPageProps {
  to?: string;
  from?: string;
  content?: string;
}

export default function ArchiveDetailPage({
  to = '이나연',
  from = '김민지',
  content: initialContent = '그때 너무 미안했어!',
}: ArchiveDetailPageProps) {
  const navigate = useNavigate();

  const morseContent = convertHangulToMorse(initialContent);
  const [isTranslated, setIsTranslated] = useState(false);

  const content = isTranslated ? initialContent : morseContent;

  const handleTranslateClick = () => {
    setIsTranslated(!isTranslated);
  };
  return (
    <div className="flex h-screen flex-col">
      <Header showBack={false} />
      <div className="flex flex-1 flex-col items-center justify-center gap-[1.25rem] px-6 py-10">
        <img src={MessageOpenGraphic} alt="편지" className="mb-6" />

        <p className="mb-2 text-[18px] font-bold text-[#2B343B]">TO. {to} 님</p>

        <div className="mb-4 min-h-[180px] w-full rounded-[8px] bg-[#F6F6F6] p-4">
          <textarea
            readOnly
            value={content}
            className="w-full resize-none bg-transparent text-[15px] text-[#2B343B] outline-none"
          />
        </div>

        <p className="mb-6 w-full text-right text-[13px] text-[#868686]">
          FROM. {from} 님
        </p>

        <img
          src={TranslateButton}
          alt="번역"
          className="mb-10 cursor-pointer"
          onClick={handleTranslateClick}
        />
      </div>
      <div className="flex gap-3 px-6 pb-10">
        <Button
          label="저장하기"
          className="!bg-[#F6F6F6] !py-[2.5rem] !text-[#9A9F9F]"
        />
        <Button
          label="답장하기"
          className="!py-[2.5rem]"
          onClick={() => navigate('/letters/1/reply')}
        />
      </div>
    </div>
  );
}