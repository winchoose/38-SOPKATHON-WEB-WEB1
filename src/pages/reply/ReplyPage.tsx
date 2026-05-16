import { useState } from 'react';
import { useParams } from 'react-router-dom';

import arrowIcon from '../../shared/assets/svg/arrow_left.svg';
import translateButtonIcon from '../../shared/assets/svg/translate_button.svg';
import { Input } from '../../shared/components/Input';
import Textarea from '../../shared/components/Textarea';
import { convertHangulToMorse } from '../../shared/utils/morse';
import { Button } from '../../shared/components/Button';
import Header from '../home/components/Header';
import { sendReply } from './apis/reply';

const shareUrl = async (url: string) => {
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
  const { messageId } = useParams();
  const [receiver, setReceiver] = useState('');
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');
  const [originalContent, setOriginalContent] = useState('');

  const handleTranslateClick = () => {
    setOriginalContent(content);
    setContent(convertHangulToMorse(content));
  };

  const handleSendReply = async () => {
    const numericMessageId = Number(messageId);
    const trimmedSender = receiver.trim();
    const trimmedReceiver = sender.trim();
    const trimmedContent = (originalContent || content).trim();

    if (!numericMessageId) {
      alert('메시지 주소가 올바르지 않습니다.');
      return;
    }

    if (!trimmedSender || !trimmedReceiver || !trimmedContent) {
      alert('수신자, 발신자, 메시지를 모두 입력해주세요.');
      return;
    }

    if (!/^[가-힣\s]+$/.test(trimmedContent)) {
      alert('메시지는 한국어만 입력 가능합니다.');
      return;
    }

    try {
      const response = await sendReply(numericMessageId, {
        senderInitial: trimmedSender,
        receiverInitial: trimmedReceiver,
        content: trimmedContent,
      });

      await shareUrl(response.viewUrl);
    } catch (error) {
      console.error(error);
      alert('답장 전송에 실패했습니다.');
    }
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
      <Textarea
        value={content}
        onChange={(value) => {
          setContent(value);
          setOriginalContent('');
        }}
      />
      <button type="button" onClick={handleTranslateClick}>
        <img src={translateButtonIcon} alt="모스부호로 번역하기" />
      </button>
      <Button
        className="fixed bottom-[22px] left-1/2 h-[50px] max-w-[335px] -translate-x-1/2 py-[13px]"
        label="모스부호 전달하기"
        onClick={handleSendReply}
      />
    </section>
  );
};

export default ReplyPage;
