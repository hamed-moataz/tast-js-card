const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");

btn.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `
  <div class="task">
  <span class="icon-star"></span>
  <p lang="ar" class="task-taxt">${input.value}</p>

<div>
     <span class="icon-trash-o"></span>
     <span class="icon-happy"></span>
</div>
</div>
  `;
  container.innerHTML += task;
  input.value = "";
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash-o":
      eo.target.parentElement.parentElement.remove();

      break;

    case "icon-happy":
      eo.target.classList.add("dn");
      const heart = ` <span class="icon-heart"></span>`;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-taxt")[0]
        .classList.add("finish");

      eo.target.parentElement.innerHTML += heart;
      break;

    case "icon-heart":
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-taxt")[0]
        .classList.remove("finish");
      eo.target.classList.add("dn");

      const addHappy = `
                   <span class="icon-happy"></span>
                `;
      eo.target.parentElement.innerHTML += addHappy;

      break;

    case "icon-star":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    case "icon-star orange":
      eo.target.classList.remove("orange");

      break;

    default:
      break;
  }
});
