import React, { useState } from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Footer.css"
 const Footer = () => { 

return (
  <Tabs style={{marginTop:"50px",backgroundImage: "linear-gradient(135deg, #536976 40%, #292E49)"}}>
    <TabList style={{color:"white",backgroundImage: "linear-gradient(135deg, #536976 40%, #292E49)"}}>
      <Tab>Адрес и контакты</Tab>
      <Tab >Присоединяйся к нам</Tab>
      <Tab >О нас</Tab>
      <Tab >Наш сервис</Tab>
    </TabList>

    <TabPanel style={{backgroundImage: "linear-gradient(135deg, #536976 40%, #292E49)"}}>
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
    </TabPanel>
    <TabPanel style={{}}>
       <div class="right box">
          <div class="footer-content">
            <form action="#">
              <div class="email">
                <p style={{color:"white",margin: "30px"}}>Подпишись на уведомления и будь в курсе наших последних новостей и акций!</p>
                <input style={{width:"250px", border:"none",borderBottom:"2px solid white", backgroundColor:"transparent", outline:"none"}} placeholder="Введите Ваш Email"type="email" required/>
              </div>
             
              <div class="btn">
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
           <div style={{}}class="social">
              <a ><span class="fab fa-facebook-f"></span></a>
              <a> <span class="fab fa-twitter"></span></a>
              <a> <span class="fab fa-instagram"></span></a>
              <a ><span class="fab fa-youtube"></span></a>
            </div>
        </div>
    </TabPanel>
    <TabPanel>
    <h1>Нашу историю вы можете прочесть здесь</h1>
    </TabPanel>
    <TabPanel>
    <h1>Нашу историю вы можете прочесть здесь</h1>
    </TabPanel>
  </Tabs>
  
     ); 
 } 
  
 export default Footer;