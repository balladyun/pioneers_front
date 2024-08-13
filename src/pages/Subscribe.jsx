import { useState } from 'react';
import { subscribeNewsLetter } from '../services/subscribe';

export default function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeNewsLetter(name, email);
      alert('이메일이 등록되었습니다.');
      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='min-h-screen-minus-header bg-primary'>
      <h1 className='py-10 text-3xl font-bold text-center'>스타트업 레터</h1>
      <article className='p-6 pt-0'>
        매주 활발히 활동 중인 창업가 한 분을 인터뷰하여, 창업에 대한 진정한 인사이트를
        제공해드립니다. 대학생 창업동아리의 솔직하고 담백한 이야기를 통해, 현실적인 조언과 생생한
        경험담을 전달합니다. 열정 넘치는 창업가들의 이야기를 통해, 여러분의 창업 여정에 새로운
        동력을 더해드리겠습니다. 지금 구독하고, 창업가로서의 삶을 더욱 풍성하게 만들어보세요!
      </article>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-6'>
        <input
          className='outline-none bg-[#F9CA35] p-3 rounded-lg border border-[#3a3a3a] border-opacity-5 placeholder:text-[#1e1d1c] placeholder:text-opacity-70'
          type='text'
          placeholder='Name'
          value={null || name}
          onChange={handleNameChange}
          required
        />
        <input
          className='outline-none bg-[#F9CA35] p-3 rounded-lg border border-[#3a3a3a] border-opacity-5 placeholder:text-[#1e1d1c] placeholder:text-opacity-70'
          type='email'
          placeholder='Email'
          value={null || email}
          onChange={handleEmailChange}
          required
        />
        <label
          htmlFor='agree'
          aria-controls='agree'
          className='text-sm text-[#1e1d1c] text-opacity-70 flex items-center gap-3 px-3 cursor-pointer'
        >
          <input type='checkbox' id='agree' name='agree' />
          <span>입력하신 정보는 정보 제공 이외의 용도로 사용되지 않습니다.</span>
        </label>
        <button
          type='submit'
          className='px-16 py-3 mx-auto mt-8 mb-10 text-base font-bold text-white rounded-full shadow-md bg-brown w-fit'
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
