import AddTask from './components/ListTasks.jsx'

export default function Home() {
  return (
    <div className='w-screen h-screen max-h-screen overflow-hidden'>
      <header className='flex flex-row flex-nowrap h-[10vh] justify-around items-center bg-zinc-800'>
        <h1 className='text-white'>Nested Tasks</h1>
        <div className='flex flex-row flex-nowrap gap-3 justify-between text-zinc-300'>
          <a className='h:text-zinc-400' href="github.com">GitHub</a>
          <button className='h:text-zinc-400'>Dark Mode</button>
        </div>
      </header>
      <main className='flex flex-row gap-2 justify-center bg-zinc-950 h-[80vh] p-2 overflow-y-auto scroll-smooth scrollbar'>
          <AddTask />
      </main>
      <footer className='flex h-[10vh] items-center justify-center bg-zinc-800'>
        <p className='text-zinc-600'>Project under development.</p>
      </footer>
    </div>
  );
}
