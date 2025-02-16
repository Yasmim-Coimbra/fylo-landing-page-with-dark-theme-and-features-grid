const emailInput = document.querySelector("input[name=email]");
const emailError = document.querySelector(".email-error");
const formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", (event) => {
    const usuario = emailInput.value.substring(0, emailInput.value.indexOf("@"));
    const dominio = emailInput.value.substring(emailInput.value.indexOf("@") + 1, emailInput.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        emailError.classList.remove("on");
    }
    else {
        event.preventDefault();
        emailError.classList.add("on");
    }


    emailInput.addEventListener("focus", () => {
        emailError.classList.remove("on");
    });
});