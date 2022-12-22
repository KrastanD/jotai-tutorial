const code = `import { useAtom } from 'jotai';

const count = atom(0);

export default function Page() {
  const [count, setCount]
  const toggleDarkMode = () => setDarkMode(darkMode === 'light'? 'dark' : 'light')
  return (
    <div className={darkMode}>
      <h1>Welcome to {darkMode} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </div>
  )
}`;

const files = {
    '/App.js': {
        code: code
    }
}

export default files