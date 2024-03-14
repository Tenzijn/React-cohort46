import { useState, useEffect } from 'react';
import '../styles/Counter.css';
import Button from './Button';
export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('keep counting......');
  useEffect(() => {
    count > 10
      ? setFeedback("It's higher then 10!")
      : setFeedback('keep counting......');
  }, [count]);

  return (
    <div className='count'>
      <h1 className='count-text'>{count}</h1>
      <p className='count-feedback'>{feedback}</p>
      <Button count={count} setCount={setCount} />
    </div>
  );
}
