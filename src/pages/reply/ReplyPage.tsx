import { useState } from 'react';

import arrowIcon from '../../shared/assets/svg/arrow_left.svg';
import translateButtonIcon from '../../shared/assets/svg/translate_button.svg';
import { Input } from '../../shared/components/Input';
import Textarea from '../../shared/components/Textarea';
import { convertHangulToMorse } from '../../shared/utils/morse';
import { Button } from '../../shared/components/Button';
import Header from '../home/components/Header';

const handleShare = async () => {
  const url = 'https://38-sopkathon-web-web-1.vercel.app/letters/confirm';

  if (navigator.share) {
    await navigator.share({
      title: '모스부호 편지',
      text: '모스부호로 마음을 전달해보세요.',
      url,
    });
    return;
  }

  await navigator.clipboard.writeText(url);
  alert('링크가 복사되었습니다.');
};

const ReplyPage = () => {
  const [receiver, setReceiver] = useState('이나연');
  const [sender, setSender] = useState('김민지');
  const [content, setContent] = useState('');

  const handleTranslateClick = () => {
    setContent(convertHangulToMorse(content));
  };

  return (
    <section className="flex flex-col items-center gap-[14px]">
      <Header showBack={false} />
      <p className="w-full text-left text-[22px]">
        모스부호로 소중한
        <br />
        마음을 담아 답장해봐요!
      </p>

      <p className="text-sub-gray w-full text-left text-[12px]">
        편지를 적어주시면 모스부호로 번역됩니다.
      </p>

      <Input
        receiver={receiver}
        sender={sender}
        reverseIcon
        maxLength={2}
        centerIcon={<img src={arrowIcon} alt="" />}
        onReceiverChange={(event) => setReceiver(event.target.value)}
        onSenderChange={(event) => setSender(event.target.value)}
      />
      <Textarea value={content} onChange={setContent} />
      <button type="button" onClick={handleTranslateClick}>
        <img src={translateButtonIcon} alt="모스부호로 번역하기" />
      </button>
      <Button
        className="fixed bottom-[22px] left-1/2 h-[50px] max-w-[335px] -translate-x-1/2 py-[13px]"
        label="모스부호 전달하기"
        onClick={handleShare}
      />
    </section>
  );
};

export default ReplyPage;
