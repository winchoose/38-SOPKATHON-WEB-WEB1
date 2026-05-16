type MosCardProps = {
  content: string;
  sender: string;
  receiver: string;
  date: string;
  className?: string;
  contentClassName?: string;
};

export const MosCard = ({
  content,
  sender,
  receiver,
  className,
  contentClassName,
}: MosCardProps) => {
  return (
    <article
      className={`${className ?? ''} border-sub-gray-2 flex flex-1 flex-col gap-[5px] rounded-[5px] border px-[13px] py-[6px]`}
    >
      <span className="text-[14px]">FROM.{sender} 님</span>
      <div
        className={`${contentClassName ?? ''} mb-[20px] line-clamp-3 w-full text-[15px] text-black`}
      >
        {content}
      </div>
      <span className="text-sub-gray-2 text-end text-[14px]">
        TO.{receiver} 님
      </span>
    </article>
  );
};
