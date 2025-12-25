"use strict";

Toastify({
    text: `Username: kevinryan
    Password: kev02937@`,
    duration: 7000,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      fontFamily: "Poppins, sans-serif",
      borderRadius: "15px",
      width: "400px"
    }
  }).showToast();


const form = document.querySelector(".login__form");
const api = `https://fakestoreapi.com/auth/login`;

const handleSubmit = (e)=> {
    e.preventDefault();

    const username = form["username"].value.trim();
    const password = form["password"].value.trim();

    const user = {
      username : username,
      password : password
    };

    fetch(api , {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const token = data.token;

        if(token) {
            localStorage.setItem("token" , token);
            // alert("Successfully Validation 🥳🥳🥳");
            Toastify({
                text: `Successfully Validation 🥳🥳🥳`,
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                style: {
                  background: "linear-gradient(to right, black, black)",
                  fontFamily: "Poppins, sans-serif",
                  borderRadius: "15px",
                  width: "400px"
                }
              }).showToast();

            setTimeout(() => {
            window.location.href = "../pages/dashboard.html";
            }, 3000);
        }
      });
};
  form.addEventListener("submit" , handleSubmit);