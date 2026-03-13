import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiEffect = ({ recycle = false, numberOfPieces = 200 }) => {
  const { width, height } = useWindowSize();

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={recycle}
      numberOfPieces={numberOfPieces}
      gravity={0.15}
    />
  );
};

export default ConfettiEffect;
