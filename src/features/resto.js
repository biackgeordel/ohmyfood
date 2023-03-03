import "../scss/style.scss";
import { resto } from "./data";
import { template } from "./templateResto";
import "../../node_modules/smart-webcomponents/source/modules/smart.calendar";

const data = JSON.parse(resto);
const id = new URL(location.href).searchParams.get("id");
const container = document.querySelector(".container");
const boxMenuResto = container.querySelector(".box-menu-resto");
const containerCommand = document.querySelector(".box-command-resto");
const listCommand = document.createElement("ul");

const createCarteMenu = (data, id) => {
  const carte = data
    .map((element) => {
      return {
        id: element._id,
        nom: element.nom,
        urlImage: element.urlImage,
        menu: element.menu,
      };
    })
    .filter((element) => element.id === parseInt(id, 10));

  return carte;
};
const carteMenu = createCarteMenu(data, id);

//on ajouter  la carteMenu dans le template et on
//affichage le resultat dans le container boxMenuResto

boxMenuResto.append(template(...carteMenu));

//position important
const menu = {};
afficheCarteMenu();

// const calendar = document.querySelector("#calendar");

// console.log(calendar);
// calendar.addEventListener("click", (event) => {
//   const date = new Date(event.target.value).toISOString();
//   containerCommand.append(
//     new Date(date).toLocaleDateString({
//       day: "numeric",
//       month: "2-digit",
//       year: "2-digit",
//     })
//   );
// });

//recupére les elements selectionner par le client
function afficheCarteMenu() {
  console.log("menu carte");
  const carte = document.querySelectorAll(".plat");
  [...carte].forEach((element) => {
    element.addEventListener("click", (event) => {
      const test = element.classList.toggle("valid-command");

      const titre = event.currentTarget.querySelector(".titre").textContent;
      const description =
        event.currentTarget.querySelector(".description").textContent;
      const prix = event.currentTarget
        .querySelector(".prix")
        .textContent.split(" ")[0];
      const menuKey =
        event.currentTarget.parentNode.querySelector("h3").textContent;
      if (test) {
        element.classList.add("valid-command");
        createMenu(menuKey, titre, prix, description);
      } else {
        modifierMenu(menuKey, titre);
        console.log(menu);
      }
      afficherCommande();
    });
  });
}

//function recupere les plats choisis par le client
const createMenu = (menuKey, titre, prix, description) => {
  if (!menu[menuKey]) {
    menu[menuKey] = [
      {
        titre,
        description,
        prix,
        quantity: 1,
      },
    ];
  } else {
    const test = menu[menuKey].reduce((acc, element) => {
      console.log(menuKey);
      if (element.titre === titre) {
        element.quantity++;
      } else {
        if (acc) {
          acc.titre = titre;
          acc.description = description;
          acc.prix = prix;
          acc.quantity = 1;
          console.log(acc);
        }
        console.log("acc else", acc);
        return acc;
      }
    }, {});
    if (test) {
      menu[menuKey].push(test);
    }
  }
};
//afficher la liste des plats choisis par le client
const afficherCommande = () => {
  listCommand.innerHTML = "";
  console.log(Object.keys(menu));
  if (Object.keys(menu).length !== 0) {
    const tab = Object.entries(menu);
    const listLi = tab.map((element) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="title title-capital">${element[0]}</div>`;
      const listdiv = element[1].map((elementDiv) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="title">
        ${elementDiv.titre}
        </div>
        <div >
           <span class="descript">
            ${elementDiv.description}
          </span>
          <strong>${elementDiv.prix * elementDiv.quantity} €</strong> 
        <br/>
           <button class="btn btn-round btn-no-background btn-sub">-</button>
          <span class="quantity">  ${elementDiv.quantity}</span>
         <button class="btn btn-round btn-no-background btn-add">+</button> 
           
        </div>
        `;

        return div;
      });
      li.append(...listdiv);
      return li;
    });

    listCommand.append(...listLi);
    containerCommand.append(listCommand);
    listCommand.querySelectorAll("li").forEach((element) => {
      const btnAdd = element.querySelectorAll(".btn-add");
      const btnSub = element.querySelectorAll(".btn-sub");
      btnAdd.forEach((add) => EventAddButton(add, element));
      btnSub.forEach((add) => EventSubButton(add, element));
    });
  } else {
    console.log("taille zero");
    listCommand.remove();
  }
};

//mofifier la quantité du plat si quantité egal à 0 le plat sera supprimer
function modifierMenu(menuKey, titre) {
  let tabPlat = document.querySelectorAll(".valid-command");
  console.log(tabPlat);
  if (menu[menuKey]) {
    menu[menuKey] = menu[menuKey]
      .map((element) => {
        if (element.titre === titre) {
          element.quantity--;
          if (element.quantity === 0) {
            tabPlat = [...tabPlat].filter(
              (element) => element.querySelector(".titre").textContent === titre
            );

            if (tabPlat.length !== 0) {
              tabPlat[0].classList.remove("valid-command");
            }
            return {};
          } else {
            return element;
          }
        } else {
          return element;
        }
      })
      .filter((element) => element.quantity);
    console.log("taille", menu[menuKey].length);
    if (menu[menuKey].length === 0) {
      delete menu[menuKey];
    }
  }
}
//function  pour augmenter la quantité pour le button sub
const EventSubButton = (add, element) => {
  add.addEventListener("click", () => {
    const titre = element.querySelector(".title").textContent;
    const description = add.parentNode
      .querySelector(".descript")
      .textContent.trim();
    const tab = menu[titre].filter(
      (element) => element.description === description
    );
    const [obj] = tab;
    console.log(obj);
    modifierMenu(titre, obj.titre);
    afficherCommande();
  });
};

//function de  pour augmenter la quantité pour le button add
const EventAddButton = (add, element) => {
  add.addEventListener("click", () => {
    const titre = element.querySelector(".title").textContent;
    const description = add.parentNode
      .querySelector(".descript")
      .textContent.trim();
    const tab = menu[titre].filter(
      (element) => element.description === description
    );
    const [obj] = tab;
    console.log(obj);
    createMenu(titre, obj.titre, obj.prix, obj.description);
    afficherCommande();
  });
};
