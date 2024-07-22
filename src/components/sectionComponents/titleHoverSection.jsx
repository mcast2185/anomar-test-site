import Image from 'next/image';
import { useEffect } from 'react';

const TitleHoverSection = () => {
  const navLink = gsap.utils.toArray(".nav-link");
  const imgWrap = document.querySelector('.img-wrapper');
  const imgItem = document.querySelector('.img-placeholder Image');


  const moveImg = (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const tl = gsap.timeline();

    tl.to(imgWrap, {
        duration:1,
        x: mouseX,
        y: mouseY,
        ease: Expo.ease
    });
  };

  const linkHover = (e) => {
    if (e.type === "mouseenter") {
      const imgSrc = e.target.dataset.src;
      const tl = gsap.timeline();

      tl.set(imgItem, {
          attr: {src : imgSrc}
      }).to(imgWrap, {
          autoAlpha:1,
          scale:1
      });
    } else if (e.type === "mouseleave") {
      const tl = gsap.timeline();
      tl.to(imgWrap, {
          autoAlpha:0,
          scale:0.3
      })
    };
  };

  const initAnimation = () => {
    navLink.forEach(link => {
      link.addEventListener('mousemove', moveImg);
      link.addEventListener('mouseenter', linkHover);
      link.addEventListener('mouseleave', linkHover);
    });
  };


  useEffect(() => {
    window.addEventListener("load", () => {
      initAnimation();
    });

  }, []);
  
  return (
    <div>
      <section className='title-hover-section'>
        <nav>
          <div className="img-wrapper">
            <div class="img-placeholder">
              <Image alt=""
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
            </div>
          </div>
          <ul>
            <li>
              <a className="nav-link" 
                data-src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" href="#">
                Branding
              </a>
            </li>
            <li>
              <a className="nav-link" 
                data-src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80" href="#">
                Marketing
              </a>
            </li>
            <li>
              <a className="nav-link" 
                data-src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" href="#">
                Solutions
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default TitleHoverSection;