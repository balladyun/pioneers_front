import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchResult } from '../services/result';
import Logo from '../components/ui/Logo';
import LinkIcon from '../components/ui/LinkIcon';
import menu from '../assets/icons/menu.svg';
import { handleCopyClipBoard } from '../utils/copyClipboard';

export default function Result() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    const testResult = await fetchResult(id);
    setData(testResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p className='flex flex-col items-center justify-center h-screen'>Loading...</p>;
  }

  return (
    <>
      <header className='flex items-center justify-between p-5 bg-primary'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <section className='p-6 space-y-10 bg-background'>
        <div className='*:text-center *:text-xl'>
          <h3 className='font-bold text-brown'>창업 멤버로서 당신은!</h3>
          <p className='underline font-jua'>{data.name}</p>
        </div>
        <img src={data.imageUrl} alt='type' className='w-full mx-auto rounded-lg shadow-sm' />
        <div className='p-5 my-3 bg-white rounded-lg shadow-custom'>
          <h5 className='py-2 font-bold text-brown'>비슷한 유형의 창업가</h5>
          <p className='pb-2 font-bold'>&ldquo;{data.similarTypeEntrepreneurs}&rdquo;</p>
          <p>{data.entrepreneurDescription}</p>
          <h5 className='py-2 font-bold text-brown'>장점은</h5>
          <ul>
            {data.advantages.split(',').map((adv, index) => (
              <li key={index}>{adv}</li>
            ))}
          </ul>
          <h5 className='py-2 font-bold text-brown'>단점</h5>
          <p>{data.disadvantages}</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h4 className='py-5 text-xl font-bold'>내 결과 공유하기</h4>
          <CopyToClipboard className='copy' text={`${window.location.origin}${pathname}`}>
            <button
              aria-label='copy-link'
              type='button'
              onClick={() => handleCopyClipBoard(`${window.location.origin}${pathname}`)}
            >
              <LinkIcon />
            </button>
          </CopyToClipboard>
        </div>
        <div className='p-5 my-3 bg-white rounded-lg shadow-custom'>
          <h4 className='text-xl text-center font-jua'>궁합이 가장 잘 맞는 유형</h4>
          <p className='py-2 font-bold text-center text-brown'>{data.teamwork.split('-')[0]}</p>
          <p>{data.teamwork.split('-')[1]}</p>
        </div>
        <div className='flex items-center justify-center px-10'>
          <button
            className='w-full px-8 py-3 mb-5 text-xl text-white transition-all rounded-full bg-brown hover:brightness-110'
            type='button'
            aria-label='test-again'
            onClick={() => navigate('/test')}
          >
            테스트 다시하기
          </button>
        </div>
      </section>
    </>
  );
}
