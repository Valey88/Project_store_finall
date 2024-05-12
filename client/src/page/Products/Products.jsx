import { useState } from "react";
import style from "./Products.module.css";
import { useGetDeviceQuery } from "../../redux/dataApi";
import { Link } from "react-router-dom";
import { useGetTypeQuery } from "../../redux/dataApi";
import { useGetDeviceForeTypesMutation } from "../../redux/dataApi";

const Products = () => {
  const { data } = useGetDeviceQuery();
  const { data: types } = useGetTypeQuery();
  const [filter] = useGetDeviceForeTypesMutation();
  // const { data: typesWithDevices } = useGetDeviceForeTypesQuery(id);
  // const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Количество продуктов на одной странице
  const [selectedType, setSelectedType] = useState(null);

  const filteredProducts = selectedType
    ? data?.rows.filter((product) => product.typeId === selectedType)
    : data?.rows;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts
    ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log(types);
  const handleTypeClick = (id) => {
    setSelectedType(id);
  };

  return (
    <div className={style.Products}>
      <div className={style.Products_title}>
        <div>
          <h1>Products</h1>
        </div>
      </div>
      <div className={style.Products_content}>
        <div className={style.Products_menu}>
          <div className={style.Products_menu_title}>
            <h2>Выберите категорию:</h2>
          </div>
          <div className={style.Products_menu_item}>
            {types?.map((item) => {
              return (
                <Link
                  onClick={() => handleTypeClick(item.id)}
                  to={"/products/"}
                  key={item.id}
                >
                  <h2>{item.name}</h2>
                  {/* <button onClick={}>фильтр</button> */}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={style.Products_cards}>
          <div className={style.container}>
            <div className={style.separator}>
              {currentProducts?.map((item) => {
                let images = [];

                try {
                  images = JSON.parse(item.img) || [];
                } catch (error) {
                  console.error("Error parsing JSON: ", error);
                }

                return (
                  <Link to={"/product/" + item.id} key={item.id}>
                    <div className={style.Products_card}>
                      <div className={style.Products_card_img}>
                        {images.length > 0 && (
                          <img
                            width={300}
                            height={500}
                            src={`http://localhost:3000/${images[0]}`}
                            alt=""
                          />
                        )}
                      </div>
                      <h3>{item.name}</h3>
                      <p>Lavender Spark</p>
                      <h2>{item.price}$</h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Добавляем пагинацию */}
      <div className={style.paginationBlock}>
        {data && (
          <div className={style.pagination}>
            {[...Array(Math.ceil(data.rows.length / productsPerPage))].map(
              (_, index) => (
                <button
                  className={style.pgButtons}
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Products;
