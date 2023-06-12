// ClearFilterButton.tsx
import { useDispatch } from 'react-redux';
import { clearFilters } from '@/store/features/filterActions';
import filter from "@/../public/images/Filter_clear.png";
import Image from "next/image";
import s from "./index.module.scss";

const ClearFilterButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <button className={s.filter_btn} onClick={handleClearFilters}>
      <Image src={filter} alt="filter" width={20} height={20} />
    </button>
  );
};

export default ClearFilterButton;
