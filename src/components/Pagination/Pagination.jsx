import React from 'react';
import {
  PaginationBtn,
  PaginationBox,
  PaginationList,
  // PaginationListItem,
} from './Pagination.styled';

export function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const goToPreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };
  const goToNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };
  return (
    <PaginationBox>
      <PaginationBtn disabled={currentPage === 1} onClick={goToPreviousPage}>
        prev
      </PaginationBtn>
      <PaginationList>
        {pageNumbers.map(number => (
          <li
            key={number}
            style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
          >
            <PaginationBtn
              onClick={() => setCurrentPage(number)}
              disabled={currentPage === number}
            >
              {number}
            </PaginationBtn>
          </li>
        ))}
      </PaginationList>
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={goToNextPage}
      >
        next
      </PaginationBtn>
    </PaginationBox>
  );
}
