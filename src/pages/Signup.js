import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";
import { useNavigate } from "react-router-dom";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();
const navigate = useNavigate();
    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password }).then(() => {
            if (!isError) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }

    return (
        <Container>
            <Row>
                <Col md={12} className="signup__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSignup}>
                        <h1>Создать аккаунт</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control type="text" placeholder="Ваше имя" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder=" email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="пароль" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Создать
                            </Button>
                        </Form.Group>
                        <p style={{marginTop:"40px", color:"black"}} className="pt-3 text-center">
                            У вас есть аккаунт? <Link to="/login">Войти</Link>{" "}
                        </p>
                    </Form>
                </Col>
                 </Row>
        </Container>
    );
}

export default Signup;
