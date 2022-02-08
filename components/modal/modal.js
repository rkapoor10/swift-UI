
const displayBtns = document.querySelectorAll(".display-btn");
const alertModal = document.querySelector(".alert-modal");
const simpleModal = document.querySelector(".simple-modal");
const confirmationModal = document.querySelector(".confirmation-modal");
const placeholderMsg = document.querySelector(".placeholder-message");

const onclickHide = document.querySelectorAll(".onclick-hide");

const bodyTag = document.querySelector("body");

// let isShowing = false;

displayBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    placeholderMsg.style.display = "none";
    if (btn.innerText === "Alert Modal") {
      // isShowing = true;
      
      alertModal.style.display = "flex";
      simpleModal.style.display = "none";
      confirmationModal.style.display = "none";
    } else if (btn.innerText === "Simple Modal") {
      // isShowing = true;
      simpleModal.style.display = "flex";
      alertModal.style.display = "none";
      confirmationModal.style.display = "none";
    } else if (btn.innerText === "Confirmation Modal") {
      // isShowing = true;
      confirmationModal.style.display = "flex";
      simpleModal.style.display = "none";
      alertModal.style.display = "none";
    }
  });
});

// bodyTag.addEventListener("click", (e) => {
//   if (
//     isShowing &&
//     "display-btn" !== e.target.className &&
//     "dialogs" !== e.target.className
//   ) {
//     confirmationModal.style.display = "none";
//     simpleModal.style.display = "none";
//     alertModal.style.display = "none";
//   }
// });

onclickHide.forEach((tap) => {
  tap.addEventListener("click", () => {
    placeholderMsg.style.display = "block";
    confirmationModal.style.display = "none";
    simpleModal.style.display = "none";
    alertModal.style.display = "none";
  });
});
