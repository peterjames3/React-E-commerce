import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestItems = ({ currentItems }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(setTimeout);
  }, []);

  return (
    <>
      {currentItems.map((item) => (
        <Link
          key={item.id}
          to={`/product?id=${item.id}`}
          className="flex h-[30rem] flex-col rounded-xl bg-white p-2"
        >
          {loading ? (
            <Skeleton className="h-[12rem] w-full" />
          ) : (
            <div className="h-[45%] cursor-pointer">
              <img
                src={item.image}
                loading="lazy"
                alt={item.title}
                className="h-full w-full object-fill"
              />
            </div>
          )}

          <div className="h-[35%] py-2 pt-2">
            <h3 className="line-clamp-1 cursor-pointer text-center text-xl font-semibold hover:text-orange-600">
              {item.title}
            </h3>
            <div className="flex flex-col space-y-2 pt-4">
              <p className="text-center text-2xl">
                Rating:{" "}
                <span className="font-semibold text-black">
                  {item.rating.rate}
                </span>{" "}
                / 5.0 ({item.rating.count})
              </p>
              <p className="text-center text-2xl font-semibold">
                Price: ${item.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TestItems;
