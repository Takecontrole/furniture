import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    const navigate = useNavigate();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password }).then(() => {
            if (isError) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }
    return (
      <div style={{width:"100%"}}>
        <Container >
            <Row>
                <Col md={12} className="login__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleLogin}>
                        <h1>Авторизация</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Email адресс</Form.Label>
                            <Form.Control type="email" placeholder="введите email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="введите пароль" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                         
                            <Button type="submit" disabled={isLoading}>
                                Войти                            </Button>

                        </Form.Group>
                        <p style={{marginTop:"40px", color:"black"}} className="pt-3 text-center">
                            У Вас нет аккаунта? <Link to="/signup">Создать аккаунт</Link>{" "}
                        </p>
                    </Form>
                </Col>
               
            </Row>
        </Container>
        </div>
    );
}

export default Login;
