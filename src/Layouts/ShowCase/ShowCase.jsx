/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

function ShowCase() {
  const cards = [
    {
      title: 'Build faster ⚡️',
      description:
        'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
      image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
      imageRatio: 784 / 1016,
    },
    {
      title: 'Tweak anything 👩‍🎨',
      description:
        'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
      image: 'https://6jlvz1j5q3.csb.app/undraw_upload.svg',
      imageRatio: 839 / 1133,
    },
    {
      title: 'Export your code 🚀',
      description:
        "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
      image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
      imageRatio: 730 / 1030,
    },
  ];

  return (
    <div className="main">
      
        <div className="container">
          <div className="row">
            {cards.map((card, i) => (
              <div className="column" key={i}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
    
    </div>
  );
}

function Card({ card }) {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
  }));

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        const dampen = 50;
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen,
          (x - ref.current.clientWidth / 2) / dampen,
          1.07,
        ];

        setAnimatedProps({ xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        zIndex: isHovered ? 2 : 1,
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      <div className="card-title">{card.title}</div>
      <div className="card-body">{card.description}</div>
      {/* <Image ratio={card.imageRatio} src={card.image} /> */}
    </animated.div>
  );
}



export default ShowCase;
