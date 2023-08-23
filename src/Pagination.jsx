import React from "react";
import "./Pagination.css";

import { BsFillArrowLeftCircleFill } from "react-icons/Bs";
import { BsFillArrowRightCircleFill } from "react-icons/Bs";

export const Pagination = ({ total, setCurrentPage, currentPage }) => {
  const pages = [];
  let n = Math.ceil(total / 8);
  for (let i = 1; i <= n; i++) {
    pages.push(i);
  }
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < n) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="pagination-container">
      <button onClick={handlePrevious}>
        <BsFillArrowLeftCircleFill />
      </button>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
      <button onClick={handleNext}>
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};
