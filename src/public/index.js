// modal

const BTN_OPEN_LOGIN = document.querySelector(".btn__open-login");
const BTN_CLOSE_LOGIN = document.querySelector(".btn__close-login");

const BTN_OPEN_AUTH = document.querySelector(".btn__open-auth");
const BTN_CLOSE_AUTH = document.querySelector(".btn__close-auth");

const BTN__SWITCH_AUTH = document.querySelector(".switch__btn-auth");
const BTN__SWITCH_LOGIN = document.querySelector(".switch__btn-login");

const modal__container = document.querySelector(".modal__container");
const modal__container2 = document.querySelector(".modal__container2");
// open auth
BTN_OPEN_AUTH.addEventListener("click", () => {
  //   add class .show
  modal__container.classList.add("show");
});

BTN_CLOSE_AUTH.addEventListener("click", () => {
  //   add class .show
  modal__container.classList.remove("show");
});
// open login
BTN_OPEN_LOGIN.addEventListener("click", () => {
  //   add class .show
  modal__container2.classList.add("show");
});

BTN_CLOSE_LOGIN.addEventListener("click", () => {
  //   add class .show
  modal__container2.classList.remove("show");
});

// switch login -> auth
BTN__SWITCH_AUTH.addEventListener("click", () => {
  //   add class .show
  modal__container.classList.add("show");
  modal__container2.classList.remove("show");
});
// switch auth -> login
BTN__SWITCH_LOGIN.addEventListener("click", () => {
  //   add class .show
  modal__container2.classList.add("show");
  modal__container.classList.remove("show");
});
//click-out
document
  .querySelectorAll(".modal__overlay")[1]
  .addEventListener("click", () => {
    modal__container.classList.remove("show");
    modal__container2.classList.remove("show");
  });

document
  .querySelectorAll(".modal__overlay")[0]
  .addEventListener("click", () => {
    modal__container.classList.remove("show");
    modal__container2.classList.remove("show");
  });
