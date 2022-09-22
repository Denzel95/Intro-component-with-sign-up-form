"use strict";

const form = document.querySelector("form");
const inputs = document.querySelectorAll(".data");
const error = document.querySelectorAll(".error-text");
const submit = document.querySelector("form .btn-trial");
const icon = document.querySelectorAll(".error-icon");

const checkValidity = () => {
  const fName = document.querySelector("#first-name").value.trim();
  const lName = document.querySelector("#last-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (fName === "") {
    inputs[0].classList.add("error");
    error[0].style.display = "block";
    icon[0].style.display = "block";
  } else {
    inputs[0].classList.remove("error");
    error[0].style.display = "none";
    icon[0].style.display = "none";
  }

  if (lName === "") {
    inputs[1].classList.add("error");
    error[1].style.display = "block";
    icon[1].style.display = "block";
  } else {
    inputs[1].classList.remove("error");
    error[1].style.display = "none";
    icon[1].style.display = "none";
  }

  if (email.match(regEx)) {
    inputs[2].classList.remove("error");
    error[2].style.display = "none";
    icon[2].style.display = "none";
  } else {
    inputs[2].classList.add("error");
    error[2].style.display = "block";
    icon[2].style.display = "block";
  }

  if (password === "") {
    inputs[3].classList.add("error");
    error[3].style.display = "block";
    icon[3].style.display = "block";
  } else {
    inputs[3].classList.remove("error");
    error[3].style.display = "none";
    icon[3].style.display = "none";
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();

  //   inputs.forEach((input) => {
  //     if (!input.value) {
  //       input.style.display = "block";
  //     }
  //   });
  //   let fName = fName.value.trim();
  //   let lName = lName.value.trim();
  //   let email = email.value.trim();
  //   let password = password.value.trim();

  //   if (fName === " ") {
  //     error.style.display = "block";
  //     icon.style.display = "block";
  //   }
});
