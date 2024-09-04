// gsap
document.addEventListener("mousemove",function(e){
    gsap.to("#cursor",{
        x:e.x,
        y:e.y,
        duration:0
    })
})
document.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        opacity:0,
    })
})
document.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        opacity:1,
    })
})


function func(){


var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;

b1=document.querySelector(".b1").value;
b2=document.querySelector(".b2").value;
b3=document.querySelector(".b3").value;
b4=document.querySelector(".b4").value;
b5=document.querySelector(".b5").value;
b6=document.querySelector(".b6").value;
b7=document.querySelector(".b7").value;
b8=document.querySelector(".b8").value;
b9=document.querySelector(".b9").value;



b1btn=document.querySelector(".b1")
b2btn=document.querySelector(".b2")
b3btn=document.querySelector(".b3")
b4btn=document.querySelector(".b4")
b5btn=document.querySelector(".b5")
b6btn=document.querySelector(".b6")
b7btn=document.querySelector(".b7")
b8btn=document.querySelector(".b8")
b9btn=document.querySelector(".b9")
if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
  b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
gsap.to("#line1",{
  width:"90%",
  border:"2px solid red",
  boxShadow:"0 0 10px red"
})
  b1btn.style.color = "red"; 
  b2btn.style.color = "red"; 
  b3btn.style.color = "red"; 
} 
else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
  b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line4",{
    width:"90%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b1btn.style.color = "red"; 
  b4btn.style.color = "red"; 
  b7btn.style.color = "red"; 
} 
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
  b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 

  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  gsap.to("#line3",{
    width:"90%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b7btn.style.color = "red"; 
  b8btn.style.color = "red"; 
  b9btn.style.color = "red"; 
} 
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
  b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 

  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  gsap.to("#line6",{
    width:"90%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b3btn.style.color = "red"; 
  b6btn.style.color = "red"; 
  b9btn.style.color = "red"; 
} 
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
  b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  gsap.to("#line8",{
    width:"100%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b1btn.style.color = "red"; 
  b5btn.style.color = "red"; 
  b9btn.style.color = "red"; 
} 
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
  b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line7",{
    width:"100%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b3btn.style.color = "red"; 
  b5btn.style.color = "red"; 
  b7btn.style.color = "red"; 
} 
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
  b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line5",{
    width:"90%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b2btn.style.color = "red"; 
  b5btn.style.color = "red"; 
  b8btn.style.color = "red"; 
} 
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
  b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
  document.getElementById('print') 
    .innerHTML = "Player X won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line2",{
    width:"90%",
    border:"2px solid red",
    boxShadow:"0 0 10px red"
  })
  b4btn.style.color = "red"; 
  b5btn.style.color = "red"; 
  b6btn.style.color = "red"; 
} 

// Checking of Player X finish 
// Checking for Player 0 starts, Is player 0 won or 
// not and after that disabled all the other fields 
else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || 
  b2 == 'O') && (b3 == 'o' || b3 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line1",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b1btn.style.color = "blue"; 
  b2btn.style.color = "blue"; 
  b3btn.style.color = "blue"; 
} 
else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || 
  b4 == 'O') && (b7 == 'o' || b7 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line4",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b1btn.style.color = "blue"; 
  b4btn.style.color = "blue"; 
  b7btn.style.color = "blue"; 
} 
else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || 
  b8 == 'O') && (b9 == 'o' || b9 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b6btn.disabled = true; 
  gsap.to("#line3",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b7btn.style.color = "blue"; 
  b8btn.style.color = "blue"; 
  b9btn.style.color = "blue"; 
} 
else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || 
  b6 == 'O') && (b9 == 'o' || b9 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b4btn.disabled = true; 
  b5btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  gsap.to("#line6",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b3btn.style.color = "blue"; 
  b6btn.style.color = "blue"; 
  b9btn.style.color = "blue"; 
} 
else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || 
  b5 == 'O') && (b9 == 'o' || b9 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  gsap.to("#line8",{
    width:"100%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b1btn.style.color = "blue"; 
  b5btn.style.color = "blue"; 
  b9btn.style.color = "blue"; 
} 
else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || 
  b5 == 'O') && (b7 == 'o' || b7 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line7",{
    width:"100%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b3btn.style.color = "blue"; 
  b5btn.style.color = "blue"; 
  b7btn.style.color = "blue"; 
} 
else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || 
  b5 == 'O') && (b8 == 'o' || b8 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b1btn.disabled = true; 
  b3btn.disabled = true; 
  b4btn.disabled = true; 
  b6btn.disabled = true; 
  b7btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line5",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b2btn.style.color = "blue"; 
  b5btn.style.color = "blue"; 
  b8btn.style.color = "blue"; 
} 
else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || 
  b5 == 'O') && (b6 == 'o' || b6 == 'O')) { 
  document.getElementById('print') 
    .innerHTML = "Player 0 won"; 
  b1btn.disabled = true; 
  b2btn.disabled = true; 
  b3btn.disabled = true; 
  b7btn.disabled = true; 
  b8btn.disabled = true; 
  b9btn.disabled = true; 
  gsap.to("#line2",{
    width:"90%",
    border:"2px solid blue",
    boxShadow:"0 0 10px blue"
  })
  b4btn.style.color = "blue"; 
  b5btn.style.color = "blue"; 
  b6btn.style.color = "blue"; 
} 



