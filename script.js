var kite=document.querySelector('.kite');
   var kite1=document.querySelector(".kite1");
   var item0=document.querySelector(".item0");
   var item1=document.querySelector(".item1");
   var item2=document.querySelector(".item2");
   var item3=document.querySelector(".item3");

   var item00=document.querySelector(".item00");
   var item11=document.querySelector(".item11");
   var item22=document.querySelector(".item22");
   var item33=document.querySelector(".item33");
   var upper=document.querySelector(".upper");
   var lower=document.querySelector(".lower");
   var scorep=0;
   var score=document.querySelector('.score');
   var gameoptions=document.querySelector(".options");
   var scorepp=0;
   var yourscore=document.querySelector(".yourscore");
   var replay=document.querySelector(".replay");
   var backgroundaudio=new Audio("background_audio.mp3");
   var jumpaudio=new Audio("jump.wav");
   var deadaudio=new Audio("dead_sound.wav");
    var jumpbutton=document.querySelector(".jumpbutton");
   document.onkeydown=function(e)
   {
    if(e.key=="Enter")
    {
            backgroundaudio.play();
            var dy=parseFloat(window.getComputedStyle(kite1,null).getPropertyValue('bottom'));      
            kite1.classList.remove("kite1");
            kite.style.bottom=dy+8+"px";
            setTimeout(()=>{
              kite1.classList.add("kite1");
            },100)
    }
   }
   jumpbutton.addEventListener('click',()=>{

    backgroundaudio.play();
    var dy=parseFloat(window.getComputedStyle(kite1,null).getPropertyValue('bottom'));      
    kite1.classList.remove("kite1");
    kite.style.bottom=dy+8+"px";
    setTimeout(()=>{
      kite1.classList.add("kite1");
    },100)
   });
   setInterval(()=>{
    dy=parseInt(window.getComputedStyle(kite,null).getPropertyValue('bottom'));
    dx=parseInt(window.getComputedStyle(kite,null).getPropertyValue('left'));
    
    dy1=parseInt(window.getComputedStyle(item0,null).getPropertyValue('bottom'));
    dx1=parseInt(window.getComputedStyle(item0,null).getPropertyValue('left'));
    var newdx1=Math.abs(dx1-dx);
    var newdy1=dy1-(dy+40);

    dy2=parseInt(window.getComputedStyle(item1,null).getPropertyValue('bottom'));
    dx2=parseInt(window.getComputedStyle(item1,null).getPropertyValue('left'));
    var newdx2=Math.abs(dx2-dx);
    var newdy2=dy2-(dy+40);

    dy3=parseInt(window.getComputedStyle(item2,null).getPropertyValue('bottom'));
    dx3=parseInt(window.getComputedStyle(item2,null).getPropertyValue('left'));
    var newdx3=Math.abs(dx3-dx);
    var newdy3=dy3-(dy+40);

    dy4=parseInt(window.getComputedStyle(item3,null).getPropertyValue('bottom'));
    dx4=parseInt(window.getComputedStyle(item3,null).getPropertyValue('left'));
    var newdx4=Math.abs(dx4-dx);
    var newdy4=dy4-(dy+40);
//for lower
dy11=parseInt(window.getComputedStyle(item00,null).getPropertyValue('height'));
    var newdy11=dy-dy11;
    
    dy22=parseInt(window.getComputedStyle(item11,null).getPropertyValue('height'));
    var newdy22=dy-dy22;

    dy33=parseInt(window.getComputedStyle(item22,null).getPropertyValue('height'));
    var newdy33=dy-dy33;
    
    dy44=parseInt(window.getComputedStyle(item33,null).getPropertyValue('height'));
    var newdy44=dy-dy44;
    

    //for down
    
    setInterval(()=>{
    var out=parseInt(window.getComputedStyle(kite,null).getPropertyValue('bottom'));
    if(out==0)
    {
      
      kite.style.display="none";
      lower.style.display="none";
      upper.style.display="none";
      score.style.display="none";
      gameoptions.style.display="grid";
      deadaudio.play();
      
      yourscore.innerHTML="Your Score:"+scorep;
      backgroundaudio.pause();
      backgroundaudio.currentTime=0;
    }
   },500);

    if((newdy1<=0 && newdx1<20) || (newdy2<=0 && newdx2<20) || (newdy3<=0 && newdx3<20) || (newdy4<=0 && newdx4<20) || (newdy11<=0 && newdx1<20) || (newdy22<=0 && newdx2<20) || (newdy33<=0 && newdx3<20) || (newdy44<=0 && newdx4<20))
    {
        backgroundaudio.pause();
        backgroundaudio.currentTime=0;
      kite.style.display="none";
      lower.style.display="none";
      upper.style.display="none";
      score.style.display="none";
      gameoptions.style.display="grid";
      yourscore.innerHTML="Your Score:"+(--scorep);
      deadaudio.play();
    }
    
  
   },0);

  setTimeout(()=>{
  function f1()
  {
    
    score.innerHTML="Score: "+scorep;
    scorep++;
    
    setTimeout(f1,2500);
    
  }

  f1();
},6500);

replay.addEventListener('click',()=>{
  window.location.reload();
 
})