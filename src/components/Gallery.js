import axios from "../axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Gallery = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    
  useEffect(() => {
        axios.get("/products/").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    
const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 2},
    568: { items: 3},
    1024: { items: 5},
};
const items = products.map((product, idx) => (
            <div className="item" data-value={idx}>
                <ProductPreview {...product} />
            </div>
        ));

  return (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        infinite
    />
    );
}

export default Gallery;