import React, { useEffect, useState } from "react";

const Circle = ({ colors, score, setScore }) => {
  let randomPosition = () => {
    return Math.floor(Math.random() * 900);
  };

  const [visiblity, setVisibility] = useState(true);
  const [position, setPosition] = useState({
    x: randomPosition(),
    y: randomPosition(),
  });

  let styles = {
    background: `linear-gradient(${colors[0]}, ${colors[1]})`,
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  useEffect(() => {
    setInterval(() => {
      setPosition({
        x: randomPosition(),
        y: randomPosition(),
      });
    }, 1000);
  }, []);

  return (
    <>
      {visiblity ? (
        <div
          className="circle"
          style={styles}
          onClick={() => {
            setVisibility(false);
            setScore(score + 1);
          }}
        ></div>
      ) : null}
    </>
  );
};

export default Circle;
