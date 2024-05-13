import ReactPaginate from "react-paginate";

const PaginationComponent = ({ data, itemsPerpage, onPageChange, pageCount }) => {
  return (
    <div className="max-w-[500px] my-2 mx-auto ">
      <ReactPaginate className=" pagination-container flex gap-5  divide-x divide-slate-300 justify-center   items-center *:border  "
        breakLabel="..."
        nextLabel="next "
        onClick={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=" previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationComponent;
