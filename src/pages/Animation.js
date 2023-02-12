import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Icons from "../components/Icons";

function Animation () {
  
  const ZoomInScrollOut = batch(Sticky(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky());
  return (
    
    <div>
                 <ScrollContainer>
        <ScrollPage >
        <Animator animation={batch(Fade())}>
            <Icons />
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
        <Animator animation={Move()}>Создайте теплое и комфортное пространство</Animator>
        <Animator animation={Move()}>для своей семьи и друзей</Animator>
        
        <Animator style={{color:"transparent"}} animation={ MoveOut(-1000, 0)}>" "</Animator>
        
        <Animator style={{color:"transparent"}} animation={ MoveOut(-1000, 0)}>"  "</Animator>
        <Animator animation={MoveOut(1000, 0)}>Для гостинной</Animator>
        <Animator animation={MoveOut(-1000, 0)}>Для кухни</Animator>
        
        <Animator animation={MoveOut(1000, 0)}>Для активного отдыха</Animator>
        <Animator animation={MoveOut(-1000, 0)}>Для дворика и огорода</Animator>
      </h2>
    
          </Animator >
          </ScrollPage >  
            

  
    <ScrollPage >
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "26px" }}>
        Вот некоторые товары, которые мы рекомендуем на этой неделе.
      </span>
    </Animator>
  </ScrollPage>
  </ScrollContainer>
    </div>
    )
}

export default Animation;