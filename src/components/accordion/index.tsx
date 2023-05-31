import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import s from './index.module.scss';
import classNames from 'classnames';




function AcoordionExample({ className }) {
  return (
    <Accordion flush className={classNames(s.accordion, className)}>
      <Accordion.Item eventKey="0" className={s.item}>
        <Accordion.Header className={s.header}>Доставка</Accordion.Header>
        <Accordion.Body className={s.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
  
  export default AcoordionExample;