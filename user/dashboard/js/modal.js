let modal = null;
const focusableSelector = "button,a,input,textarea";
let focusables = [];
let previouslyFocusedElement = null;

const stopPropagation = function (e) {
  e.stopPropagation();
};
export function open_modal(e) {
  e.preventDefault();
  modal = document.querySelector(e.target.getAttribute("href"));
  focusables = Array.from(modal.querySelectorAll(focusableSelector));
  previouslyFocusedElement = document.querySelector(":focus");
  focusables[0].focus();
  modal.style.display = null;
  modal.removeAttribute("aria-hidden");
  modal.setAttribute("aria-modal", "true");
  modal.addEventListener("click", close_modal);
  modal.querySelector(".close_modal").addEventListener("click", close_modal);
  modal
    .querySelector(".modal_stop_propag")
    .addEventListener("click", stopPropagation);
}

function close_modal(e) {
  if (modal === null) return;
  if (previouslyFocusedElement != null) previouslyFocusedElement.focus();
  e.preventDefault();
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
  modal.removeEventListener("click", close_modal);
  modal.querySelector(".close_modal").removeEventListener("click", close_modal);
  modal
    .querySelector(".modal_stop_propag")
    .removeEventListener("click", stopPropagation);

  const hideModal = () => {
    modal.style.display = "none ";
    modal.removeEventListener("animationend", hideModal);
    modal = null;
  };
  modal.addEventListener("animationend", hideModal);
}

const focusInModal = function (e) {
  e.preventDefault();
  let index = focusables.findIndex((f) => f === modal.querySelector(":focus"));
  if (e.shiftKey === true) {
    index--;
  } else {
    index++;
  }
  if (index >= focusables.length) {
    index = 0;
  }
  if (index < 0) {
    index = focusables.length - 1;
  }
  focusables[index].focus();
};
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    close_modal(e);
  }
  if (e.key === "Tab" && modal !== null) {
    focusInModal(e);
  }
});
