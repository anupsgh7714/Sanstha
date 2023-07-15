import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import { fetchProducts } from "../api/index";
import axios from 'axios';

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chart, setChart] = useState([]);

  const fetchData = async () => {
    await fetchProducts()
    .then((data) => {
      console.log("data", data);
      setChart([...chart, ...data]);
      console.log("chart" ,chart);
      // setProductData(data);
      // setCategories(prev => [...new Set(data.map((item) => item.category))])
      // setCategories(prev => [...new Set(data.map((item, srNo) => item.srNo))])
      const newData = data.map(item => item.srNo);
      setCategories(newData);
      console.log("categories" ,categories);
    })
    .catch((e) => {
      console.error(e);
    });
  };

  const fetchDataByCategorie = (e) =>{
    fetchProducts(e.target.value)
    .then((data) => {
      setProductData(data);
    })
    .catch((e) => {
      console.error(e);
    });
  }


  useEffect(async () => {
    const result = await axios.get(
      'http://127.0.0.1:8000/chart-data/',
    );
      console.log(result);
    setChart(result.data);
    console.log("chart in useEffect", chart);
    // fetchData();
  }, []);

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
      {/* <ul>
      {chart.map((post) =>
        <li key={post.name}>
          {post.email}
        </li>
      )}
    </ul> */}
          {/* search option  */}
        <div className={styles.search_section}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
          <select className={styles.search_input} onChange={e => fetchDataByCategorie(e)}>
            <option value="all">Category</option>
            {categories.map((value,index) => (
              <option key={index} value={value}>{value}</option>
            ))}
          </select>
        </div>
        {/* <Table products={productData} /> */}
        <Table products={chart} />
      </div>
    </main>
  );
};

export default Main;
