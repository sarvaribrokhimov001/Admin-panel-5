"use strict";
  
  function showToast(message, color = "black", duration = 2000) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: `linear-gradient(to right, ${color}, black)`,
        color: "red",
        border: "1px solid red",
        boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
      }
    }).showToast();
  }

    function toastMessage(message, color = "black", duration = 2000) {
      Toastify({
        text: message,
        duration: duration,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: `linear-gradient(to right, ${color}, black)`,
          color: "green",
          border: "1px solid green",
          boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
      }
    }).showToast();
  }


  Toastify({
    text: "Dasturimizga xush kelibsiz !",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "red",
      border: "1px solid red",
      boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
    }
  }).showToast();

  Toastify({
    text: "Assalomu alaykum",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "green",
      border: "1px solid green",
      boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
    }
  }).showToast();

  const elForm = document.querySelector(".index__form");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}\[\]:;"'<>.,?/~]).{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

  elForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const username = elForm["username"].value.trim();
    const password = elForm["password"].value.trim();
    const email = elForm["email"].value.trim();

    if (username === "") {
      return showToast("Bo'sh maydonni to'ldiring !");
    }

    if (!usernameRegex.test(username)) {
      return showToast("Username 5–15 harf va raqamdan iborat bo'lishi kerak!");
    }

    if (!passwordRegex.test(password)) {
      return showToast("Invalid password");
    }

    if (!emailRegex.test(email)) {
      return showToast("Invalid email address");
    }

    toastMessage("Tizimga muvaffaqiyatli kirildi!", "black", 2500);

      setTimeout(() => {
        window.location.href = "../pages/login.html"; 
    }, 3000);
  });