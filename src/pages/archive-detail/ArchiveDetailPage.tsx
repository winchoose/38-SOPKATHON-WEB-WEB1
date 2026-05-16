import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../shared/components/Button';
import MessageOpenGraphic from '../../shared/assets/svg/messageopen_graphic.svg';
import TranslateButton from '../../shared/assets/svg/translate_button.svg';
import { convertHangulToMorse } from '../../shared/utils/morse';
import Header from '../home/components/Header';
import { deleteSavedMessage } from '../archive/apis/archive';
import type { GetSavedMessageResponse } from '../../shared/types/types';

export default function ArchiveDetailPage() {
  const { savedMessageId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const message: GetSavedMessageResponse | null = state?.message ?? null;
  const [isTranslated, setIsTranslated] = useState(false);

  const initialContent = message?.content ?? '';
  const morseContent = convertHangulToMorse(initialContent);
  const content = isTranslated ? initialContent : morseContent;

  const handleDelete = async () => {
    if (savedMessageId) {
      await deleteSavedMessage(Number(savedMessageId), {
        password: 'dummypassword',
      });
      navigate('/archives');
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <Header showBack={false} />
      <div className="flex flex-1 flex-col items-center justify-center gap-[1.25rem] px-6 py-10">
        <img src={MessageOpenGraphic} alt="편지" className="mb-6" />
        <p className="mb-2 text-[18px] font-bold text-[#2B343B]">
          TO. {message?.receiverInitial} 님
        </p>
        <div className="mb-4 min-h-[180px] w-full rounded-[8px] bg-[#F6F6F6] p-4">
          <textarea
            readOnly
            value={content}
            className="w-full resize-none bg-transparent text-[15px] text-[#2B343B] outline-none"
          />
        </div>
        <p className="mb-6 w-full text-right text-[13px] text-[#868686]">
          FROM. {message?.senderInitial} 님
        </p>
        <img
          src={TranslateButton}
          alt="번역"
          className="mb-10 cursor-pointer"
          onClick={() => setIsTranslated(!isTranslated)}
        />
      </div>
      <div className="flex gap-3 px-6 pb-10">
        <Button
          label="삭제하기"
          className="!bg-[#F6F6F6] !text-[#9A9F9F]"
          onClick={handleDelete}
        />
        <Button
          label="답장하기"
          onClick={() => navigate(`/letters/${savedMessageId}/reply`)}
        />
      </div>
    </div>
  );
}
