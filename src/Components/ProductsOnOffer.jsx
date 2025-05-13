import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ProductsOnOffer = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products/category/jewelery").then((res) =>
        res.json(),
      ),
  });

  if (isPending) return "loading...";
  if (error) return "An error has occurred" + error.message;
  console.log(data);
  const products = data.map((product) => {
    return (
      <SwiperSlide
        key={product.id}
        className="z-[-10] hover:cursor-pointer relative flex-row-reverse gap-4 px-10 sm:flex"
      >
        <div className="sm:h-[25rem] sm:w-[70%]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="sm:grow">
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p>
            Rating:{" "}
            <span className="font-medium text-Orange">
              {product.rating.rate} / 5
            </span>{" "}
          </p>
          <p>
            Available:{" "}
            <span className="pr-2 font-medium text-Orange">
              {product.rating.count}
            </span>
            pieces
          </p>
          <p className="text-xl">
            Price:{" "}
            <span className="font-bold text-Orange">${product.price}</span>
          </p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section className="h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-black"
      >
        {products}
      </Swiper>
    </section>
  );
};

export default ProductsOnOffer;
