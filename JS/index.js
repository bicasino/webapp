let dropdownBtn = document.querySelector('#menubar_respon');
let menuContent = document.querySelector('aside');
let tableContent = document.querySelector('#table-respon');
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      tableContent.style.display="";
   } else {
      menuContent.style.display="";
      tableContent.style.display="block";
   }
})
// document.getElementById("menubar_respon").onclick = function() {  
//     console.log(10+10)
//   };  