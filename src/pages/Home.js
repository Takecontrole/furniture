import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
 import categories from "../categories";
 import categories2 from "../categories2";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Video from "../components/Video";
import Video2 from "../components/Video2";
import Icons from "../components/Icons";


function Home() {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
  return (
        <div>
            <Video />
            <Icons />
            <div className="featured-products-container ">
                <h2>Некоторые из наших товаров, которые мы рекомендуем на этой неделе</h2>
                 <div className=" d-flex justify-content-center flex-wrap">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                 <div>
                    <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                        Посмотреть все {">>"}
                    </Link>
                </div>
            </div>
            
            <div className="recent-products-container ">
               
                <Row>
                  {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: ` url(${category.img})`, gap: "10px" }} className=" category-tile">
                                    
                                </div>
                                   <div className="justify-content-center">
                                <h6 className="desc">{category.desc}</h6>
                                <h2>{category.name}</h2>
                                <button className="button">{category.button}</button>
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                        </Row>
            </div>
            <Video2 />
             <div className="recent-products-container ">
                <h2>Товары для активного отдыха</h2>  
                <h5>Создайте пространство с помощью стильных предметов премиум-качества и непревзойденной функциональности.</h5>
                <Row>
                  {categories2.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: ` url(${category.img})`, gap: "10px" }} className=" category-tile">
                                    
                                </div>
                                <div className="justify-content-center">
                                <h6 className="desc">{category.desc}</h6>
                                <h2>{category.name}</h2>
                                <button className="button">check</button>
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                        </Row>
            </div>
        </div>
    )
}
export default Home;