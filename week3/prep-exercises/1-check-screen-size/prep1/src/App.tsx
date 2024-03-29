import useWindowSize from './customHooks/useWindowSize.tsx';
import './App.css';
import { useEffect } from 'react';

function App() {
  const windowSize = useWindowSize(); // custom hook
  //generate random color for background when window size changes
  useEffect(() => {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    document.body.style.backgroundColor = randomColor;
  }, [windowSize]);

  return (
    <>
      <div>
        <p>
          window size is {windowSize.height}px X {windowSize.width}px
        </p>
      </div>
    </>
  );
}

export default App;
