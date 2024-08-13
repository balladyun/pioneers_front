import Header from './Header';

export default function Layout({ children }) {
  return (
    <main className='mx-auto max-w-[480px] h-screen'>
      <Header />
      {children}
    </main>
  );
}
