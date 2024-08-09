import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import YellowComma from '../assets/images/YellowComma.png';
import questions from '../data/question';
import Arrow from '../components/ui/Arrow';
import Logo from '../components/ui/Logo';
import menu from '../assets/icons/menu.svg';

export default function TestDetail() {
  const navigate = useNavigate();
  const [result, setResult] = useState({});
  const [currIndex, setCurrIndex] = useState(0);
  const [isDisabled, setIsDisable] = useState(false);
  const questionId = questions[currIndex].id;

  const goBack = (value) => {
    if (currIndex === 0) return;

    const newResult = { ...result };
    delete newResult[value];
    setResult(newResult);
    setCurrIndex((curr) => curr - 1);
  };

  const onSelectAnswer = (value) => {
    const yourAnswer = { ...result, [questionId]: value };
    setResult(yourAnswer);

    if (currIndex < questions.length - 1) {
      setCurrIndex((prev) => prev + 1);
    } else {
      // TO DO: 결과값 데이터 보내기 로직 추가하기
      setIsDisable(true);
      setTimeout(() => {
        navigate('/result');
      }, 2000);
    }
  };

  const progressPercentage = ((currIndex + 1) / questions.length) * 100;

  return (
    <>
      <header className='flex items-center justify-between p-5 bg-primary'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <section className='p-5 bg-background h-screen-minus-header'>
        <div className='space-y-5'>
          <div className='flex items-center justify-between'>
            <button
              type='button'
              disabled={isDisabled}
              onClick={() => goBack(questionId)}
              className={`text-sm cursor-pointer disabled:cursor-auto ${currIndex === 0 ? 'pointer-events-none' : ''}`}
            >
              <div
                className={`flex items-center gap-2 ${currIndex === 0 ? 'invisible' : 'visible'}`}
              >
                <Arrow />
                <span>뒤로</span>
              </div>
            </button>
            <div className='text-2xl font-jua'>창업 멤버 유형 테스트</div>
            <span className='text-sm'>{currIndex + 1}/12</span>
          </div>
          <div className='w-full h-2 bg-white rounded-lg shadow-custom'>
            <div
              className='h-2 rounded-lg bg-primary'
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <article className='flex flex-col w-full px-2 py-8 mt-48 bg-white rounded-3xl shadow-custom'>
          <div className='relative'>
            <img src={YellowComma} alt='comma' className='absolute -top-14 right-2' />
            <h4 className='px-12 py-10 text-lg font-bold text-center'>
              {questions[currIndex].question}
            </h4>
          </div>
          <div className='p-5 space-y-3'>
            {questions[currIndex].example.map(({ answer, value }) => (
              <button
                key={value}
                disabled={isDisabled}
                className='w-full p-5 transition-all border disabled:hover:brightness-100 rounded-2xl border-answer bg-background hover:brightness-90'
                type='button'
                onClick={() => onSelectAnswer(value)}
              >
                {answer}
              </button>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
