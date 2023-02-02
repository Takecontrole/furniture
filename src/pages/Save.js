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