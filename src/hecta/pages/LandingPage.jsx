import { useState, useEffect } from 'react';
import { Benefits1, Benefits2, Benefits3, Footer, Header, Hero } from '../components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './LandingPage.css';

const benefitsComponents = [<Benefits1 key={'benefits1'}/>, <Benefits2 key={'benefits2'}/>, <Benefits3 key={'benefits3'}/>];

export const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefitsComponents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <TransitionGroup className="benefits-container">
        <CSSTransition
          key={currentIndex}
          timeout={500}
          classNames="slide"
        >
          <div>
            {benefitsComponents[currentIndex]}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};