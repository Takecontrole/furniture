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
    const [collect, setCollect] = useState("");
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
        if (!name || !description || !price || !part || !category || !images.length) {
            return alert("нужно обязательно заполнить все поля кроме коллекции");
        }
        createProduct({ name, description, price, part, category, collect, images }).then(({ data }) => {
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
                        <h1 className="mt-4">Создавайте</h1>
                        {isSuccess && <Alert variant="success">Успешно</Alert>}
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Название товара</Form.Label>
                            <Form.Control type="text" placeholder="введите название" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control as="textarea" placeholder="Описание" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Цена</Form.Label>
                            <Form.Control type="number" placeholder="Цена" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>
                        
                                                  <Form.Group className="mb-3" onChange={(e) => setPart(e.target.value)}>
   <Form.Label>Часть</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- внутренний интерьер --
                                </option>
                                <option value="гостиная">гостиная</option>
                                <option value="кухня">кухня</option>
                                <option value="декор">декор</option>
                                <option value="аксессуары">аксессуары</option>
                                
                             <option disabled selected>
                                    -- наружной интерьер --
                                </option>
                                <option value="мебель для отдыха">мебель для отдыха</option>
                                <option value="столовая на свежем воздухе">столовая на свежем воздухе</option>
                                <option value="аксессуары для дворика">аксессуары для дворика</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(e) => setCategory(e.target.value)}>
    <Form.Label>Категория</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- гостиная --
                                </option>
                                <option value="диваны для гостиной">диваны для гостиной</option>
                                <option value="столы для гостиной">столы для гостиной</option>
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
                                <option value="освещение">освещение</option>                             
                                <option value="зеркала">зеркала</option>   
                                                         <option disabled selected>
                                -- наружний интерьер --
                                </option>
                                                         <option disabled selected>
                                -- столовая на свежем воздухе --
                                </option>
                                
                                <option value="столы для дворика">столы для дворика</option>
                                <option value="кресла для дворика">кресла для дворика</option>
                                                                     <option disabled selected>
                                -- мебель для отдыха --
                                </option>                    
                                <option value="сидения для отдыха">сидения для отдыха</option>
                                
                                               <option disabled selected>
                                -- аксессуары для дворика --
                                </option>
                                <option value="костровые ямы">костровые ямы</option>
                                <option value="лампы & фонари">лампы & фонари</option>
                                <option value="половики">половики</option>
                                <option value="горшки">горшки</option>
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
                                <option value="столовая на свежем воздухе">столовая на свежем воздухе</option>

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
                               Создать
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
