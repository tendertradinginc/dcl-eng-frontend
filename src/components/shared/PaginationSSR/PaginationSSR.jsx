"use client";
const PaginationSSR = ({ page, limit, totalPage, onPageChange }) => {
  const pageNumber = Number(page);
  const getPaginationItems = () => {
    const items = [];
    if (totalPage <= 5) {
      for (let i = 1; i <= totalPage; i++) {
        items.push(
          <button
            key={i}
            className={`mx-1 px-3 py-1 rounded border ${
              pageNumber === i
                ? "border-[#F78C40] bg-[#F78C40] text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        items.push(
          <button
            key={i}
            className={`mx-1 px-3 py-1 rounded border ${
              pageNumber === i
                ? "border-[#F78C40] bg-[#F78C40] text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }

      items.push(
        <span key="ellipsis" className="mx-1 px-3 py-1 text-gray-700">
          ...
        </span>
      );

      items.push(
        <button
          key={totalPage}
          className={`mx-1 px-3 py-1 rounded border ${
            pageNumber === totalPage
              ? "border-[#F78C40] bg-[#F78C40] text-white"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(totalPage)}
        >
          {totalPage}
        </button>
      );
    }

    return items;
  };
  return (
    <div className="flex items-center justify-center mt-4 gap-x-3">
      <button
        className={`mx-1 px-3 py-1 rounded border ${
          pageNumber <= 1
            ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
            : "border-[#F78C40] text-[#F78C40] hover:bg-[#F78C40] hover:text-white duration-200"
        } `}
        onClick={() => onPageChange(pageNumber > 1 ? pageNumber - 1 : 1)}
        disabled={pageNumber <= 1}
      >
        Previous
      </button>
      {getPaginationItems()}
      <button
        className={`mx-1 px-3 py-1 rounded border ${
          totalPage <= pageNumber
            ? "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed"
            : "border-[#F78C40] text-[#F78C40] hover:bg-[#F78C40] hover:text-white duration-200"
        }`}
        onClick={() =>
          onPageChange(totalPage > pageNumber ? pageNumber + 1 : totalPage)
        }
        disabled={totalPage <= pageNumber}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationSSR;
