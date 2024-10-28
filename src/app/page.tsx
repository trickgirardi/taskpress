import Tasklist from '../components/Tasklist.jsx';

export default function Page() {
  return (
    <div className='w-screen h-screen max-h-screen overflow-hidden'>
      <header className='flex flex-row flex-nowrap h-[10vh] justify-around items-center bg-neutral-800'>
        <h1 className='text-white'>Taskpress</h1>
        <div className='flex flex-row flex-nowrap gap-3 justify-between text-neutral-300'>
          <a className='h:text-neutral-400' href="https://github.com/isTrick/taskpress" target='blank'>GitHub</a>
        </div>
      </header>
      <main className='flex flex-row gap-2 justify-center bg-neutral-950 h-[80vh] p-2 overflow-y-auto scroll-smooth scrollbar'>
          <Tasklist />
      </main>
      <footer className='flex h-[10vh] items-center justify-center bg-neutral-800'>
        <p className='text-neutral-600'>Project under development.</p>
      </footer>
    </div>
  );
}