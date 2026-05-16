type MosCardProps = {
  content: string;
  sender: string;
  receiver: string;
  date: string;
  className?: string;
};

export const MosCard = ({
  content,
  sender,
  receiver,
  className,
}: MosCardProps) => {
  return (
    <article
      className={`border-sub-gray-2 flex flex-1 flex-col gap-[5px] rounded-[5px] border px-[13px] py-[6px] ${className ?? ''}`}
    >
      <span className="text-[14px]">from.{sender}</span>
      <div className="mb-[20px] line-clamp-3 w-full text-[15px] text-black">
        {content}
      </div>
      <span className="text-sub-gray-2 text-end text-[14px]">
        TO.{receiver}
      </span>
    </article>
  );
};
