import axios from "../axios";
import React, {useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

 import categories from "../data/categories";
 import categories2 from "../data/categories2";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import Video from "../components/Video";
import Video2 from "../components/Video2";
import Icons from "../components/Icons";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import  Footer from "../components/Tabs";

import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';
import BarLoader from "react-spinners/BarLoader";
import Modal from '../components/Modal';
function Home() {
const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
      setLoading(true);
        axios.get("/products").then(({ data }) => { dispatch(updateProducts(data));
        setLoading(false);
        });
    }, []);
    
  
  return (
     <div >
    {
     loading ?
     <div className="loader">
      <BarLoader

        
      />
      </div>
    :
        <div >
        
        <div>
        <Fade >
        <Pulse duration={2000} >
            <Video />
        </Pulse>
        
          </Fade>
      </div>
            <div>
        <Slide bottom >
            <Icons />
        </Slide>
      </div>
   <Fade >    
        
            
     

        
                                                    { openModal ?     
        <div open={openModal} onClose={() => setOpenModal(false)} className="modalContainer" >
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
        </div>   
                        :     
                            <div  className="stickymassage">
  <button onClick={() => setOpenModal(true)}  style={{ border:"none", color:"white", backgroundColor:"black"}}>????????????</button>
        </div>  }

    <div style={{color:"black"}} className="stickychat"> 
              <LinkContainer to="/consultation">
    <div>
    <span style={{fontSize:"50px",
    width: "50px",
    height: "50px", justifyContent:"center"}} className="material-symbols-outlined">
Mail
</span> 
</div>
    </LinkContainer>
    </div>

            <div  className="gallerycontainer">
            <h4 >?????????????????? ???????????? ?????????????? ???? ?????????????????????? ???? ???????? ????????????.</h4>
            </div>
            
      <div>
        <Slide right>
            <Gallery />

        </Slide>
      </div>
          </Fade>
       <Zoom duration={3000}>
            <div className="intro">
               <h1>???????????????????? ????????????????.</h1>
                  <h3>???????????????????????? ?? ?????????? ???????????????? ???????????????????? ???????????? ?????? ???????? ?? ?????????????????????????? ?????????????? ????????????.</h3>  
          </div>
          </Zoom>
             
  <div className="category-container ">
                <Row>
                
                  {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
  <Fade>
                                <div style={{ backgroundImage: ` url(${category.img})`, gap: "10px" }} className=" category-tile">
                                    
                                </div>
                                <div className="justify-content-center">
                                <h6 className="desc">{category.desc}</h6>
                                <h2>{category.part}</h2>
                                <button className="button">{category.name}</button>
                                </div>
                        </Fade>
                            </Col>
                        </LinkContainer>
                    ))}
                    
                        </Row>
            </div>
            <Fade>
                  <div>
        <Slide right>
          
            <Gallery2/>
        </Slide>
      </div>
                    <Pulse duration={2000} delay={1000}>
            <Video2 />
        </Pulse>
               </Fade> 
               <Flip left cascade>
               <div>
                <h2>???????????? ?????? ?????????????????? ????????????</h2>  
                <h3>???????????????? ???????????????????????? ?? ?????????????? ???????????????? ?????????????????? ??????????????-???????????????? ?? ?????????????????????????????? ????????????????????????????????.</h3>
                </div>
                </Flip>
             <div className="category-container">
                
                  <Row>
                  {categories2.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                <Fade>
                                <div style={{ backgroundImage: ` url(${category.img})`, gap: "10px" }} className=" category-tile">
                                    
                                </div>
                                <div className="justify-content-center">
                                <h6 className="desc">{category.desc}</h6>
                                <h2>{category.part}</h2>
                                <button className="button">{category.name}</button>
                                </div>
           </Fade> 
                            </Col>
                        </LinkContainer>
                    ))}
                        </Row>
                   
                        </div>
                        
                 <Fade>
              <div style={{width:"100%"}}>
                 <Slide right>
                   <h1 >???????? ????????????????</h1>
                   <Partners/>
                   </Slide>
                </div>
                <div>
                    <Slide left>
                   <h1>????????????</h1>
                   <Testimonials/>
                </Slide>
                </div>
                <div className="style-programm" >
                <h2 style={{marginTop:"30px",}} >???????? ???????????????????????? ???? ???????????? ????????????.</h2>
                <h2 style={{marginTop:"40px"}}>1.???????????????????????? ??????????</h2>
                <h5>?????????????????? ???????????? ???????????? ???? ???????????? ???????????? ?????????? ?? ????????????????????????. ?? ?????????? ???????????????????????????? ?????????????????? ???????? ??????: ???? ?????????????????? ??????????????, ???????????? ???? ????????????.</h5>
                
                <img style={{width:"100%"}}src="https://cdn.shopify.com/s/files/1/0056/6422/files/style-fabric_720x.gif?v=1613518964"/>
                <h2 style={{marginTop:"40px"}}>2. ???????????????? ??????????.</h2>
                <h5>?????????? 50 ?????????????????????? ?? ???????????????????????? ????????????, ?????????????? ?????????????? ?????? ?????????????????? ???????????????????????????? ??????????. ???? ???????????????????? ???????????? ?????????? ?????????????? ???????????????????????????? ??????????, ?????? ?????????????????? ?????? ???????????? ???????????????????????? ?????????? ??????????????.</h5>
                
                <img style={{width:"100%"}}src="https://cdn.shopify.com/s/files/1/0056/6422/files/select-your-finish-2_720x.gif?v=1613518986"/>
                <h2 style={{marginTop:"40px"}}>3.???????????????? ?????????????? </h2>
                <h5>?????????????????? ??????????. ???????????????? ???????????????? ??????????????, ?????????? ?????????????????? ???????? ??????????. ?????? ???????? ?????????????? ?????????????? ???????????????????? ?????????????? ?? ???????????????????? ???? ???????????????? ?????????????? ???? ???????????????? ??????????????, ???????? ???????? ??????????????????????.</h5>
                
                <h2 style={{marginTop:"60px"}}>?????????? ?????????????????????????????? ???????? ???????????????</h2>
                <h5> ?????????????????? ?? ?????? ?? ???????? ???? ?????????? ???????????????????????????? ???????????? ?? ???????????????????? ???????? ?????????????????????????? ?????????? ???? ??????????. ???? ?????????? ?? ??????????????????? ???? ?????? ?????? ??????????, ?????????? ????????????! ?????? ?????????????? ???????????????? ???????????????? ?????? ?????????????????? - ?????? - ?????? ?????????? ???????????????????? ???????????? ???? ???????????????????????? ???????????????????????? ???????????????? ?????????????????????? ???????????????????????? ???? ?????????????? ????????:</h5>
                <LinkContainer to="/consultation">
               <div>
                <img src="https://static.thenounproject.com/png/2019373-200.png"/>
               
                <button className="consultation-button"  >
              ????????????????
              </button>
              </div>
              </LinkContainer>
                
                </div>
                
               <div>
            <Footer/>
                </div>
                </Fade>
            </div>
    }
    </div>
       
    )
}
export default Home;