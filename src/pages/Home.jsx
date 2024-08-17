import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen bg-primary'>
      <div className='flex justify-center'>
        <img src={logo} width='100%' height='100%' alt='logo' />
      </div>
      <article className='min-h-full p-5 mt-5'>
        <h2 className='text-2xl font-bold'>
          안녕하세요!
          <br />
          창업을 고민하는 분들을 위한 카드,
          <br />
          &lsquo;창업 길잡이카드&rsquo;입니다.
        </h2>
        <p className='mt-4 *:text-base font-normal'>
          안녕하세요! 창업을 고민하는 분들을 위한 카드, &lsquo;창업 길잡이카드&rsquo;입니다. 이
          카드는 세 단계 과정을 통해 누구나 쉽게 창업에 입문할 수 있도록 길을 안내해 드립니다.
          카드를 플레이하는 방법은 두 가지가 있습니다.{' '}
          <span className='font-bold'>
            창업을 꿈꾸는 동료와 함께, 혹은 나의 창업을 구체화하고 싶을 때 사용해보세요.
          </span>
        </p>
      </article>
      <div className='flex flex-col items-center justify-center mt-5 *:font-bold *:text-base gap-3'>
        <button
          className='px-5 py-3 bg-white rounded-full shadow-md w-60'
          type='button'
          onClick={() => navigate('/about')}
        >
          어떤 분에게 필요할까요?
        </button>
        <button
          className='px-5 py-3 mb-10 text-white rounded-full shadow-md w-60 bg-brown'
          type='button'
          onClick={() => navigate('/test-overview')}
        >
          나의 창업 유형 테스트하기
        </button>
      </div>
    </section>
  );
}
