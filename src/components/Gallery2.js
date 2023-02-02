import axios from "../axios";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import SimilarProduct from "../components/SimilarProduct";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useParams } from "react-router-dom";

const Gallery2 = () => {
  const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similar, setSimilar] = useState(null);
    
  useEffect(() => {
        axios.get("/products/63cb974a7387ee08956c2e6c").then(({ data }) => {
            setProduct(data.product);
            setSimilar(data.similar);
        });
    }, [id]);
    
const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 2},
    568: { items: 4 },
    1024: { items: 5},
};
    let similarProducts = [];
    if (similar) {
        similarProducts = similar.map((product, idx) => (
            <div className="item" data-value={idx}>
                <SimilarProduct {...product} />
            </div>
        ));
    }

  return (
    <AliceCarousel
        mouseTracking
        items={similarProducts}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        infinite
    />
    );
}

export default Gallery2;