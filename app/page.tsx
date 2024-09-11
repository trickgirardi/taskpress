import AddTask from './components/ListTasks.jsx'

export default function Home() {
  return (
    <>
      <header className='flex flex-row flex-nowrap justify-between bg-zinc-800'>
        <h1 className='p-7 text-white'>Nested Tasks</h1>
        <div className='p-7 flex flex-row flex-nowrap gap-3 justify-between text-zinc-300'>
          <a className='h:text-zinc-400' href="github.com">GitHub</a>
          <p className='h:text-zinc-400'>Dark Mode</p>
        </div>
      </header>
      <main className='bg-zinc-950'>
        <div className='bg-zinc-800'>
          <AddTask />
        </div>
      </main>
    </>
  );
}
