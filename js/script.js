let ans = document.querySelector(".ans");
let sum = document.querySelector(".operator >.sum");
let mines = document.querySelector(".operator >.mines");
let mult = document.querySelector(".operator >.mult");
let divid = document.querySelector(".operator >.divid");
let eq = document.querySelector(".operator >.eq");
let c = document.querySelector(".number > .btn-clean");
let number = document.querySelectorAll(".number > .btn-number");
let pn = document.querySelector(".number > .btn-pn");
c.addEventListener("click", function () {
  ans.innerHTML = "0";
});

number.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (ans.innerHTML == "0") {
      ans.innerHTML = elem.textContent;
    } else {
      ans.innerHTML = ans.innerHTML + elem.textContent;
    }
  });
});

pn.addEventListener("click",function(){
  ans.innerHTML=(-1)*ans.innerHTML
})

let numberone;
let numbertwo;
let op = "";


sum.addEventListener("click", function () {
  numberone = parseInt(ans.innerHTML);
  ans.innerHTML = "0";
   op = "+";
});


mines.addEventListener("click", function () {
  numberone = parseInt(ans.innerHTML);
  ans.innerHTML = "0";
   op = "-";
});

mult.addEventListener("click", function () {
  numberone = parseInt(ans.innerHTML);
 ans.innerHTML = "0";
  op = "*";
});

divid.addEventListener("click", function () {
  numberone = parseInt(ans.innerHTML);
  ans.innerHTML = "0";
 op = "/";
});

eq.addEventListener("click", function () {
  numbertwo = parseInt(ans.innerHTML);
  if (op == "+") {
    ans.innerHTML = numberone + numbertwo;
  }
  if (op == "-") {
    ans.innerHTML = numberone - numbertwo;
  }
  if (op == "*") {
    ans.innerHTML = numberone * numbertwo;
  }
  if (op == "/") {
    ans.innerHTML = numberone / numbertwo;
  }

});



 
