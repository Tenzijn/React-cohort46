import '../styles/Button.css';

type ButtonProps = {
  count: number;
  setCount: (value: number) => void;
};

export default function Button({ count, setCount }: ButtonProps) {
  return (
    <button
      className='count-button'
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Add 1
    </button>
  );
}
