import type { ChangeEventHandler, ReactNode } from 'react';

interface InputProps {
  sender: string;
  receiver: string;
  centerIcon?: ReactNode;
  onSenderChange: ChangeEventHandler<HTMLInputElement>;
  onReceiverChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  sender,
  receiver,
  centerIcon,
  onSenderChange,
  onReceiverChange,
}: InputProps) => {
  return (
    <div className="boder-b flex h-[48px] flex-1 items-center justify-center border-b px-[50px]">
      <input
        className="text-center"
        value={receiver}
        onChange={onReceiverChange}
      />
      <span>{centerIcon ?? '→'}</span>
      <input className="text-center" value={sender} onChange={onSenderChange} />
    </div>
  );
};
