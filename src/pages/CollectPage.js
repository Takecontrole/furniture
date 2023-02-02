import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import "./CategoryPage.css";
import Pagination from "../components/Pagination";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import BarLoader from "react-spinners/BarLoader";
function CollectPage() {
    const { collect } = useParams();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products/collect/${collect}`)
            .then(({ data }) => {
                setLoading(false);
                setProducts(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, [collect]);

    

    const productsSearch = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    function ProductSearch({ _id, category, price, name, collect, pictures }) {
        return <ProductPreview _id={_id} category={category} collect={collect} name={name} price={price} pictures={pictures} />;
    }

    return (
           <div >
    {
     loading ?
     <div className="loader">
      <BarLoader
       // color={color}
        
      />
      </div>
    :
      
      <div>
      <Fade>
      <Pulse duration={2000} delay={1000}>
        <div className="cat-page-container">
        <div className="header">
            <img src="../images/category/ignacio-r-cd8wgINZPYc-unsplash.jpg" className="images"/>
                <h1 className="text">{collect.charAt(0).toUpperCase() + collect.slice(1)}</h1>

            </div>
            </div>
        </Pulse>
        
            <div style={{marginTop:"30px"}} className="d-flex justify-content-center flex-wrap">
                <input type="search" placeholder="Поиск" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {productsSearch.length === 0 ? (
                <h1>Ничего не нашлось</h1>
            ) : (
               <div >
                        <div style={{display:"grid"}} >
                            <Pagination data={productsSearch}  RenderComponent={ProductSearch} pageLimit={1} dataLimit={5} tablePagination={false} /> 
                        </div>
                    </div>
            )}
            </Fade>
        </div>
    }
    </div>
    );
}

export default CollectPage;
