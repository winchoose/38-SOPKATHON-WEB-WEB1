import { useNavigate } from 'react-router-dom';

import archiving from './assets/archiving.svg';
import bottomBanner from './assets/bottom.png';
import logoMosimosi from './assets/logo_mosimosi.svg';
import morseCodeIllustration from './assets/morse-code-illustration.svg';

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-dvh bg-white px-[3rem] pt-[7.4rem] text-[#2B343B]">
      <img src={logoMosimosi} alt="MOSiMOSi" className="h-auto w-[12.7rem]" />

      <h1 className="mt-[6.2rem] text-[2.2rem] leading-[140%] font-semibold">
        마음을 담아 모스 부호로
        <br />
        메시지를 전달해봐요!
      </h1>

      <p className="text-sub-gray mt-[2rem] text-[1.4rem] leading-[160%] font-medium">
        직접 전하기엔 부끄럽고 망설여지는 감정을 모스부호로
        <br />
        전달합니다. 점과 선은 마음이 천천히 닿는 방식이 됩니다.
      </p>

      <div className="mt-[7.2rem] flex justify-center gap-[2rem]">
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="border-background-gray relative h-[15.3rem] w-[15.7rem] flex-none overflow-hidden rounded-[5px] border bg-white text-left"
        >
          <span className="absolute top-[1.4rem] left-[1.2rem] z-10 text-[1.6rem] leading-[140%] font-semibold tracking-normal">
            모스부호 작성하기
          </span>
          <img
            src={morseCodeIllustration}
            alt=""
            className="absolute right-[1.1rem] bottom-[1.1rem] h-auto w-[9.8rem]"
          />
        </button>

        <button
          type="button"
          onClick={() => navigate('/archives')}
          className="border-background-gray relative h-[15.3rem] w-[15.7rem] flex-none overflow-hidden rounded-[5px] border bg-white text-left"
        >
          <span className="absolute top-[1.4rem] left-[1.2rem] z-10 text-[1.6rem] leading-[140%] font-semibold tracking-normal">
            아카이빙
          </span>
          <img
            src={archiving}
            alt=""
            className="absolute right-[1.1rem] bottom-[3rem] h-auto w-[7.9rem]"
          />
        </button>
      </div>

      <div className="bg-background-gray-2 mx-[-3rem] mt-[3.2rem] h-[1rem]" />

      <button
        type="button"
        className="relative left-1/2 mt-[3.5rem] block h-[12.4rem] w-[33.5rem] -translate-x-1/2 border-0 p-0"
      >
        <img
          src={bottomBanner}
          alt="아이디어스 배너"
          className="h-full w-full rounded-[8px] object-cover"
        />
      </button>
    </section>
  );
};

export default OnboardingPage;
