import '../styles/Button.css';

type ButtonProps = {
  setCount: () => void;
  text: string;
};

export default function Button({ setCount, text }: ButtonProps) {
  return (
    <button className='count-button' onClick={setCount}>
      {text}
    </button>
  );
}
