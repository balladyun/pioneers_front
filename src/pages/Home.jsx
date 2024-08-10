import { useNavigate } from 'react-router-dom';

import fuveimage from '../assets/images/fuveimage.svg';
import Logo from '../components/ui/Logo';
import menu from '../assets/icons/menu.svg';


export default function Home() {
  const navigate = useNavigate();

  return (
    <section className='bg-[#FFD44B] h-full p-4'>
      <header className='flex items-center justify-between p-5 bg-[#FFD44B]'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <div className='flex justify-center relative h-screen'>
        <img src={fuveimage} alt='fuveimage' className='top absolute' />
      </div>

      <section className="absolute top-[45%] left-1/2 transform -translate-x-1/2 text-left w-[85%] z-20">
        <div className="font-bold text-2xl font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
         안녕하세요
         <br />
         창업을 고민하는 분들을 위한 카드,
          <br />
        '창업 길잡이카드'입니다.
        </div>
         <div className="font-normal text-base mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span className="block">
               안녕하세요! 창업을 고민하는 분들을 위한 카드,
               '창업 길잡이카드'입니다. 이 카드는 세 단계 과정을 통해 누구나 쉽게
               창업에 입문할 수 있도록 길을 안내해 드립니다. 카드를 플레이하는 방법은 두 가지가 있습니다.
            </span>
            <span className="font-black">
                창업을 꿈꾸는 동료와 함께, 혹은 나의 창업을 구체화하고 싶을 때 사용해보세요.
            </span>
          </div>
    </section>


    <section className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
      <button className="bg-white rounded-full w-[216px] h-[42px] shadow-md font-normal text-sm mb-2" type='button'
        onClick={() => navigate('/Need')}>
        어떤 분에게 필요할까요?
      </button>
      <button className="bg-brown text-white rounded-full w-[216px] h-[42px] shadow-md font-normal text-sm"type='button'
        onClick={() => navigate('/Test')}>
        나의 창업 유형 테스트하기
      </button>
    </section>
  </section>
  );
}
