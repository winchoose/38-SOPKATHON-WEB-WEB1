import { useNavigate } from 'react-router-dom';
import { Button } from '../../shared/components/Button';
import MessageGraphic from '../../shared/assets/svg/messageget_graphic.svg';
import { http } from '../../shared/apis/http';
import { ENDPOINTS } from '../../shared/apis/endpoints';
import type { GetMessageResponse } from '../../shared/types/types';

export default function LetterConfirmPage() {
  const navigate = useNavigate();
  const handleConfirm = async () => {
    try {
      const data = await http.get<GetMessageResponse>(
        ENDPOINTS.MESSAGES.GET(1),
      );
      navigate(`/letters/2`, { state: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center px-6 py-10">
      <div className="flex flex-1 flex-col items-center justify-center gap-[5rem]">
        <div className="flex flex-col items-center gap-[14px]">
          <h1 className="text-center text-[22px] leading-[130%] font-bold text-[#2B343B]">
            모시모시!
            <br />
            당신에게 도착한 모스부호
          </h1>
          <p className="text-center text-[12px] leading-[160%] font-medium tracking-[-0.32px] text-[#868686]">
            메세지를 눌러 비밀 편지를 해석해보세요
          </p>
        </div>

        <img
          src={MessageGraphic}
          alt="wallet"
          className="h-[138px] w-[142px]"
        />
      </div>

      <Button label="확인하기" onClick={handleConfirm} />
    </div>
  );
}
