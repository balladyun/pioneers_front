import { useNavigate } from 'react-router-dom';

import fuveimage from '../assets/images/fuveimage.svg';
import Logo from '../components/ui/Logo';
import menu from '../assets/icons/menu.svg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className='h-full bg-primary'>
      <header className='flex items-center justify-between p-5 bg-primary'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
  
      <div className='relative flex justify-center h-screen'>
        <img src={fuveimage} alt='fuveimage' className='absolute top' />
    </div>

    <section className='absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] z-20 p-8'>
      <div className='font-sans text-2xl font-bold' style={{ fontFamily: 'Arial, sans-serif' }}>
        안녕하세요
        <br />
        창업을 고민하는 분들을 위한 카드,
        <br />
        &lsquo;창업 길잡이카드&rsquo;입니다.
        </div>
      <div className='mt-4 text-base font-normal' style={{ fontFamily: 'Arial, sans-serif' }}>
        <span className='block'>
          안녕하세요! 창업을 고민하는 분들을 위한 카드, &lsquo;창업 길잡이카드&rsquo;입니다. 이
          카드는 세 단계 과정을 통해 누구나 쉽게 창업에 입문할 수 있도록 길을 안내해 드립니다.
          카드를 플레이하는 방법은 두 가지가 있습니다.
        </span>
        <span className='font-black'>
          창업을 꿈꾸는 동료와 함께, 혹은 나의 창업을 구체화하고 싶을 때 사용해보세요.
        </span>
      </div>
    </section>

    <section className='absolute z-20 transform -translate-x-1/2 bottom-20 left-1/2'>
      <button
        className='bg-white rounded-full w-[216px] h-[42px] shadow-md font-normal text-sm mb-2'
        type='button'
        onClick={() => navigate('/Need')}
      >
        어떤 분에게 필요할까요?
      </button>
    </section>
    <section className='absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2'>
      <button
        className='bg-brown text-white rounded-full w-[216px] h-[42px] shadow-md font-normal text-sm'
        type='button'
        onClick={() => navigate('/test-overview')}
      >
        나의 창업 유형 테스트하기
      </button>
    </section>
  </section>


  );
}

