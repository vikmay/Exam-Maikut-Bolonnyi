import s from './index.module.scss';
import { MouseEventHandler } from 'react';

interface CrossButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CrossButton: React.FC<CrossButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className={s.remove_btn}>
    <div className={s.cross_btn}>
      <span className={s.vector}></span>
      <span className={s.vector}></span>
    </div>
  </button>
);

export default CrossButton;
