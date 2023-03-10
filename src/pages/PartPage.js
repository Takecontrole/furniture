import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductPreview from "../components/ProductPreview";
import "./PartPage.css";
import Pagination from "../components/Pagination";
import kitchen from "../data/kitchen";
import lounge from "../data/lounge";
import decor from "../data/decor";
import dinning from "../data/dinning";
import leisure from "../data/leisure";
import accessories from "../data/accessories";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import BarLoader from "react-spinners/BarLoader";
function PartPage() {
    const { part } = useParams();
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products/part/${part}`)
            .then(({ data }) => {
                setLoading(false);
                setProducts(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e.message);
            });
    }, [part]);

    

    const productsSearch = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    function ProductSearch({ _id, part, category, collect, name, pictures }) {
        return <ProductPreview _id={_id} part={part} category={category} collect={collect} name={name} pictures={pictures} />;
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
      <Pulse duration={2000} delay={1000}>
        <div className="category-page-container">
            <div className="headder">
            <img src={`./images/part/${part}.png`} className="image"/>
                <h1 className="text-center">{part.charAt(0).toUpperCase() + part.slice(1)}</h1>
            </div>
            </div>
        </Pulse>
            
                                                { part === "????????????????" && (
                                        <>
             <div className="options">
             {lounge.map((lounge) => (
                        <LinkContainer to={`/category/${lounge.name.toLocaleLowerCase()}`}>
             <Slide bottom>
             <div className="category">
             <img src={lounge.img} className="category-image"/>
             <h5 className="text-center">{lounge.name}</h5>
             </div>
                        </Slide>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                                { part === "??????????" && (
                                        <>
             <div className="options">
             {kitchen.map((kitchen) => (
                        <LinkContainer to={`/category/${kitchen.name.toLocaleLowerCase()}`}>
             <div className="category">
             <img src={kitchen.img} className="category-image"/>
             <h5 className="text-center">{kitchen.name}</h5>
             </div>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                                { part === "??????????" && (
                                        <>
             <div className="options">
             {decor.map((decor) => (
                        <LinkContainer to={`/category/${decor.name.toLocaleLowerCase()}`}>
             <div className="category">
             <img src={decor.img} className="category-image"/>
             <h5 className="text-center">{decor.name}</h5>
             </div>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                                { part === "???????????????? ???? ???????????? ??????????????" && (
                                        <>
             <div className="options">
             {dinning.map((dinning) => (
                        <LinkContainer to={`/category/${dinning.name.toLocaleLowerCase()}`}>
             <div className="category">
             <img src={dinning.img} className="category-image"/>
             <h5 className="text-center">{dinning.name}</h5>
             </div>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                                { part === "???????????? ?????? ????????????" && (
                                        <>
             <div className="options">
             {leisure.map((leisure) => (
                        <LinkContainer to={`/category/${leisure.name.toLocaleLowerCase()}`}>
             <div className="category">
             <img   src={leisure.img} className="category-image"/>
             <h5 className="text-center">{leisure.name}</h5>
             </div>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                                { part === "???????????????????? ?????? ??????????????" && (
                                        <>
             <div className="options">
             {accessories.map((accessories) => (
                        <LinkContainer to={`/category/${accessories.name.toLocaleLowerCase()}`}>
             <div className="category">
             <img src={accessories.img} className="category-image"/>
             <h5 className="text-center">{accessories.name}</h5>
             </div>
             </LinkContainer>
                        ))}
            </div>
                                                    </>
                                    )}
                                    <Fade>
            <div style={{marginTop:"30px"}} className="filters-container d-flex justify-content-center pt-4 pb-4">
                <input type="search" placeholder="??????????" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {productsSearch.length === 0 ? (
                <h1>???????????? ???? ??????????????</h1>
            ) : (
                
                    <div >
                        <div style={{display:"grid"}} >
                            <Pagination data={productsSearch}  RenderComponent={ProductSearch} pageLimit={1} dataLimit={6} tablePagination={false} /> 
                        </div>
                    </div>
                
            )}
          </Fade>
        </div>
    }
    </div>
    );
}

export default PartPage;
