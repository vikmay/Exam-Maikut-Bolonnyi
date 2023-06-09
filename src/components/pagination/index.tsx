import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [activePage, setActivePage] = useState(1);
  const [firstPageNumberToShow, setFirstPageNumberToShow] = useState(1);
  const [buttonsToShow, setButtonsToShow] = useState(Math.min(totalPages, 10)); // Calculate buttonsToShow considering total pages

  useEffect(() => {
    const updateButtonsToShow = () => {
      let buttons = window.innerWidth <= 365 ? 3 : window.innerWidth <= 992 ? 5 : 10;
      setButtonsToShow(Math.min(totalPages, buttons));
    };

    updateButtonsToShow();
    window.addEventListener('resize', updateButtonsToShow);
    return () => {
      window.removeEventListener('resize', updateButtonsToShow);
    };
  }, [totalPages]);

  const handleClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const handleArrowClick = (direction: string) => {
    if (direction === 'left' && firstPageNumberToShow > 1) {
      setFirstPageNumberToShow(Math.max(firstPageNumberToShow - buttonsToShow, 1));
    } else if (direction === 'right' && firstPageNumberToShow <= totalPages - buttonsToShow) {
      setFirstPageNumberToShow(Math.min(firstPageNumberToShow + buttonsToShow, totalPages - buttonsToShow + 1));
    }
  };

  let items = [];
  for (let number = firstPageNumberToShow; number <= Math.min(firstPageNumberToShow + buttonsToShow - 1, totalPages); number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination>
      {firstPageNumberToShow > 1 && <Pagination.Prev onClick={() => handleArrowClick('left')} />}
      {items}
      {firstPageNumberToShow <= totalPages - buttonsToShow && <Pagination.Next onClick={() => handleArrowClick('right')} />}
    </Pagination>
  );
}

export default PaginationControl;
