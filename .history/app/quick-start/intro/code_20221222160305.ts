const code = `import { useAtom } from 'jotai';

const counter = atom(0);

export default function Page() {
  const [counter, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}`;

const files = {
    '/App.js': {
        code: code
    }
}

export default files