var reset =document.getElementById("reset")

reset.addEventListener("click",function(){
location.reload();
b1=b2=b3=b4=b5=b6=b7=b8=b9=''
})

}
flag=1

function func1(){
   
   if(flag==1){
     document.querySelector(".b1").value="X"
     console.log(flag)
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
    
   }
   else{
     document.querySelector(".b1").value="O"
     console.log(flag)
   flag=1
   gsap.to("#cursor",{
    color:"red",
    innerHTML:"X",
    textShadow:"0 0 10px red"
  })
  gsap.to(".oplayer",{
    color:"gray",
    textShadow:"0 0 10px gray",
    scale:.7
  })
  gsap.to(".b1",{
    textStroke:"1px blue",
    textShadow:"0 0 10px blue"
  })
  gsap.to(".shadow2",{
    backgroundColor:"gray",
    opacity:0
  })
  gsap.to(".xplayer",{
    color:"white",
    textShadow:"0 0 10px red",
    scale:1
  })
  gsap.to(".shadow",{
    backgroundColor:"red",
    opacity:1
  })
   
   }
}

function func2(){
   if(flag==1){
     document.querySelector(".b2").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b2").value="O"
     console.log("flag=0")
   flag=1
   gsap.to("#cursor",{
    color:"red",
    innerHTML:"X",
    textShadow:"0 0 10px red"
  })
  gsap.to(".oplayer",{
    color:"gray",
    textShadow:"0 0 10px gray",
    scale:.7
  })
  gsap.to(".shadow2",{
    backgroundColor:"gray",
    opacity:0
  })
  gsap.to(".b2",{
    textStroke:"1px blue",
    textShadow:"0 0 10px blue"
  })
  gsap.to(".xplayer",{
    color:"white",
    textShadow:"0 0 10px red",
    scale:1
  })
  gsap.to(".shadow",{
    backgroundColor:"red",
    opacity:1
  })
   }
}
function func3(){
   if(flag==1){
     document.querySelector(".b3").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b3").value="O"
     console.log("flag=0")
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".b3",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
     flag=1
   }
}
function func4(){
   if(flag==1){
     document.querySelector(".b4").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b4").value="O"
     console.log("flag=0")
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".b4",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
     flag=1
   }
}
function func5(){
   if(flag==1){
     document.querySelector(".b5").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b5").value="O"
     console.log("flag=0")
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".b5",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
     flag=1
   }
}
function func6(){
   if(flag==1){
     document.querySelector(".b6").value="X"
     console.log("flag=1")
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
     flag=0
   }
   else{
     document.querySelector(".b6").value="O"
     console.log("flag=0")
     flag=1
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".b6",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
   }
}
function func7(){
   if(flag==1){
     document.querySelector(".b7").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{

     document.querySelector(".b7").value="O"
     console.log("flag=0")
     flag=1
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".b7",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
   }
}
function func8(){
   if(flag==1){
     document.querySelector(".b8").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:1
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b8").value="O"
     console.log("flag=0")
     flag=1
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".b8",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
   }
}
function func9(){
   if(flag==1){
     document.querySelector(".b9").value="X"
     console.log("flag=1")
     flag=0
     gsap.to("#cursor",{
      color:"blue",
      innerHTML:"O",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".oplayer",{
      color:"white",
      textShadow:"0 0 10px blue",
      scale:1
    })
    gsap.to(".shadow2",{
      backgroundColor:"blue",
      opacity:1
    })
    gsap.to(".xplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow",{
      backgroundColor:"gray",
      opacity:0
    })
   }
   else{
     document.querySelector(".b9").value="O"
     console.log("flag=0")
     flag=1
     gsap.to("#cursor",{
      color:"red",
      innerHTML:"X",
      textShadow:"0 0 10px red"
    })
    gsap.to(".oplayer",{
      color:"gray",
      textShadow:"0 0 10px gray",
      scale:.7
    })
    gsap.to(".shadow2",{
      backgroundColor:"gray",
      opacity:0
    })
    gsap.to(".xplayer",{
      color:"white",
      textShadow:"0 0 10px red",
      scale:1
    })
    gsap.to(".b9",{
      textStroke:"1px blue",
      textShadow:"0 0 10px blue"
    })
    gsap.to(".shadow",{
      backgroundColor:"red",
      opacity:1
    })
   }
}















// Function called whenever user tab on any box 
