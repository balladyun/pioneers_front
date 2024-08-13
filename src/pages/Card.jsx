import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import card1 from '../assets/card-1.svg';
import card2 from '../assets/card-2.svg';
import card3 from '../assets/card-3.svg';
import next from '../assets/icons/next.svg';
import collection from '../assets/card-collection.svg';
import know from '../assets/icons/know.svg';

export default function Card() {
  const navigate = useNavigate();
  const [cardImage, setCardImage] = useState(card1);
  const [buttonImage, setButtonImage] = useState(next);
  const [textContent, setTextContent] = useState({
    count: '[카드 14개]',
    header: 'PART 1. 관심사 찾기',
    description: '내가 속한 집단, 취미, 열정을 기반으로',
  });
  const sectionTwoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNextClick = () => {
    if (cardImage === card1) {
      setCardImage(card2);
      setTextContent({
        count: '[카드 14개, 밸런스 게임 1개]',
        header: 'PART 2. 네가 생각하는 창업은 뭐야?',
        description: '창업에 대한 가치를 중심으로',
      });
    } else if (cardImage === card2) {
      setCardImage(card3);
      setButtonImage(know);
      setTextContent({
        count: '[카드 16개]',
        header: 'PART 3. 아이디어 발굴하기',
        description: '구체적인 아이디어보다 무엇을, 왜, 어떻게 구현할지를 기반으로',
      });
    }
  };

  const handleKnowClick = () => {
    if (buttonImage === know && sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className='h-full p-8 bg-black'>
        <h1 className='text-2xl font-bold text-center text-white'>카드 패키지 구성</h1>
        <section>
          <div className='relative flex justify-center mt-6'>
            <img src={cardImage} alt='card' className='w-3/5 h-auto' />
            <button
              type='button'
              onClick={buttonImage === know ? handleKnowClick : handleNextClick}
              className=''
            >
              <img
                src={buttonImage}
                alt='next'
                className='absolute cursor-pointer -bottom-10 right-8'
              />
            </button>
          </div>
          <div className='flex flex-col justify-center items-start w-fit mx-auto mt-10 mb-16 p-5 *:text-white'>
            <h5 className='mb-3 text-base'>{textContent.count}</h5>
            <p className='text-lg font-bold'>{textContent.header}</p>
            <p className='text-lg '>{textContent.description}</p>
          </div>
        </section>

        <section>
          <h1 className='text-2xl font-bold text-white mb-7'>사용 방법</h1>
          <section className='*:bg-[#f3eadf] flex flex-col gap-5 mb-10'>
            <article className='p-6 space-y-2 rounded-xl'>
              <h2 className='text-lg font-bold'>1. 예비 동업자와 함께 하기</h2>
              <ul className='space-y-4'>
                <li>
                  - 카드를 순서대로 뒤집으며 함께 플레이하는 친구들과 자유롭게 이야기를 나누세요.
                </li>
                <li>
                  - 대답하면서 메모를 해도 좋고, 아이스 브레이킹 카드처럼 가볍게 사용해도 좋아요.
                </li>
                <li>
                  - 친구들과 서로가 꿈꾸는 창업을 알아보고 효율적으로 아이디에이션 과정을
                  진행해보세요.
                </li>
              </ul>
            </article>
            <article className='p-6 space-y-2 rounded-xl'>
              <h2 className='text-lg font-bold'>2. 나의 창업 아이템을 구체화하기</h2>
              <ul className='space-y-4'>
                <li>
                  - 카드가 이끄는 대로 순서대로 질문에 답하며 자신의 창업 의지를 구체화해보세요.
                </li>
                <li>- 막연했던 아이디어나 창업에 대한 생각을 확장해보세요.</li>
                <li>- 진행하다가 답변이 막힐 때는 힌트를 참고해보세요.</li>
              </ul>
            </article>
          </section>
        </section>

        {/* <div className='relative'>
          <div className='bg-[#f3eadf] '>
            <div className='flex flex-col items-start justify-start gap-4 mx-auto mt-10 ml-8'>
              <div className='text-left font-bold text-xl leading-7 text-[#1e1d1c]'>
                1. 예비 동업자와 함께 하기
              </div>
              <div className='flex flex-col gap-4'>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 카드를 순서대로 뒤집으며 함께 플레이하는 친구들과 자유롭게 이야기를 나누세요.
                </div>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 대답하면서 메모를 해도 좋고, 아이스 브레이킹 카드처럼 가볍게 사용해도 좋아요.
                </div>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 친구들과 서로가 꿈꾸는 창업을 알아보고 효율적으로 아이디에이션 과정을
                  진행해보세요.
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#f3eadf]'>
            <div className='flex flex-col items-start justify-start gap-4 mx-auto mt-10 ml-8'>
              <div className='text-left font-bold text-xl leading-7 text-[#1e1d1c]'>
                2. 나의 창업 아이템을 구체화하기
              </div>

              <div className='flex flex-col gap-4'>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 카드가 이끄는 대로 순서대로 질문에 답하며 자신의 창업 의지를 구체화해보세요.
                </div>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 막연했던 아이디어나 창업에 대한 생각을 확장해보세요.
                </div>
                <div className='text-left text-base leading-6 text-[#1e1d1c]'>
                  - 진행하다가 답변이 막힐 때는 힌트를 참고해보세요.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className='p-8 overflow-hidden bg-gray' ref={sectionTwoRef}>
        <article className='p-8 bg-black rounded-xl'>
          <h4 className='text-lg text-white opacity-70'>창업을 고민하는 분들을 위한 카드</h4>
          <p className='text-lg font-bold text-primary'>&lsquo;창업 길잡이 카드&rsquo;</p>
          <img src={collection} alt='card-collection' className='mt-5' />
        </article>

        <div className='max-w-md p-4 mx-auto mt-10'>
          <p className='text-base font-normal leading-7 text-left text-white'>
            창업 길잡이카드는 예비 창업자 여러분들에게 창의적이고 체계적인 접근방법을 제공하여
            여러분의 열정과 아이디어를 현실로 이끌어가는 데 도움을 주기 위해 만들어졌습니다.
            <br />
            동료들과의 협업을 통해 새로운 가치를 창출하고, 지속가능한 성장을 꿈꾸며 나아가는
            여정에서의 승리를 응원합니다. 꿈을 향한 여러분들의 첫걸음을 믿고 나아가, 결실을 이룰 수
            있기를 바라겠습니다!
          </p>
        </div>
      </section>
      <section className='flex items-center justify-center bg-black'>
        <button
          type='button'
          className='px-4 py-3 my-20 font-bold bg-white rounded-full'
          onClick={() => navigate('/subscribe')}
        >
          창업 뉴스레터 구독하기
        </button>
      </section>
    </>
  );
}
