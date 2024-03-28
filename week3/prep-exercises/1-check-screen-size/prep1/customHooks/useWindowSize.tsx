export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	      });
	    
	      useEffect(() => {
		const handleResize = () => {
		  setWindowSize({
		    width: window.innerWidth,
		    height: window.innerHeight,
		  });
		};
  return windowSize;
}
