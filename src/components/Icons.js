import React from 'react'
import "./icons.css"
import Slide from 'react-reveal/Slide';

const Icons = () => {
  return (
    <div class="container-icons">
 <div class="textcontainer">
 <span class="material-symbols-outlined ">
precision_manufacturing
</span>
<Slide left delay={1000}>
<p>Высокоточное изготовление</p>
</Slide>
</div>

 <div class="textcontainer">
<span class="material-symbols-outlined">
cottage
</span>
<Slide bottom delay={1000}>
<p>Доставка домой & самовызов</p>
</Slide>
</div>

 <div class="textcontainer">
<span class="material-symbols-outlined">
chair
</span>

<Slide right delay={1000}>
<p>Консультация специалиста</p>
</Slide>
</div>




        </div>
  


        
        

    
  )
}

export default Icons