import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductFood/ProductCard";
import products from "../../assets/fake-data/Products";
import ReactPaginate from "react-paginate";
import styles from "./style.module.css";
const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((product) => {
    if (searchTerm.value === "") return product;
    if (product.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return product;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles.allFoods}>
      <Row>
        <Col lg="6" md="6" sm="6" xs="12" className={styles.category}>
          <div className="search__widget d-flex align-items-center justify-content-between ">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              value={searchTerm}
              placeholder="I'm looking for...."
            />
          </div>
        </Col>
        <Col lg="6" md="6" sm="6" xs="12" className={styles.category}>
          <div className="text-end">
            <select className="w-50">
              <option>Default</option>
              <option value="ascending">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high-price">High Price</option>
              <option value="low-price">Low Price</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row className={styles.card}>
        {displayPage.map((product, index) => (
          <Col key={index} xs={6} md={6} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
        <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel=" previous"
            nextLabel="next"
            containerClassName={styles.paginationBtn}
          />
        </div>
      </Row>
    </div>
  );
};

export default Food;
