let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let result4 = document.querySelector(".result4");
let button = document.querySelector("button");
let result = document.querySelector(".result");

button.onclick = function() {
  let ans1 = document.querySelector(".iq").value;
  let ans2 = document.querySelector(".weather").value;
  console.log(ans1)
  console.log(ans2)

  if (ans1 > 50 && ans2 === "hot") {
    result.innerHTML = "your iq is " + ans1 + " and you perfer " + ans2 + " weather so you are MUSHROOM"
  }
  if (ans1 > 100 && ans2 === "cold") {
    result.innerHTML = "your iq is " + ans1 + " and you perfer " + ans2 + " weather so you are FIREFLOWER"
  }
  if (ans1 > 150 && ans2 === "hot") {
    result.innerHTML = "your iq is " + ans1 + " and you perfer " + ans2 + " weather so you are SUPERBELL"
  }
  if (ans1 > 200 && ans2 === "cold") {
    result.innerHTML = "your iq is " + ans1 + " and you perfer " + ans2 + " weather so you are SUPERSTAR"
  }
};
