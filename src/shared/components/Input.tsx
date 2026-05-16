import type { ChangeEventHandler, ReactNode } from 'react';

interface InputProps {
  sender: string;
  receiver: string;
  centerIcon: ReactNode;
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
    <div>
      <input value={receiver} onChange={onReceiverChange} />
      <span>{centerIcon}</span>
      <input value={sender} onChange={onSenderChange} />
    </div>
  );
};
