import Header from './Header';

export default function Layout({ children }) {
  return (
    <main className='flex flex-col min-h-screen mx-auto max-w-[480px]'>
      <Header />
      <section className='grow'>{children}</section>
    </main>
  );
}
