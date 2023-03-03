export const template = (data) => {
  const container = document.createElement("section");
  const containerSection = document.createElement("section");
  const boxPlat = document.createElement("section");
  containerSection.classList.add("carte");
  boxPlat.classList.add("box-plat");

  container.classList.add("box-rest");
  const boxImage = document.createElement("div");
  boxImage.classList.add("image-resto");
  const boxTitre = document.createElement("div");
  console.log("template", data);
  console.log("object", Object.entries(data.menu));

  const menu = Object.entries(data.menu);

  const listsection = CarteMenu(menu);
  boxImage.innerHTML = `
          <img src="${data.urlImage}" alt="photo du restaurant ${data.nom}"/>
     
  `;

  boxTitre.classList.add("title-resto");
  boxTitre.innerHTML = `
            <div class="title-box-like">
                <h1 class="box-resto__titre">${data.nom}</span></h1>
                <div class="box-like">
                    <span><i class="far fa-heart"></i></span>
                    <span><i class="fas fa-heart"></i></span>
                </div>
            </div>
            <div class="separator"></div>
  `;
  boxPlat.append(...listsection);
  containerSection.append(boxTitre, boxPlat);
  container.append(boxImage, containerSection);
  return container;
};

const CarteMenu = (menu) => {
  const listSection = menu.map((element) => {
    const section = document.createElement("section");
    const divMap = document.createElement("div");
    divMap.classList.add("ma-map");
    divMap.innerHTML = `
    <div class="titre_entree">
        <h3 class="title title-capital">${element[0]}</h3>
    </div>`;

    section.append(divMap);
    const listdiv = element[1].map((val, index) => {
      const div = document.createElement("div");
      div.classList.add("plat", `entree-${index + 1}`);
      div.innerHTML = `
    
         <div class="plat-titre">
          <p><strong class="titre">${val.title}</strong></p>
          <p class="description">${val.description}<p> 
         </div>
        <div class="extension">
            <span><strong class="prix">${val.prix} €</strong></span> 
            <span><i class="fas fa-check-circle"></i></span>        
        </div>
  `;
      return div;
    });
    divMap.append(...listdiv);
    return section;
  });

  return listSection;
};
