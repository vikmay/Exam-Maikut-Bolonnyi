import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import s from './index.module.scss';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);
  const [firstPageNumberToShow, setFirstPageNumberToShow] = useState(1);
  const maxPageNumbersToShow = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  }

  const handleArrowClick = (direction: string) => {
    if (direction === 'left' && firstPageNumberToShow > 1) {
      setFirstPageNumberToShow(firstPageNumberToShow - maxPageNumbersToShow);
    } else if (direction === 'right' && firstPageNumberToShow + maxPageNumbersToShow <= totalPages) {
      setFirstPageNumberToShow(firstPageNumberToShow + maxPageNumbersToShow);
    }
  }

  let items = [];

  for (let number = firstPageNumberToShow; number < firstPageNumberToShow + maxPageNumbersToShow; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination className={s.pagination}>
      <Pagination.Prev className={s.buttons} onClick={() => handleArrowClick('left')} />
      {items}
      <Pagination.Next className={s.buttons} onClick={() => handleArrowClick('right')} />
    </Pagination>
  );
}

export default PaginationControl;
