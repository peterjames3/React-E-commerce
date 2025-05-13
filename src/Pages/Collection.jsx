import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TestItems from "../Components/TestItems";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ProductIntro from '../Components/ProductIntro'

const Collection = () => {
  const [pageCount, setPageCount] = useState(1);
  const [error, setError] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useRef(query);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const location = useLocation();
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      setItems(data);
      console.log(items);
      setCurrentItems(data);
      setPageCount(Math.ceil(data.length / itemsPerPage));
    } catch (error) {
      console.log(`Error occurred while fetching: ${error.message}`);
      setError(`Error occurred while fetching: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const endOffset = itemsOffset + itemsPerPage;
    setCurrentItems(items.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemsOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemsOffset(newOffset);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const filtered = items.filter(
      (item) =>
        item.rating.rate >= ratingFilter &&
        item.title.toLowerCase().includes(query ? query.toLowerCase() : ""),
    );
    setCurrentItems(filtered);
  }, [items, ratingFilter, query]);

  const handleRatingChange = (newRating) => {
    setRatingFilter(newRating);
  };
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    const normalizedCategory = category.toLowerCase();
    if (normalizedCategory === "all") {
      setItemsPerPage(8);
      setCurrentItems(items.slice(0, itemsPerPage));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    } else {
      const filtered = items.filter(
        (item) => item.category.toLowerCase() === normalizedCategory,
      );
      setCurrentItems(filtered);
      setPageCount(Math.ceil(filtered.length / itemsPerPage)); // Update pageCount
      setItemsOffset(0); // Reset itemsOffset when changing category
    }
  };

  const categoryButtons = [
    "All",
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  useEffect(() => {
    window.scrollTo(0, 0); //Reset scroll postion to top
  }, [location]);

  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductIntro />
      {error ? (
        <div className="w-full bg-red-100 py-3 text-center text-red-700">
          <h1 className="text-2xl font-semibold">
            Error occurred during fetching
          </h1>
          <button className="text-2xl font-semibold" onClick={fetchData}>
            Please try again later
          </button>
        </div>
      ) : (
        <div className="mt-16 grid w-full ss:grid-flow-col">
          <div className="flex-flex-col col-span-4 row-span-3 divide-y-2 divide-slate-400 border border-slate-700 transition-all delay-300 ss:w-[15rem] md:w-[20rem]">
            <div className="w-full px-10 py-2 sm:px-3 sm:py-2">
              <h6 className="text-xl font-medium text-black">Apply Filters</h6>
              <div className="flex flex-col space-y-4 px-3 pt-5 delay-300 *:rounded-md *:border *:border-slate-400 *:px-4 *:py-3 *:text-xl *:font-medium *:transition-all">
                {categoryButtons.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`${
                      activeCategory === category
                        ? "bg-orange-600 text-white"
                        : "bg-transparent text-black"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full px-5 py-2">
              <h6 className="text-xl font-medium text-black">Store reviews</h6>
              <p className="text-black">Based on a 5-star rating system</p>
              <div className="flex flex-col space-y-4 px-10 pt-3 ss:px-2">
                {[3.0, 3.5, 4.0, 4.5, 5.0].map((rating) => (
                  <div className="w-full text-black" key={`rating-${rating}`}>
                    <label className="flex justify-between rounded-md bg-slate-400 px-4 py-3">
                      <input
                        type="radio"
                        name="rating"
                        className="justify-between px-2 font-medium accent-indigo-500"
                        onChange={() => handleRatingChange(rating)}
                      />
                      <span>{rating} & up</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col items-center justify-between space-y-4 px-4 py-2 ss:flex-row ss:space-y-0">
            <nav className="text-center text-3xl font-semibold ss:text-end">
              Shop to your heart content!
            </nav>
            <nav>
              <input
                type="text"
                ref={inputRef}
                value={query}
                placeholder="Search for products..."
                className="rounded-lg border border-orange-600 px-2 py-2 outline-none"
                onChange={(e) => setQuery(e.target.value)}
              />
            </nav>
          </div>
          <div className="col-span-4 grid grid-cols-1 grid-rows-1 gap-5 px-5 py-7 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {<TestItems currentItems={currentItems} />}
          </div>
        </div>
      )}

      <ReactPaginate
        className="pagination-container flex items-center justify-center gap-5 divide-x divide-slate-300 *:border"
        breakLabel="..."
        nextLabel="next "
        onClick={handlePageClick}
        pageRangeDisplayed={2}
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
    </motion.div>
  );
};

export default Collection;
