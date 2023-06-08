import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControl: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);
  const [firstPageNumberToShow, setFirstPageNumberToShow] = useState(1);
  const [buttonsToShow, setButtonsToShow] = useState(10); // Initial value
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    // Define updateButtonsToShow function
    const updateButtonsToShow = () => {
      setButtonsToShow(window.innerWidth > 992 ? 10 : 5);
    };

    // Update buttonsToShow on mount
    updateButtonsToShow();

    // Listen to resize events
    window.addEventListener('resize', updateButtonsToShow);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateButtonsToShow);
    };
  }, []);

  const handleClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  }

  const handleArrowClick = (direction: string) => {
    if (direction === 'left' && firstPageNumberToShow > 1) {
      setFirstPageNumberToShow(Math.max(firstPageNumberToShow - buttonsToShow, 1));
    } else if (direction === 'right') {
      let newFirstPage = firstPageNumberToShow + buttonsToShow;
      setFirstPageNumberToShow(Math.min(newFirstPage, Math.max(1, totalPages - buttonsToShow + 1)));
    }
  }
  
  let items = [];

  for (let number = firstPageNumberToShow; number < firstPageNumberToShow + buttonsToShow; number++) {
    if ((number - 1) * itemsPerPage < totalItems) {
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
