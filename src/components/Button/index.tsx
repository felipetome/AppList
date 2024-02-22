import { Heart } from 'phosphor-react-native';
import { Text } from 'react-native';
import { LikeBtn } from './styles';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';

interface IBtn {
  liked: boolean;
  onPress: () => void;
}

export function ButtonLike({ liked, onPress }: IBtn) {
  const [save, setSave] = useState(false);
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      if (save) {
        animation.current.play(94, 94);
      } else {
        animation.current.play(0, 0);
      }
      firstRun.current = false;
    } else if (save) {
      animation.current.play(0, 90);
    } else {
      animation.current.play(90, 0);
    }
  }, [save]);

  const handlePress = () => {
    setSave(!save);
    onPress();
  };

  return (
    <LikeBtn onPress={handlePress}>
      <LottieView
        source={require('../../../assets/lottie/like.json')}
        resizeMode="cover"
        autoPlay={false}
        loop={false}
        style={{ width: 52, height: 48 }}
        ref={animation}
      />
    </LikeBtn>
  );
}
