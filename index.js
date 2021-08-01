let slot = document.querySelector('.slot'); 
console.log(photos[0].game)
let timeOutNumer = ()=> {
    return Math.random() * (4000 - 2000) + 2000;
}

let allDays = photos.length; 
  let firstDay = 0; 
  let change = document.querySelector('.slot').innerHTML; 

  changeDay = function() {
     // console.log(change)
      document.querySelector('.slot').innerHTML = photos[firstDay].game;
      document.querySelector('.image').src = photos[firstDay].src
    firstDay = (firstDay + 1) % allDays;
  }
  function ohNo() {
    slot.classList.remove("off"); 
        slot.classList.add("on"); 
    ohYeah = setInterval(changeDay, 100);//must match css animation
    setTimeout(()=> {
        clearInterval(ohYeah)
        slot.classList.remove("on");
    slot.classList.add("off");
    } ,timeOutNumer());
  };

  // more 
  function clssChange(html) {
    html.classList.remove("off")
    html.classList.add("on"); 
    ohYeah = setInterval(changeDay, 100);//must match css animation
    setTimeout(()=> {
        clearInterval(ohYeah)
        html.classList.remove("on");
        html.classList.add("off");
    } ,timeOutNumer());
  };

// let allGames = game.length; 
// let firstGame = 0; 
// hange = document.querySelector('.slot').innerHTML;
// console.log(document.querySelector('.slot').innerHTML)

let button = document.querySelector('.button').addEventListener("click",()=> {
   if(slot.classList.contains("on")){
//    slot.classList.remove("on")
//     slot.classList.add("off")
    
    }
    else {
        // slot.classList.remove("off"); 
        // slot.classList.add("on"); 
         ohNo(); 
    }
}); 

