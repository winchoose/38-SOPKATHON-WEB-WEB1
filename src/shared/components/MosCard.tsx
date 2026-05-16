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
  date,
  className,
}: MosCardProps) => {
  return (
    <article className={`${className ?? ''}`}>
      <span>from.{sender}</span>
      <div>{content}</div>
      <div>
        <span>{date}</span>
        <span>{receiver}</span>
      </div>
    </article>
  );
};
