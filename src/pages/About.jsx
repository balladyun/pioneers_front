import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import doubleQuoteLeft from '../assets/images/double-quote-left.png';
import doubleQuoteRight from '../assets/images/double-quote-right.png';

const article = 'bg-white shadow-lg p-7 rounded-2xl';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='p-5 bg-background h-screen-minus-header'>
      <div className='flex items-center justify-between'>
        <button
          className='text-[15px] px-5 py-2 rounded-full shadow-lg bg-background'
          type='button'
          onClick={() => navigate(-1)}
        >
          이전으로
        </button>
        <button
          className='text-[15px] font-bold px-5 py-2 text-white rounded-full shadow-lg bg-brown'
          type='button'
          onClick={() => navigate('/part')}
        >
          파트별 사용법
        </button>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 p-5 mt-8'>
        <h4 className='text-title text-[15px]'>어떤 분에게 필요할까요?</h4>
        <p className='text-2xl font-bold'>창업팀, 대학생 창업 동아리</p>
      </div>
      <section className='relative pb-16 mt-16 space-y-4'>
        <img className='absolute -left-5 -top-9' src={doubleQuoteLeft} alt='double-quote-left' />
        <img
          className='absolute bottom-5 -right-5'
          src={doubleQuoteRight}
          alt='double-quote-right'
        />
        <article className={`relative z-10 ${article}`}>
          <h4 className='mb-3 text-center text-title'>첫번째</h4>
          <p>
            <span className='font-bold'>창업팀</span>에 속한 여러분,{' '}
            <span className='font-bold'>대화</span>가 필요해 보여요.{' '}
            <span className='font-bold'>동료와 함께 같은 목표를 설정</span>해 보세요!
          </p>
        </article>
        <article className={`relative z-10 ${article}`}>
          <h4 className='mb-3 text-center text-title'>두번째</h4>
          <p>
            <span className='font-bold'>초기 입문 단계인 창업팀</span> 여러분, 질문에 답하고
            기록하며 <span className='font-bold'>복잡한 머릿속을 정리</span>해 보세요!
          </p>
        </article>
        <article className={`relative z-10 ${article}`}>
          <h4 className='mb-3 text-center text-title'>세번째</h4>
          <p>
            <span className='font-bold'>팀원 또는 부원을 선발</span>할 때 적절한 질문카드를 활용하여{' '}
            <span className='font-bold'>면접을 성사</span>시키세요!
          </p>
        </article>
      </section>
    </section>
  );
}
