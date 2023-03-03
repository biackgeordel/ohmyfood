import "./scss/style.scss";
import "./assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import "./assets/images/lanote.jpg";
import "./assets/images/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg";
import "./assets/images/stil-u2Lp8tXIcjw-unsplash.jpg";
import "./assets/images/toa-heftiba-DQKerTsQwi0-unsplash.jpg";

import { resto as res } from "./features/data";

const data = JSON.parse(res);

const presentationResto = data.map((element) => {
  const { _id, nom, ville, description, urlImage } = element;
  return { _id, nom, ville, description, urlImage };
});
console.log(presentationResto);
console.log(data);

function full() {
  const box = document.querySelector(".box-presentation");
  box.style.background =
    "url('./asset/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg') center center/cover";
  const list = presentationResto.map((element) => {
    const resto = document.createElement("div");
    resto.classList.add("resto");
    resto.innerHTML = `
                <div class="element-resto">
                  <img
                    src="${element.urlImage}"
                    alt="photo ${element.nom}"
                  />
                  <div class="resto-description">
                    <p class="resto-title">${element.nom}</p>
                    <p class="resto-ville">${element.ville}</p>
                    <p>
                      ${element.description}
                    </p>
                  </div>
                  <!---bouton resto-->
                  <div class="box-btn">
                    <button data-id=${element._id} class="btn btn-orangered">Consulter</button>

                    <div class="box-like">
                      <span><i class="far fa-heart"></i></span>
                      <span><i class="fas fa-heart"></i></span>
                    </div>
                  </div> 
                </div>
    `;
    return resto;
  });
  const listResto = document.querySelector(".list-resto");
  listResto.append(...list);
  const btnConsulter = listResto.querySelectorAll(".btn-orangered");
  console.log(btnConsulter);
  btnConsulter.forEach((element) => {
    console.log(element);
    element.addEventListener("click", (event) => {
      console.log(event.target.dataset.id);
      const id = event.target.dataset.id;

      location.assign(`/resto.html?id=${id}`);
    });
  });
}

full();
