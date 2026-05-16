interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const Chip = ({ label, isSelected, onClick }: ChipProps) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-[20px] px-[15px] py-[5px] text-[15px] font-semibold whitespace-nowrap ${
        isSelected
          ? 'bg-text-primary text-white'
          : 'bg-[#F6F6F6] text-[#9A9F9F]'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
