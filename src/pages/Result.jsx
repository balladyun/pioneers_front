import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchResult } from '../services/result';
import Logo from '../components/ui/Logo';
import LinkIcon from '../components/ui/LinkIcon';
import menu from '../assets/icons/menu.svg';
import { TEAMWORK_POSITION, TYPE_POSITION } from '../constants/position';

export default function Result() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const teamworkText = data && data.teamwork.split('-')[0];

  useEffect(() => {
    const fetchData = async () => {
      const testResult = await fetchResult(id);
      setData(testResult);
    };

    fetchData();
  }, [id]);

  const getTypePosition = () => {
    if (!data) return 'top-[80%] left-[50%]';

    const type = data.imageUrl.match(/([a-zA-Z]+)\.png$/i)?.[1];
    return TYPE_POSITION[type] || 'top-[80%] left-[50%]';
  };

  const getTeamworkPosition = () => {
    if (!data) return 'top-[80%] left-[50%]';
    const type = data.teamworkUrl.match(/t([a-zA-Z]+)\.png$/i)?.[1];
    return TEAMWORK_POSITION[type] || 'right-0 -top-20';
  };

  const renderTeamworkText = () => {
    if (pathname.includes('INFP') || pathname.includes('ISFP')) {
      return (
        <p className='py-2 text-2xl *:font-jua'>
          <span>{teamworkText.slice(0, 5)}</span>
          <br />
          <span>{teamworkText.slice(5)}</span>
        </p>
      );
    }
    return <p className='max-w-xs py-2 text-2xl break-words font-jua'>{teamworkText}</p>;
  };

  if (!data) {
    return <p className='flex flex-col items-center justify-center h-screen'>Loading...</p>;
  }

  return (
    <>
      <header className='flex items-center justify-between p-5 bg-primary'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <section className='bg-background'>
        <div className='w-full rounded-b-[200px] h-[300px] mb-20 bg-primary relative'>
          <div className='*:text-center *:text-xl pt-10'>
            <h3 className='text-xl font-bold text-brown'>창업 멤버로서 당신은!</h3>
            <p className='text-2xl underline font-jua'>{data.name}</p>
          </div>
          <img
            src={data.imageUrl}
            alt='type'
            className={`absolute ${getTypePosition()} transform -translate-x-1/2 -translate-y-1/2`}
          />
        </div>
        <article className='p-7'>
          <div className='p-5 my-3 space-y-4 bg-white rounded-3xl shadow-custom'>
            <div>
              <h5 className='py-2 text-sm font-bold text-brown'>비슷한 유형의 창업가</h5>
              <p className='pb-2 text-[15px] font-bold'>
                &ldquo;{data.similarTypeEntrepreneurs}&rdquo;
              </p>
              <p className='text-base'>{data.entrepreneurDescription}</p>
            </div>
            <div>
              <h5 className='py-2 text-sm font-bold text-brown'>{data.name}의 장점은</h5>
              <ul>
                {data.advantages.split(',').map((adv, index) => (
                  <li key={index} className='text-base'>
                    {adv}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className='py-2 text-sm font-bold text-brown'>{data.name}가 보완할 점은</h5>
              <p className='text-base'>{data.disadvantages}</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center my-5'>
            <h4 className='pt-8 pb-5 text-lg font-bold'>내 결과 공유하기</h4>
            <CopyToClipboard
              text={`${window.location.origin}${pathname}`}
              onCopy={() => alert('링크가 복사되었습니다!')}
            >
              <button
                className='flex items-center justify-between gap-3 px-10 py-3 rounded-full bg-share'
                aria-label='copy-link'
                type='button'
              >
                <LinkIcon />
                <span>테스트 링크 복사</span>
              </button>
            </CopyToClipboard>
          </div>
          <article className='p-6 mt-24 mb-20 bg-white rounded-3xl shadow-custom'>
            <div className='relative flex flex-col'>
              <div className='relative z-10'>
                <h4 className='text-sm font-bold text-brown'>함께하면 최고의 팀워크!</h4>

                {renderTeamworkText()}
              </div>
              <img
                src={data.teamworkUrl}
                alt='teamwork'
                className={`absolute ${getTeamworkPosition()}`}
              />
            </div>
            <p className='pb-5 mt-4'>{data.teamwork.split('-')[1]}</p>
          </article>
          <div className='flex items-center justify-center px-10 my-5'>
            <button
              className='w-full px-8 py-3 text-[22px] font-bold text-white transition-all rounded-full bg-brown hover:brightness-110'
              type='button'
              aria-label='test-again'
              onClick={() => navigate('/test')}
            >
              테스트 다시하기
            </button>
          </div>
        </article>
        <div className='w-full h-32 bg-primary' />
      </section>
    </>
  );
}
