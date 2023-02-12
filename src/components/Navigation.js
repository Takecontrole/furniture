import axios from "../axios";
import React, { useRef, useState } from "react";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout, resetNotifications } from "../features/userSlice";
import "./Navigation.css";
import logo from "./videos/chrome_image_21 янв. 2023 г. 10_25_51 GMT+04_00.png"
function Navigation() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const bellRef = useRef(null);
    const notificationRef = useRef(null);
    const [bellPos, setBellPos] = useState({});

    function handleLogout() {
        dispatch(logout());
    }
    const unreadNotifications = user?.notifications?.reduce((acc, current) => {
        if (current.status == "unread") return acc + 1;
        return acc;
    }, 0);

    function handleToggleNotifications() {
        const position = bellRef.current.getBoundingClientRect();
        setBellPos(position);
        notificationRef.current.style.display = notificationRef.current.style.display === "block" ? "none" : "block";
        dispatch(resetNotifications());
        if (unreadNotifications > 0) axios.post(`/users/${user._id}/updateNotifications`);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                <div className="brand">
                 
                    <h1>NiceHause <img src={logo} width="50px" height="50px"/></h1>
                    
                    </div>
                </LinkContainer>
                <Navbar.Toggle style={{ color: "black",  fontSize:"12px", marginBottom:"10px"}}  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* if no user */}
                        {!user && (
                            <LinkContainer to="/login">
                                <Nav.Link>Войти</Nav.Link>
                            </LinkContainer>
                        )}
                        {user && !user.isAdmin && (
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>
                                    {user?.cart.count > 0 && (
                                        <span className="badge badge-warning" id="cartcount">
                                            {user.cart.count}
                                        </span>
                                    )}
                                </Nav.Link>
                            </LinkContainer>
                        )}

                        {/* if user */}
                        {user && (
                            <>
                                <Nav.Link style={{ position: "relative" }} onClick={handleToggleNotifications}>
                                    <i className="fas fa-bell" ref={bellRef} data-count={unreadNotifications || null}></i>
                                </Nav.Link>
                                <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                                    {user.isAdmin && (
                                        <>
                                            <LinkContainer to="/admin">
                                                <NavDropdown.Item>Контроль</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/new-product">
                                                <NavDropdown.Item>Создать товар</NavDropdown.Item>
                                            </LinkContainer>
                                        </>
                                    )}
                                    {!user.isAdmin && (
                                        <>
                                            <LinkContainer to="/cart">
                                                <NavDropdown.Item>Корзина</NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/orders">
                                                <NavDropdown.Item>Мои заказы</NavDropdown.Item>
                                            </LinkContainer>
                                        </>
                                    )}

                                    <NavDropdown.Divider />
                                    <Button variant="danger" onClick={handleLogout} className="logout-btn">
                                        Выйти
                                    </Button>
                                </NavDropdown>
                            </>
                        )}
                        
                         <NavDropdown title="Гостиная" id="basic-nav-dropdown">
                         
                       <LinkContainer to="/part/гостиная">
                          <NavDropdown.Item>Увидеть всё</NavDropdown.Item>
                         </LinkContainer>
                         
                       <LinkContainer to="/category/диваны для гостиной">
                          <NavDropdown.Item><p className="testnavbar">Диваны
                       <div className="image-box">
                        <img className="cat-img" src="../images/category/диваны для гостиной.png"/> 
                        </div>
                        </p>
                          </NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/столы для гостиной">
                          <NavDropdown.Item>Столики</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/кресла для гостиной">
                          <NavDropdown.Item>Кресла</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/пуфы">
                          <NavDropdown.Item >Пуфы</NavDropdown.Item>
                         </LinkContainer>
                         
                       </NavDropdown>
                         <NavDropdown title="Кухня" id="basic-nav-dropdown">
                         
                       <LinkContainer to="/part/кухня">
                          <NavDropdown.Item>Увидеть весь раздел</NavDropdown.Item>
                         </LinkContainer>
                         
                       <LinkContainer to="/category/кухонные столы">
                          <NavDropdown.Item>Кухонные столы</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/кухонные кресла">
                          <NavDropdown.Item>Кухонные кресла</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/барные стулья">
                          <NavDropdown.Item>Барные стулья</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/украшения">
                          <NavDropdown.Item >Украшения</NavDropdown.Item>
                         </LinkContainer>
                         
                       </NavDropdown>
                       
                     
                         <NavDropdown title="Декор" id="basic-nav-dropdown">
                         
                       <LinkContainer to="/part/декор">
                          <NavDropdown.Item>Увидеть весь раздел</NavDropdown.Item>
                         </LinkContainer>
                         
                       <LinkContainer to="/category/домашний декор">
                          <NavDropdown.Item>Домашний декор</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/подушки & покрывала">
                          <NavDropdown.Item>Подушки & покрывала</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/коврики">
                          <NavDropdown.Item>коврики</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/освещение">
                          <NavDropdown.Item >Освещение</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/зеркала">
                          <NavDropdown.Item >Зеркала</NavDropdown.Item>
                         </LinkContainer>
                         
                       </NavDropdown>
                       
                         <NavDropdown title="Столовая на свежем воздухе" id="basic-nav-dropdown">
                         
                       <LinkContainer to="/part/столовая на свежем воздухе">
                          <NavDropdown.Item>Увидеть весь раздел</NavDropdown.Item>
                         </LinkContainer>
                         
                       <LinkContainer to="/category/столы для дворика">
                          <NavDropdown.Item>Столы для дворика</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/кресла для дворика">
                          <NavDropdown.Item>Кресла для дворика</NavDropdown.Item>
                         </LinkContainer>
                         

                       </NavDropdown>
                       
                         <NavDropdown title="Мебель для отдыха" id="basic-nav-dropdown">
                         
                           <LinkContainer to="/part/мебель для отдыха">
                          <NavDropdown.Item>Увидеть весь раздел</NavDropdown.Item>
                          </LinkContainer>
                       <LinkContainer to="/category/сидения для отдыха">
                          <NavDropdown.Item>сидения для отдыха</NavDropdown.Item>
                         </LinkContainer>
                       </NavDropdown>

                    
                           <NavDropdown title="Аксессуары для дворика" id="basic-nav-dropdown">
                             <LinkContainer to="/part/аксессуары для дворика">
                          <NavDropdown.Item>Увидеть весь раздел</NavDropdown.Item>
                          </LinkContainer>
                         <LinkContainer to="/category/костровые ямы">
                          <NavDropdown.Item>Костровые ямы</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/лампы & фонари">
                          <NavDropdown.Item>Лампы & фонари</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/половики">
                          <NavDropdown.Item >Половики</NavDropdown.Item>
                         </LinkContainer>
                         
                         <LinkContainer to="/category/горшки">
                          <NavDropdown.Item >Горшки</NavDropdown.Item>
                         </LinkContainer>
                         
                       </NavDropdown>                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* notifications */}
            <div className="notifications-container" ref={notificationRef} style={{ position: "absolute", top: bellPos.top + 30, left: bellPos.left, display: "none" }}>
                {user?.notifications.length > 0 ? (
                    user?.notifications.map((notification) => (
                        <p className={`notification-${notification.status}`}>
                            {notification.message}
                            <br />
                            <span>{notification.time.split("T")[0] + " " + notification.time.split("T")[1]}</span>
                        </p>
                    ))
                ) : (
                    <p>Нет уведомлений</p>
                )}
            </div>
        </Navbar>
    );
}

export default Navigation;
