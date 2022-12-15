function searchfunc() {
  let menusearch = document.querySelector("#menu-search");
  let tableitems = Array.from(document.querySelectorAll(".table-scroll"));
  menusearch.value = menusearch.value.toLowerCase();
  tableitems.forEach(function (el) {
    let text = el.innerText;
    if (text.indexOf(menusearch.value) > -1) el.style.display = "";
    else el.style.display = "none";
  });
}

// responsive mobile
let dropdownBtn = document.querySelector("#menubar_respon");
let menuContent = document.querySelector("aside");
let tableContent = document.querySelector("#table-respon");
dropdownBtn.addEventListener("click", () => {
  if (menuContent.style.display === "") {
    menuContent.style.display = "block";
    tableContent.style.display = "";
  } else {
    menuContent.style.display = "";
    tableContent.style.display = "block";
  }
});


// document.getElementById("dropdown-btn").onclick = function() {
//     console.log(10+10)
//   };

// let arr = [1, 2, 3];

// arr.push(4);

// arr.pop();

// arr.shift();

// arr.unshift(0);

// // console.log(arr);

// let arr1 = [1, 2, 3, 4, 5, 6];

// console.log(arr1.length);

// 16 , 9
// let a = 6,
//   b = 16;

// function min2Number (c, d) {
//    c > d ? console.log(d) : (c < d ? console.log(c) : console.log("="))

// };
// min2Number(a, b);

// function chainToSwitch(val) {
//   let answer = '';
//   // Only change code below this line

//   switch (val) {
//     case 'bob':
//       answer = 'Marley';
//       break;
//     case 42:
//       answer = 'The Answer';
//       break;
//     default:
//       answer = 'Ate Nine';
//   }

//   // Only change code above this line
//   return answer;
// }

// console.log(chainToSwitch(7));

// const first = (second) => { third }

// (params) => {

// }

// array.forEach(element => {

// });

// for (let index = 0; index < array.length; index++) {
//    const element = array[index];

// }
