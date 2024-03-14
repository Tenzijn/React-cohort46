import { useState, useEffect } from 'react';
import '../styles/Counter.css';
import Button from './Button';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('keep counting......');
  useEffect(() => {
    if (count > 10) {
      setFeedback("It's higher than 10!");
    } else if (count < 0) {
      setFeedback("It's less than 0");
    } else {
      setFeedback('keep counting......');
    }
  }, [count]);

  return (
    <div className='count'>
      <h1 className='count-text'>{count}</h1>
      <p className='count-feedback'>{feedback}</p>
      <Button setCount={() => setCount(count + 1)} text='Add 1' />
      <Button setCount={() => setCount(count - 1)} text='Sub 1' />
      <Button setCount={() => setCount(0)} text='Reset' />
    </div>
  );
}
