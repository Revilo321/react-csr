import React from 'react'

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage)
  const pageLimit = 5
  let startPage = currentPage - 2
  let endPage = currentPage + 2

  if (startPage <= 0) {
    startPage = 1
    endPage = Math.min(pageLimit, pageCount)
  }

  if (endPage > pageCount) {
    endPage = pageCount
    startPage = Math.max(1, endPage - pageLimit + 1)
  }

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  )

  return (
    <div className='flex justify-center space-x-2 mt-4'>
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(1)}
          className='px-4 py-2 rounded bg-gray-300'>
          First
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}>
          {page}
        </button>
      ))}
      {currentPage < pageCount && (
        <button
          onClick={() => onPageChange(pageCount)}
          className='px-4 py-2 rounded bg-gray-300'>
          Last
        </button>
      )}
    </div>
  )
}
