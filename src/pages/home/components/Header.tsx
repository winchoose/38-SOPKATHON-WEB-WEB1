import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../../shared/assets/ArrowBack.svg';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = true }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="relative flex w-full h-[46px] items-center justify-center px-4">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 flex items-center justify-center"
        >
          <img src={ArrowBack} alt="뒤로가기" />
        </button>
      )}
      {title && (
        <span className="text-black font-[Inter] text-[17px] font-semibold leading-[25.5px] tracking-[-0.732px]">
          {title}
        </span>
      )}
    </div>
  );
}
