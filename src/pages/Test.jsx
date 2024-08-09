import { useNavigate } from 'react-router-dom';
import Background from '../assets/images/background.png';
import BlackComma from '../assets/images/BlackComma.png';
import InstaIcon from '../components/ui/InstaIcon';
import KakaoIcon from '../components/ui/KakaoIcon';
import BlogIcon from '../components/ui/BlogIcon';
import LinkIcon from '../components/ui/LinkIcon';
import Logo from '../components/ui/Logo';
import menu from '../assets/icons/menu.svg';

const TEXT_SHADOW = { textShadow: '1px 5px #ecc64d' };

export default function Test() {
  const navigate = useNavigate();

  return (
    <>
      <header className='flex items-center justify-between p-5 bg-white'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <section className='mx-auto text-center'>
        <article className='px-5 py-8 space-y-8 bg-primary'>
          <div className='relative w-full'>
            <img src={Background} alt='background' className='mx-auto' />
            <span className='absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2'>
              창업 멤버가 된 나의 진짜 모습은?
            </span>
          </div>
          <div className='my-8 *:font-jua flex flex-col justify-center items-center text-6xl space-y-2 *:border-b-2 *:border-black'>
            <div className='relative'>
              <img src={BlackComma} alt='comma' className='absolute -right-14 -top-2' />
              <span className='font-jua' style={TEXT_SHADOW}>
                FUVE
              </span>
            </div>
            <span style={TEXT_SHADOW}>창업 멤버 유형</span>
            <span style={TEXT_SHADOW}>테스트</span>
          </div>
          <button
            className='w-2/3 py-3 text-lg text-white transition-all rounded-full bg-brown px-14 hover:brightness-110'
            type='button'
            onClick={() => navigate('/test/detail')}
          >
            테스트 시작!
          </button>
          <p className='text-sm'>참여자 수 | 000명</p>
        </article>
      </section>
      <section className='px-5 py-8 space-y-5 text-center bg-background'>
        <h4 className='text-lg font-bold'>테스트 공유하기</h4>
        <div className='flex items-center justify-center gap-2'>
          <InstaIcon />
          <KakaoIcon />
          <BlogIcon />
          <LinkIcon />
        </div>
        <div className='p-5 bg-white rounded-lg shadow-custom h-52'>
          <h4 className='text-2xl font-jua'>가장 많은 유형</h4>
          <p className='py-2 text-sm'>참여 통계는 24시간마다 갱신됩니다.</p>
        </div>
      </section>
    </>
  );
}
