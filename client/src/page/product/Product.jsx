import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneQuery } from "../../redux/dataApi";
import style from "./Product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import "./styles.css";

const Product = () => {
  const { id } = useParams();
  const { data } = useGetOneQuery(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(data && data.name);
  let images = [];

  try {
    images = JSON.parse(data.img) || [];
  } catch (error) {
    console.error("Error parsing JSON: ", error);
  }

  return (
    <div className={style.Product}>
      <div className={style.productContainer}>
        <div className={style.productContainer_slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {images.length > 0 &&
              images.map((image, index) => (
                <SwiperSlide>
                  <img
                    key={index}
                    width={300}
                    height={600}
                    src={`http://localhost:3000/${image}`}
                    alt={`Изображение ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className={style.productContainer_info}>
          <h2>{data && data.name}</h2>

          <div>
            <h2>О товаре</h2>
            <p>{data && data.description}</p>
            <h2>{data && data.price} $</h2>
            <button>Добавить в корзину </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
