import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import WhiteLogo from '../components/ui/WhiteLogo';
import whitemenu from '../assets/icons/whitemenu.svg';
import card1 from '../assets/images/card1.svg';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import next from '../assets/icons/next.svg';
import cardall from '../assets/images/cardall.svg';
import know from '../assets/icons/know.svg'; // 추가된 이미지

export default function Home() {
  const navigate = useNavigate();
  const [cardImage, setCardImage] = useState(card1);
  const [buttonImage, setButtonImage] = useState(next);
  const [buttonSize, setButtonSize] = useState({ width: '6rem', height: '6rem' });
  const [textContent, setTextContent] = useState({
    count: '[카드 14개]',
    header: 'PART 1. 관심사 찾기',
    description: '내가 속한 집단, 취미, 열정을 기반으로',
  });
  const sectionTwoRef = useRef(null);

  const handleNextClick = () => {
    if (cardImage === card1) {
      setCardImage(card2);
      setTextContent({
        count: '[카드 10개]',
        header: 'PART 2. 아이디어 확장',
        description: '다양한 가능성을 탐구하고 실현 가능성을 검토하세요.',
      });
    } else if (cardImage === card2) {
      setCardImage(card3);
      setButtonImage(know); // 두 번째 클릭 시 버튼 이미지 변경
      setButtonSize({ width: '12rem', height: '6rem' });
      setTextContent({
        count: '[카드 8개]',
        header: 'PART 3. 실행 계획 수립',
        description: '구체적인 실행 계획을 세워 나가세요.',
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
      <header className='flex items-center justify-between p-5 bg-black'>
        <WhiteLogo />
        <img src={whitemenu} alt='menu' />
      </header>

      <section className='min-h-screen p-8 bg-black'>
        <div
          className='mt-6 text-2xl font-bold text-center text-white'
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          카드 패키지 구성
        </div>

        <div className='relative flex justify-center mt-6'>
          <img src={cardImage} alt='card' className='w-3/5 h-auto' />
          <img
            src={buttonImage}
            alt='next'
            className='absolute cursor-pointer -bottom-10 right-8'
            style={{ width: buttonSize.width, height: buttonSize.height }}
            onClick={buttonImage === know ? handleKnowClick : handleNextClick}
          />
        </div>

        <div className='p-4 mt-10 mb-10 ml-8'>
          <div className='text-base leading-6 text-left text-white text-opacity-87'>
            {textContent.count}
          </div>

          <div className='max-w-md mx-auto mt-2 text-left text-white'>
            <span>
              <span className='text-lg font-bold leading-7 text-white'>
                {textContent.header}
                <br />
              </span>
              <span className='text-lg leading-7 text-white'>{textContent.description}</span>
            </span>
          </div>
        </div>

        <div
          className='mt-24 ml-6 text-2xl font-bold text-left text-white'
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          사용 방법
        </div>

        <div className='relative'>
          <div className='w-[24.5rem] h-[21rem] bg-[#f3eadf] rounded-3xl border border-white/13 shadow-lg mx-auto mt-10'>
            <div className='flex flex-col gap-4 items-start justify-start w-[307px] mx-auto mt-10 ml-8'>
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

          <div className='w-[24.5rem] h-[21rem] bg-[#f3eadf] rounded-3xl border border-white/13 shadow-lg mx-auto mt-6'>
            <div className='flex flex-col gap-4 items-start justify-start w-[307px] mx-auto mt-10 ml-8'>
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
        </div>
      </section>

      <section className='min-h-screen p-4 overflow-hidden bg-gray' ref={sectionTwoRef}>
        <div className='flex justify-center mt-10'>
          <img src={cardall} alt='cardall' className='w-full max-w-[400px] h-auto' />
        </div>

        <div className='max-w-md p-4 mx-auto mt-5 mt-10'>
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

      <article className='bg-black p-4 flex justify-center h-auto min-h-[300px]'>
        <button
          className='bg-white rounded-full w-[216px] h-[42px] mt-12 shadow-md font-bold text-sm'
          type='button'
          onClick={() => navigate('/Need')}
        >
          창업 뉴스레터 구독하기
        </button>
      </article>
    </>
  );
}
