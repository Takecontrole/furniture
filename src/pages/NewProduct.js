import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/appApi";
import axios from "../axios";
import "./NewProduct.css";

function NewProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [part, setPart] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();

    function handleRemoveImg(imgObj) {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !description || !price || !category || !part || !images.length) {
            return alert("Please fill out all the fields");
        }
        createProduct({ name, description, price, part, category, images }).then(({ data }) => {
            if (data.length > 0) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }

    function showWidget() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "das4snqwu",
                uploadPreset: "uploads",
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="new-product__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1 className="mt-4">Create a product</h1>
                        {isSuccess && <Alert variant="success">Product created with succcess</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control as="textarea" placeholder="Product description" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price($)</Form.Label>
                            <Form.Control type="number" placeholder="Price ($)" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                        
                                                  <Form.Group className="mb-3" onChange={(e) => setPart(e.target.value)}>
   <Form.Label>Part</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- внутренняя мебель --
                                </option>
                                <option value="гостинная">гостинная</option>
                                <option value="кухня">кухня</option>
                                <option value="декор">декор</option>
                                <option value="аксессуары">аксессуары</option>
                                
                             <option disabled selected>
                                    -- наружнаяя мебель --
                                </option>
                                <option value="мебель для отдыха">мебель для отдыха</option>
                                <option value="столовая мебель">столовая мебель</option>
                                <option value="аксессуары">аксессуары</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(e) => setCategory(e.target.value)}>
    <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- гостинная --
                                </option>
                                <option value="диваны">диваны</option>
                                <option value="столы">столы</option>
                                <option value="кресла">кресла</option>
                                <option value="пуфы">пуфы</option>
                                
                                   <option disabled selected>
                                    -- кухня --
                                </option>
                               
                                <option value="кухонные кресла">кухонные кресла</option>
                                <option value="кухонные столы">кухонные столы</option>
                                <option value="барные стулья">барные стулья</option>               
                                <option value="украшения">украшения</option>                             
                                   <option disabled selected>
                                    -- декор --
                                </option>
                               
                                <option value="домашний декор">домашний декор</option>
                                <option value="подушки & покрывала">подушки & покрывала</option>
                                <option value="коврики">коврики</option>               
                                <option value="освещения">освещения</option>                             
                                <option value="зеркала">зеркала</option>                             
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
    <Form.Label>Коллекция</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- выбрать --
                                </option>
                                <option value="ручная работа">ручная работа</option>
                                <option value="расскошная гостинная">расскошная гостинная</option>
                                <option value="роскошная кухня">роскошная кухня</option>
                                <option value="активный отдых">активный отдых</option>
                                <option value="еда на свежем воздухе">еда на свежем воздухе</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button type="button" onClick={showWidget}>
                                Upload Images
                            </Button>
                            <div className="images-preview-container">
                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} />
                                        {imgToRemove != image.public_id && <i className="fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading || isSuccess}>
                                Create Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="new-product__image--container"></Col>
            </Row>
        </Container>
    );
}

export default NewProduct;
