import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, category, name, price,  pictures }) {
    return (
        <LinkContainer to={`/product/${_id}`} style={{ cursor: "pointer", width: "13rem", margin: "10px", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <Card style={{ width: "20rem", margin: "10px", }}>
                <Card.Img variant="top" className="product-preview-img" src={pictures[0].url} style={{height: "70%",width:"70%", objectFit: "cover" }} />
                <Card.Body style={{ width:"11rem"}}>
                    <h6 style={{ fontSize:"12px"}} className="card-title">{name}</h6>
                    <Card.Title style={{ fontSize:"12px"}}>{price}</Card.Title>
                   
                </Card.Body>
            </Card>
        </LinkContainer>
    );
}

export default ProductPreview;
