import React, { useState } from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Tabs.css"
 const Footer = () => { 

return (
  <div className="Foot">
   <ul>
        
        <li>
          <label style={{color:"white"}} for="btn-1" class="opencontent">Наш адрес и контакты <i class="fa fa-angle-down"></i></label>
        
          <input style={{display:"none"}}type="checkbox" id="btn-1"/>
          <ul>
            <li>
            <div class="center box">
          
          <div style={{color:"white"}}class="footer-content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">МОСКВА. Марксистская 5.</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+808002000100</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">abc@example.com</span>
            </div>
          </div>
        </div>
            </li>
           
          </ul>
        </li>
        
        
        <li>
          <label style={{color:"white"}} for="btn-2" class="opencontent">Присоединяйся к нам  <i class="fa fa-angle-down"></i></label>
          
          
          <input style={{display:"none"}} type="checkbox" id="btn-2"/>
          <ul style={{marginTop:"40px"}} >
            <li>
            <div class="right box">
          <div class="footer-content">
            <form action="#">
              <div class="email">
                <p style={{color:"white",margin: "30px"}}>Подпишись на уведомления и будь в курсе наших последних новостей и акций!</p>
                <input style={{width:"250px", border:"none",borderBottom:"2px solid white", backgroundColor:"black"}} placeholder="Введите Ваш Email"type="email" required/>
              </div>
             
              <div class="btn">
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
           <div style={{color:"white"}}class="social">
              <a ><span class="fab fa-facebook-f"></span></a>
              <a> <span class="fab fa-twitter"></span></a>
              <a> <span class="fab fa-instagram"></span></a>
              <a ><span class="fab fa-youtube"></span></a>
            </div>
        </div>
            </li>
           
            
          </ul>
        </li>
        <li><a href="/about">О нас</a></li>
        <li><a  href="#">Наш сервис</a></li>
      </ul>
  </div>
     ); 
 } 
  
 export default Footer;