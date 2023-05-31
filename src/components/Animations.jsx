import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export const SlideInFromRight = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
  });

  const animation = useSpring({
    transform: inView ? 'translate3d(0%, 0, 0)' : 'translate3d(100%, 0, 0)',
    config: { mass: 5, tension: 500, friction: 70 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export const SlideInFromLeft = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
  });

  const animation = useSpring({
    transform: inView ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    config: { mass: 5, tension: 500, friction: 70 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export const SlideUpFadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
  });

  const animation = useSpring({
    transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20%, 0)',
    opacity: inView ? 1 : 0,
    config: { mass: 5, tension: 300, friction: 70 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};
