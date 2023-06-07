import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


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
      setFirstPageNumberToShow(Math.max(firstPageNumberToShow - maxPageNumbersToShow, 1));
    } else if (direction === 'right') {
      let newFirstPage = firstPageNumberToShow + maxPageNumbersToShow;
      setFirstPageNumberToShow(Math.min(newFirstPage, Math.max(1, totalPages - maxPageNumbersToShow + 1)));

    }
  }
  
  let items = [];

  for (let number = firstPageNumberToShow; number < firstPageNumberToShow + maxPageNumbersToShow; number++) {
    if ((number - 1) * itemsPerPage < totalItems) { // Condition added here
      items.push(
        <Pagination.Item key={number} active={number === activePage} onClick={() => handleClick(number)}>
          {number}
        </Pagination.Item>,
      );
    }
  }

  return (
    <Pagination>
      <Pagination.Prev onClick={() => handleArrowClick('left')} />
      {items}
      <Pagination.Next onClick={() => handleArrowClick('right')} />
    </Pagination>
  );
}

export default PaginationControl;
