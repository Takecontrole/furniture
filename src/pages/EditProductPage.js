import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../services/appApi";
import axios from "../axios";
import "./NewProduct.css";

function EditProductPage() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [part, setPart] = useState("");
    const [collect, setCollect] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [updateProduct, { isError, error, isLoading, isSuccess }] = useUpdateProductMutation();

    useEffect(() => {
        axios
            .get("/products/" + id)
            .then(({ data }) => {
                const product = data.product;
                setName(product.name);
                setDescription(product.description);
                setCategory(product.category);
                setImages(product.pictures);
                setPrice(product.price);
                setPart(product.part);
                setCollect(product.collect);
            })
            .catch((e) => console.log(e));
    }, [id]);

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
        if (!name || !description || !price || !part || !category || !images.length) {
            return alert("Please fill out all the fields");
        }
        updateProduct({ id, name, description, price, part, category, collect, images }).then(({ data }) => {
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
                cloudName: "your-cloudname",
                uploadPreset: "your-preset",
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
                        <h1 className="mt-4">Редактируйте</h1>
                        {isSuccess && <Alert variant="success">Успешно</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Имя товара</Form.Label>
                            <Form.Control type="text" placeholder="введите имя" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control as="textarea" placeholder="описание" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Цена</Form.Label>
                            <Form.Control type="number" placeholder="цена" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                        
                                                  <Form.Group className="mb-3" onChange={(e) => setPart(e.target.value)}>
   <Form.Label>Часть</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- внутренняя мебель --
                                </option>
                                <option value="гостиная">гостиная</option>
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
    <Form.Label>Категория</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- гостиная --
                                </option>
                                <option value="диваны для гостиной">диваны</option>
                                <option value="столы для гостиной">столы</option>
                                <option value="кресла для гостиной">кресла</option>
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
                        <Form.Group className="mb-3" onChange={(e) => setCollect(e.target.value)}>
    <Form.Label>Коллекция</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- выбрать --
                                </option>
                                <option value="ручная работа">ручная работа</option>
                                <option value="расскошная гостиная">расскошная гостиная</option>
                                <option value="роскошная кухня">роскошная кухня</option>
                                <option value="активный отдых">активный отдых</option>
                                <option value="еда на свежем воздухе">еда на свежем воздухе</option>

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button type="button" onClick={showWidget}>
                                Загрузить изображения
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
                                Обновить
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="new-product__image--container"></Col>
            </Row>
        </Container>
    );
}

export default EditProductPage;
