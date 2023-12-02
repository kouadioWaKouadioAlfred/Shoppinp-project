import { createElement } from "./module/dom.js";

const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createList() {
  const li = createElement("li", {
    class: "list-group-item d-flex align-items-center",
  });
  const label = createElement("label", {
    class: "ms-auto btn btn-danger btn-sm",
  });
  label.innerHTML = '<i class="bi-trash"></i>';
  li.append(input.value);
  li.append(label);
  ul.append(li);
  input.value = "";
  label.addEventListener("click", () => {
    li.remove();
  });
}

button.addEventListener("click", () => {
  if (inputLength() > 0 && input.value !== "") {
    createList();
  } else {
    return;
  }
});
