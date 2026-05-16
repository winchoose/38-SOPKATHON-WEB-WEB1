interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

function Textarea({ value, onChange, maxLength = 50 }: TextareaProps) {
  return (
    <div className="border-background-gray relative h-[231px] w-[335px] rounded-[5px] border bg-white">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value.slice(0, maxLength))}
        maxLength={maxLength}
        className="h-full w-full resize-none bg-transparent px-[28px] py-[28px] pb-[64px] text-[2rem] outline-none"
      />

      <span className="absolute right-[20px] bottom-[20px] text-[1.8rem]">
        <span className="text-text-primary">{value.length}</span>
        <span className="text-sub-gray">/{maxLength}</span>
      </span>
    </div>
  );
}

export default Textarea;
