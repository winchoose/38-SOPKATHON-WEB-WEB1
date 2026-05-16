import type { ChangeEventHandler, ReactNode } from 'react';
import userIconBlue from '../assets/svg/usericon_blue.svg';
import userIconOrange from '../assets/svg/usericon_orange.svg';

interface InputProps {
  sender: string;
  receiver: string;
  centerIcon?: ReactNode;
  maxLength?: number;
  onSenderChange: ChangeEventHandler<HTMLInputElement>;
  onReceiverChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  sender,
  receiver,
  centerIcon,
  maxLength,
  onSenderChange,
  onReceiverChange,
}: InputProps) => {
  return (
    <div className="border-background-gray flex flex-1 items-center justify-center border-b px-[50px] py-[13.5px]">
      <label className="flex items-center gap-[10px]">
        <img src={userIconOrange} alt="" />
        <input
          value={sender}
          onChange={onSenderChange}
          placeholder="발신자"
          className="w-[3.7rem] text-center text-[14px]"
        />
      </label>
      <span className="px-[40px]">{centerIcon ?? '→'}</span>
      <label className="flex items-center gap-[10px]">
        <img src={userIconBlue} alt="" />
        <input
          value={receiver}
          onChange={onReceiverChange}
          placeholder="수신자"
          className="w-[3.7rem] text-center text-[14px]"
        />
      </label>
    </div>
  );
};
