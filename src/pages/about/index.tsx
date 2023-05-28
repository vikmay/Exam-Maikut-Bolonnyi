import React from "react";
import s from "../../pages/about/index.module.scss";
const About = () => {
  return (
    <>
      <div className={s.history__block}>
        <h1 className={s.h1}>Наша історія</h1>
        <p className={s.p}>
          Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus amet
          proin enim porttitor arcu laoreet. Volutpat posuere eu blandit egestas
          faucibus. Sit lacinia feugiat maecenas tincidunt aliquet. Sodales
          suscipit ac sollicitudin fermentum. Egestas quis sagittis augue
          egestas sit volutpat at diam.
        </p>
        <span className={s.span}>Lorem ipsum dolor</span>
      </div>
    </>
  );
};

export default About;
