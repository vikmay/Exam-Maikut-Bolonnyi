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

        <div className={s.left_right_blocks}>
          <div className={s.block}>
            Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar
            gravida odio faucibus feugiat elementum. Nullam nunc blandit purus
            leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at.
            Risus fermentum bibendum convallis nec. Nec fermentum faucibus risus
            diam nisi at lacus vitae ultricies. Sodales phasellus blandit
            posuere senectus interdum. Massa nunc tellus cras egestas sem risus.
            Ut semper at nunc egestas.
          </div>
          <div className={s.block}>
            Lorem ipsum dolor sit amet consectetur. Sit massa proin pulvinar
            gravida odio faucibus feugiat elementum. Nullam nunc blandit purus
            leo nulla commodo malesuada odio. Sem aliquam morbi sapien dolor at.
            Risus fermentum bibendum convallis nec. Nec fermentum faucibus risus
            diam nisi at lacus vitae ultricies. Sodales phasellus blandit
            posuere senectus interdum. Massa nunc tellus cras egestas sem risus.
            Ut semper at nunc egestas.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
