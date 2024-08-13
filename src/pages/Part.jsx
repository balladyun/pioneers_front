import { useNavigate } from 'react-router-dom';

export default function Part() {
  const navigate = useNavigate();

  return (
    <section className='p-6 bg-background'>
      <button
        className='text-[15px] px-5 py-2 rounded-full shadow-lg bg-background'
        type='button'
        onClick={() => navigate(-1)}
      >
        이전으로
      </button>
      <h1 className='my-5 text-2xl font-bold text-center'>파트별 사용법</h1>
      <section className='space-y-7'>
        <article className='bg-[#2E75B6] p-8 rounded-2xl text-white pb-16 shadow-md'>
          <h2 className='font-bold text-[22px] mb-5'>PART 1. 관심사 찾기</h2>
          <p>
            첫번째 파트에서는 예비 창업자 여러분들이 속한 집단, 취미, 그리고 열정을 기반으로
            관심사를 찾아볼 수 있습니다. 여러분이 어떤 분야에 관심이 많은지, 그리고 어떤 집단에 속해
            있는지를 고려하면서 강점과 관심 분야를 정리한다면, 팀빌딩을 더욱 수월하게 준비할 수
            있겠죠?
          </p>
        </article>
        <article className='p-8 pb-16 shadow-md bg-primary rounded-2xl'>
          <h2 className='font-bold text-[22px] mb-5'>PART 2. 네가 생각하는 창업은 뭐야?</h2>
          <p>
            두번째 파트에서는 창업의 가치를 생각해볼 수 있습니다. PART 1에서의 팀빌딩에 이어
            동료들과 함께 창업이란 무엇인지에 대해 심도 깊게 고민해볼 차례입니다. 창업이나 사업을
            통해 어떤 가치를 창출하고 싶은지 비전을 세우고 목표를 설정해보세요!
          </p>
        </article>
        <article className='bg-[#385723] p-8 rounded-2xl text-white pb-16 shadow-md'>
          <h2 className='font-bold text-[22px] mb-5'>PART 3. 아이디어 발굴하기</h2>
          <p>
            세번째 파트는 구체적인 아이디어를 바로 생각해내기 어려운 분들을 위한 단계입니다. 어떤
            아이템을, 왜, 그리고 어떻게 구현할지에 대해 고민해보세요. 팀원들과 함께 아이디어를
            발굴하고, 그 아이디어를 현실로 구현하기 위한 계획을 세워보는 건 어떨까요? 이 과정에서는
            구체적인 실행 전략을 세우며 창업 아이디어를 더욱 효과적으로 발전시킬 수 있습니다.
          </p>
        </article>
        <div className='flex flex-col items-center justify-center gap-3'>
          <button
            type='button'
            className='px-5 py-3 text-base font-bold rounded-full shadow-md w-60 bg-background'
            onClick={() => navigate('/card')}
          >
            구성 보러가기
          </button>
          <button
            type='button'
            className='px-5 py-3 mb-10 text-base font-bold text-white rounded-full shadow-md w-60 bg-brown'
            onClick={() => navigate('/test-overview')}
          >
            나의 창업 유형 테스트하기
          </button>
        </div>
      </section>
    </section>
  );
}
