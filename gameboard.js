const blocks = document.querySelector(".blocks");
const block = document.querySelectorAll(".block");





for (let i = 0; i < block.length; i++){
  block[i].addEventListener("click", (e)=>{
    // console.log(e.target.innerText);
  
    if(e.target.classList.contains("win")){
      e.target.innerText = "X";
      e.target.style.color = "red";
      e.target.style.paddingLeft = "1rem";
      blocks.style.width = "30%"
    }else{
      e.target.innerText = "O";
      e.target.style.color = "black";
      e.target.style.paddingLeft = "1rem";
      blocks.style.width = "30%"
    }
  })
}

// blocks.addEventListener("click", (e)=>{
//   // console.log(e.target.innerText);

//   if(e.target.classList.contains("win")){
//     e.target.innerText = "X";
//     e.target.style.color = "red";
//     e.target.style.paddingLeft = "1rem";
//     blocks.style.width = "30%"
//   }else{
//     e.target.innerText = "O";
//     e.target.style.color = "black";
//     e.target.style.paddingLeft = "1rem";
//     blocks.style.width = "30%"
//   }
// })
