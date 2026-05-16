interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button = ({
  label,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={`${className} bg-text-primary flex h-12.5 w-full cursor-pointer items-center justify-center rounded-[5px] text-[15px] font-semibold text-white`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
