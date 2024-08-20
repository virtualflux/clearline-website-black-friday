'use client'

import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, items, setItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  // Get the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items?.slice(startIndex, startIndex + itemsPerPage);

  // Set the items for the current page
  setItems(currentItems);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-300'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 mx-1 rounded-lg ${
            currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
