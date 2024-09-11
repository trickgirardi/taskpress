import AddTask from './components/ListTasks.jsx'

export default function Home() {
  return (
    <div className='w-screen h-screen max-h-screen'>
      <header className='flex flex-row flex-nowrap h-1/6 justify-around items-center bg-zinc-800'>
        <h1 className='text-white'>Nested Tasks</h1>
        <div className='flex flex-row flex-nowrap gap-3 justify-between text-zinc-300'>
          <a className='h:text-zinc-400' href="github.com">GitHub</a>
          <button className='h:text-zinc-400'>Dark Mode</button>
        </div>
      </header>
      <main className='flex flex-row justify-center bg-zinc-950 h-4/6 p-2'>
          <AddTask />
      </main>
      <footer className='flex h-1/6 items-center justify-center bg-zinc-800'>
        <p className='text-zinc-600'>Project under development.</p>
      </footer>
    </div>
  );
}
