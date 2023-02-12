             <ScrollContainer>
        <ScrollPage >
        <Animator animation={batch(Fade())}>
            <Icons />
            </Animator >
          </ScrollPage >
     
        <ScrollPage >
           <Animator animation={ZoomInScrollOut}>
                 <h2 >Мебель для дома</h2>  
            
          </Animator >
          </ScrollPage >  
          
        <ScrollPage   >
           <Animator animation={FadeUp}>
           <h5 >Создайте теплое и комфортное пространство для своей семьи и друзей. Выбирайте современные диваны, кровати, офисную, столовую мебель и многое другое.</h5>
          </Animator >
          </ScrollPage >  
            
            <ScrollPage >
    <div  >
      <h6>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </h6>
    </div>
  </ScrollPage>
  
    <ScrollPage >
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "12px" }}>
        Вот некоторые товары, которые мы рекомендуем на этой неделе.
      </span>
    </Animator>
  </ScrollPage>
  
  



footer{
  background: black;
  overflow: hidden;
  width:100%;
  display: flex;
  justify-content: center;


  
}
footer:after{
  content: '';
  clear: both;
  display: table;
}
footer .logo{
  display: none;
}
footer ul{
  left: 0px;
  right: 0px;
  width: 100%;
  
  position: relative;
}
footer ul li{
  float: left;
  display: inline-block;
  background: black;
  margin: 0 5px;
  
}
footer ul li a{
  color: white;
  line-height: 70px;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 15px;
}
footer ul li a:hover{
  color: #f12020;
  border-radius: 5px;
  box-shadow:  0 0 5px #f12020,
               0 0 10px #f12020;
}
footer ul ul li a:hover{
  box-shadow: none;
}
footer ul ul{
  position: absolute;
  top: 90px;
  border-top: 3px solid #f12020;
  opacity: 0;
  visibility: hidden;
  transition: top .3s;
  
}
footer ul ul ul{
  border-top: none;
}
footer ul li:hover > ul{
  top: 70px;
  opacity: 1;
  visibility: visible;
}
footer ul ul li{
  position: relative;
  margin: 0px;
  width: 100%;
  float: none;
  display: list-item;
  
  border: 0px;
}
footer ul ul li a{
  line-height: 50px;
}
footer ul ul ul li{
  position: relative;
  top: -60px;
  left: 150px;
}
.show,.icon{
  display: none;
}
.fa-plus{
  font-size: 15px;
  margin-left: 40px;
}


 
@media all and (max-width: 480px) {
footer ul{
   width:"100%";
    
    display: flex;
    flex-direction: column;
  }
  
footer .logo{
    
    width: 100%;
  }
  .show + a, ul{
    display: none;
  }
footer ul li,footer ul ul li{
  
    width: 85%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  footer ul ul li{
    width: 90%;
  }
  .show{
    display: block;
    color: white;
    font-size: 18px;
    
    line-height: 70px;
    cursor: pointer;
  }
  
  .icon{
    display: block;
    color: white;
    position: absolute;
    top: 0;
    
    line-height: 70px;
    cursor: pointer;
    font-size: 25px;
  }
footer ul ul{
    top: 70px;
    border-top: 0px;
    float: none;
    
    display: none;
    opacity: 1;
    visibility: visible;
  }
  
  .second-ul {
    margin-top: 70px;
  }
  
footer ul ul ul li{
    
  }
  [id^=btn]:checked + ul{
    display: block;
  }
footer ul ul li{
    border-bottom: 1px solid gray;
    border-top: none;
  }
  
}


.center .footer-content .fas{

  font-size: 1.4375rem;

  background: #1a1a1a;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .footer-content .fas:hover{
  background: #f12020;
}
.center .footer-content .text{
  font-size: 1.0625rem;
  font-weight: 200;
  padding-left: 10px;
  
}
.center .footer-content .phone{
  margin: 15px 0;
}

.right form .text{

  font-size: 1.0625rem;

  margin-bottom: 2px;
  color: white;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #3498db;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}
.right form .btn button{
  height: 40px;
  width: 150px;
  border: none;
  outline: none;
  background: #f12020;
  font-size: 1.0625rem;
  font-weight: 200;
  cursor: pointer;
  transition: .3s;
  border-radius: 10px;
}
.right form .btn button:hover{
  background: #000;
  color:white;
  border: 1px solid white;
}
  
  



footer{
  background: black;
  overflow: hidden;
  width:100%;
  display: flex;
  justify-content: center;


  
}
footer:after{
  content: '';
  clear: both;
  display: table;
}
footer .logo{
  display: none;
}
footer ul{
  left: 0px;
  right: 0px;
  width: 100%;
  
  position: relative;
}
footer ul li{
  float: left;
  display: inline-block;
  background: black;
  margin: 0 5px;
  
}
footer ul li a{
  color: white;
  line-height: 70px;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 15px;
}
footer ul li a:hover{
  color: #f12020;
  border-radius: 5px;
  box-shadow:  0 0 5px #f12020,
               0 0 10px #f12020;
}
footer ul ul li a:hover{
  box-shadow: none;
}
footer ul ul{
  position: absolute;
  top: 90px;
  border-top: 3px solid #f12020;
  opacity: 0;
  visibility: hidden;
  transition: top .3s;
  
}
footer ul ul ul{
  border-top: none;
}
footer ul li:hover > ul{
  top: 70px;
  opacity: 1;
  visibility: visible;
}
footer ul ul li{
  position: relative;
  margin: 0px;
  width: 100%;
  float: none;
  display: list-item;
  
  border: 0px;
}
footer ul ul li a{
  line-height: 50px;
}
footer ul ul ul li{
  position: relative;
  top: -60px;
  left: 150px;
}
.show,.icon{
  display: none;
}
.fa-plus{
  font-size: 15px;
  margin-left: 40px;
}


 
@media all and (max-width: 480px) {
footer ul{
   width:"100%";
    
    display: flex;
    flex-direction: column;
  }
  
footer .logo{
    
    width: 100%;
  }
  .show + a, ul{
    display: none;
  }
footer ul li,footer ul ul li{
  
    width: 85%;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  footer ul ul li{
    width: 90%;
  }
  .show{
    display: block;
    color: white;
    font-size: 18px;
    
    line-height: 70px;
    cursor: pointer;
  }
  
  .icon{
    display: block;
    color: white;
    position: absolute;
    top: 0;
    
    line-height: 70px;
    cursor: pointer;
    font-size: 25px;
  }
footer ul ul{
    top: 70px;
    border-top: 0px;
    float: none;
    
    display: none;
    opacity: 1;
    visibility: visible;
  }
  
  .second-ul {
    margin-top: 70px;
  }
  
footer ul ul ul li{
    
  }
  [id^=btn]:checked + ul{
    display: block;
  }
footer ul ul li{
    border-bottom: 1px solid gray;
    border-top: none;
  }
  
}


.center .footer-content .fas{

  font-size: 1.4375rem;

  background: #1a1a1a;
  height: 45px;
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
}
.center .footer-content .fas:hover{
  background: #f12020;
}
.center .footer-content .text{
  font-size: 1.0625rem;
  font-weight: 200;
  padding-left: 10px;
  
}
.center .footer-content .phone{
  margin: 15px 0;
}

.right form .text{

  font-size: 1.0625rem;

  margin-bottom: 2px;
  color: white;
}
.right form .msg{
  margin-top: 10px;
}
.right form input, .right form textarea{
  width: 100%;
  font-size: 1.0625rem;
  background: #151515;
  padding-left: 10px;
  border: 1px solid #222222;
}
.right form input:focus,
.right form textarea:focus{
  outline-color: #3498db;
}
.right form input{
  height: 35px;
}
.right form .btn{
  margin-top: 10px;
}
.right form .btn button{
  height: 40px;
  width: 150px;
  border: none;
  outline: none;
  background: #f12020;
  font-size: 1.0625rem;
  font-weight: 200;
  cursor: pointer;
  transition: .3s;
  border-radius: 10px;
}
.right form .btn button:hover{
  background: #000;
  color:white;
  border: 1px solid white;
}

import React from 'react'

import "./Footer.css"

const Footer = () => {
  
  
  return (
  
      
     <footer style={{height: "400px", }}> 
       

      

        
      
      
      <ul>
        
        <li>
          <label for="btn-1" class="show">Наш адрес и контакты <i class="fa fa-angle-down"></i></label>
          <a style={{color:"white"}}>Наш адрес и контакты <i class="fa fa-angle-down" ></i></a>
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
          <label for="btn-2" class="show">Присоединяйся к нам  <i class="fa fa-angle-down"></i></label>
          <a style={{color:"white"}}>Присоединяйся к нам  <i class="fa fa-angle-down"></i></a>
          
          <input style={{display:"none"}} type="checkbox" id="btn-2"/>
          <ul className="second-ul">
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
        <li><a href="#">Наш сервис</a></li>
      </ul>
    </footer>
    
      
  
       
  )
}

export default Footer;