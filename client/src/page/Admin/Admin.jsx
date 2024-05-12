import React from "react";
import style from "./Admin.module.css";
import { useState } from "react";
import { useCreateTypeMutation } from "../../redux/dataApi";
import { useCreateBrandMutation } from "../../redux/dataApi";
import axios from "axios";

const Admin = () => {
  const [createType, setCreateType] = useState("");
  const [createBrand, setCreateBrand] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [typeId, setTypeId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [img, setImg] = useState(null);
  const [createTypes] = useCreateTypeMutation();
  const [createBrands] = useCreateBrandMutation();
 

  const createT = async () => {
    console.log({
      createType,
    });
    if (createType) {
      await createTypes({
        createType,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          setCreateType("");
        })
        .catch((error) => {
          console.error("CreateType error:", error);
          // Handle error if needed
        });
    }
  };

  const createB = async () => {
    console.log({
      createBrand,
    });
    if (createBrand) {
      await createBrands({
        createBrand,
      })
        .unwrap()
        .then((data) => {
          // onSuccess handler - handle successful response data here
          setCreateBrand("");
        })
        .catch((error) => {
          console.error("CreateBrand error:", error);
          // Handle error if needed
        });
    }
  };

  const handleImageChange = (e) => {
    setImg(e.target.files);
  };

  // Handle the response from the API call
  const handleCreateDevice = async () => {
    let formData = new FormData();

    formData.append("img", img);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("typeId", typeId);
    formData.append("brandId", brandId);

    if (img) {
      for (let i = 0; i < img.length; i++) {
        formData.append("img", img[i]);
      }
    }

    try {
      const response = await axios({
        url: "http://localhost:3000/api/device",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: formData,
      });

      if (response && response.data) {
        console.log("Device created successfully:", response.data);
      } else {
        console.error("Error creating device: Response data is undefined");
      }
    } catch (error) {
      console.error("Error creating device:", error);
    }
  };

  return (
    <div className={style.admin}>
      <h1>Панель управления Администратора</h1>
      <div className={style.createType}>
        <h2>Создание нового типа товара</h2>
        <input
          onChange={(e) => setCreateType(e.target.value)}
          type="text"
          placeholder="Название типа"
        />
        <button onClick={createT}>Создать</button>
      </div>
      <div className={style.createBrand}>
        <h2>Создание нового бренда товара</h2>
        <input
          onChange={(e) => setCreateBrand(e.target.value)}
          type="text"
          placeholder="Название бренда"
        />
        <button onClick={createB}>Создать</button>
      </div>
      <div className={style.createDevice}>
        <h2>Создание нового товара</h2>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Название товара"
        />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание товара"
        />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена товара"
        />
        <input
          type="text"
          onChange={(e) => setTypeId(e.target.value)}
          placeholder="Тип товара"
        />
        <input
          type="text"
          onChange={(e) => setBrandId(e.target.value)}
          placeholder="Бренд товара"
        />
        <input type="file" onChange={handleImageChange} name="img" multiple />
        <button onClick={handleCreateDevice}>Создать</button>
      </div>
    </div>
  );
};

export default Admin;
