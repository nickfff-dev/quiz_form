import React, { useEffect } from 'react';
import Header from './Header';
import FormLanding from './Formlanding';
import Announcebar from './Announcebar';
import Formstep1 from './Formstep1';



function Home() {
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');

  useEffect(() => { 
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL, obsOptions);
    });
  })
  
  return (
    <>
      <Announcebar />
      <Header />
      <Formstep1 />
    </>
  );
}


export default Home;
