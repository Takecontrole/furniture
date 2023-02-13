import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Icons from "../components/Icons";

function Animation () {
  
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky());
  return (
    
    <div>
                 <ScrollContainer>
        <ScrollPage >
        <Animator animation={batch(Fade())}>
              <div className="cat-page-container">
        <div className="header">
       
            <img src="../images/spacejoy-XpbtQfr9Skg-unsplash.jpg" className="images"/>
                <h1 className="text">С 1997 года.</h1>
          </div>
            </div>
            </Animator >
          </ScrollPage >
     
        <ScrollPage >
           <Animator animation={ZoomInScrollOut}>
                 <h2>Премиум мебель</h2>  
                 
            
          </Animator >
          </ScrollPage >  
          
        <ScrollPage   >
           <Animator animation={FadeUp}>
          
            
      <h2 >
        <Animator animation={Move()}>Мы помогаем создать теплое и комфортное пространство</Animator>
        <Animator animation={Move()}>для Вас, Вашей семьи и друзей!</Animator>
        
        <Animator animation={ Move()}>В нашем производстве мебель</Animator>
        
        
        <Animator animation={MoveOut(1000, 0)}>для гостинной</Animator>
        <Animator animation={MoveOut(-1000, 0)}>для кухни</Animator>
        
        <Animator animation={MoveOut(1000, 0)}>для активного отдыха</Animator>
        <Animator animation={MoveOut(-1000, 0)}>для дворика и огорода</Animator>
        <Animator animation={MoveOut(1000, 0)}>И многое другое</Animator>
      </h2>
    
          </Animator >
          </ScrollPage >  
            

  
    <ScrollPage >
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "20px" }}>
        На протяжении более 20 лет бренд NiceHouse символизирует качество, ценность и целостность. Каждый день мы стремимся превзойти ожидания наших клиентов за счет непревзойденного обслуживания, продуманного дизайна продукта и превосходной производительности. Наш успех основан на вашем удовлетворении.
      </span>
    </Animator>
  </ScrollPage>
  </ScrollContainer>
    </div>
    )
}

export default Animation;