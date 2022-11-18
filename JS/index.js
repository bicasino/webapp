let dropdownBtn = document.querySelector('#menubar_respon');
let menuContent = document.querySelector('aside');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})
// document.getElementById("menubar_respon").onclick = function() {  
//     console.log(10+10)
//   };  