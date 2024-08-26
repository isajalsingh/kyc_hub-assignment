import React, { useEffect, useState } from "react";
import { Table } from "antd";
// import 'antd/dist/reset.css';
import "../App.css"; // Import the CSS file for styling

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text) => <img src={text} alt="product" width="50" />,
    },
  ];

  return (
    <div className="product-page" style={{ paddingTop: "60px" }}>
      {/* <h1>Product List</h1> */}
      <div className="product-table">
        <Table
          columns={columns}
          dataSource={products}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default ProductPage;
