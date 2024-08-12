import { useNavigate } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import Background from '../assets/images/background.png';
import BlackComma from '../assets/images/BlackComma.png';
import LinkIcon from '../components/ui/LinkIcon';
import Logo from '../components/ui/Logo';
import menu from '../assets/icons/menu.svg';

const TEXT_SHADOW = { textShadow: '1px 5px #ecc64d' };

export default function TestOverview() {
  const navigate = useNavigate();

  return (
    <>
      <header className='flex items-center justify-between p-5 bg-white'>
        <Logo />
        <img src={menu} alt='menu' />
      </header>
      <section className='h-screen-minus-header'>
        <article className='mx-auto text-center'>
          <article className='px-5 py-8 space-y-8 bg-primary'>
            <div className='relative w-full'>
              <img src={Background} alt='background' className='mx-auto' />
              <span className='absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 font-bold text-lg'>
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
              className='w-2/3 py-3 text-2xl text-white transition-all rounded-full bg-brown px-14 hover:brightness-110'
              type='button'
              onClick={() => navigate('/test')}
            >
              테스트 시작!
            </button>
            {/* <p className='text-sm'>참여자 수 | 000명</p> */}
          </article>
        </article>
        <article className='px-5 space-y-5 text-center bg-background'>
          <div className='pt-10 pb-5'>
            <h4 className='text-lg font-bold'>테스트 공유하기</h4>
            <div className='flex items-center justify-center mt-5'>
              <CopyToClipboard
                text={`${window.location.origin}/test-overview`}
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
          </div>
          <div className='p-5 bg-white rounded-lg shadow-custom'>
            <h4 className='text-2xl font-jua'>가장 많은 유형</h4>
            <p className='py-2 text-sm'>참여 통계는 24시간마다 갱신됩니다.</p>
          </div>
        </article>
      </section>
    </>
  );
}
