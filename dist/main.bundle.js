/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg
const jay_wennington_N_Y88TWmGwA_unsplash_namespaceObject = __webpack_require__.p + "asset/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
;// CONCATENATED MODULE: ./src/assets/images/lanote.jpg
const lanote_namespaceObject = __webpack_require__.p + "asset/images/lanote.jpg";
;// CONCATENATED MODULE: ./src/assets/images/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg
const louis_hansel_shotsoflouis_qNBGVyOCY8Q_unsplash_namespaceObject = __webpack_require__.p + "asset/images/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg";
;// CONCATENATED MODULE: ./src/assets/images/stil-u2Lp8tXIcjw-unsplash.jpg
const stil_u2Lp8tXIcjw_unsplash_namespaceObject = __webpack_require__.p + "asset/images/stil-u2Lp8tXIcjw-unsplash.jpg";
;// CONCATENATED MODULE: ./src/assets/images/toa-heftiba-DQKerTsQwi0-unsplash.jpg
const toa_heftiba_DQKerTsQwi0_unsplash_namespaceObject = __webpack_require__.p + "asset/images/toa-heftiba-DQKerTsQwi0-unsplash.jpg";
;// CONCATENATED MODULE: ./src/features/data.js
const resto = `[
    {
    "_id":1,
    "nom":"La palette du go??t",
    "ville":"Menilmontant",
    "urlImage":"./asset/images/lanote.jpg ",
    "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit.natus earum ipsam, nemo similique iste harum dol",
    "menu":{
        "entrees":[
            {
                "title":"Fricass??e d'escargot",
                "description":"Au piment d'Espelette",
                "prix":35
            },
              {
                "title":"Foie gras de canard mi-cuit",
                "description":"Et ses copeaux de truffe noire",
                "prix":25
            },
            
              {
                "title":"Oeuf au plat",
                "description":"Assaisonn?? ?? la truffe sur lit de caviar",
                "prix":20
            }
        ],
        "desserts":[
                {
                "title":"Farandole de desserts",
                "description":"Du chef",
                "prix":18
            },
              {
                "title":"Cr??me brul??e",
                "description":"Revisit??e",
                "prix":22
            },
            
              {
                "title":"Tiramisu",
                "description":"?? la noisette",
                "prix":23
            }
        ],
         "plats":[
              {
              "title":"Filet de boeuf aux herbes",
              "description":"Accompagn?? de sa ribambelle de l??gumes",
              "prix":40
          },
            {
              "title":"Parmentier de queue de boeuf",
              "description":"?? la truffe noire sur sa pur??e de panais",
              "prix":35
          },
          
            {
              "title":"Filet de turbot",
              "description":"Aux agrumes",
              "prix":44
          }
      ]
   }
       
    
    },

     {
    "_id":2,
    "nom":"La note enchant??e",
    "urlImage":"./asset/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
    "ville":"Charonne",
    "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit.natus earum ipsam, nemo similique iste harum dol",
    "menu":{
        "entrees":[
            {
                "title":"Ravioli de foie gras",
                "description":"Accompagn??s de leur cr??me ?? la truffe",
                "prix":25
            },
              {
                "title":"Caviar osci??tre",
                "description":"Sur blini ?? la farine de bl?? noir",
                "prix":35
            },
            
              {
                "title":"Homard et espuma de potiron",
                "description":"Marin?? aux zestes d'orange",
                "prix":20
            },
               {
                "title":"Foie gras de canard cuit entier",
                "description":"Confiture de figue et pain toast??",
                "prix":35
            }
        ],
        "desserts":[
                {
                "title":"Macaron noisette et chocolat",
                "description":"Glace au caramel brun et sel de Gu??rande",
                "prix":18
            },
              {
                "title":"Baba au rhum revisit??",
                "description":"Avec son coulis de citron",
                "prix":22
            },
            
              {
                "title":"Tarte au citron meringu??e",
                "description":"D??structur??e",
                "prix":23
            }
        ],
        "plats":[
                 {
                "title":"Noix de coquilles Saint-Jacques",
                "description":"Sur lit de pur??e de c??leri-rave",
                "prix":40
            },
              {
                "title":"Langoustine po??l??e",
                "description":"Pur??e de patate douce",
                "prix":35
            },
            
              {
                "title":"Mijot?? de queue de boeuf",
                "description":"Et riz sauvage aux zestes de citron",
                "prix":44
            }
        ]
      }
    
            
    },
     {
    "_id":3,
    "nom":"?? la fran??aise",
    "urlImage":"./asset/images/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg ",
    "ville":"Cit?? rouge",
    "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit.natus earum ipsam, nemo similique iste harum dol",
    "menu":{
        "entrees":[
            {
                "title":"Tartare de poulpe acidul??",
                "description":"Aux Zests d'orange",
                "prix":25
            },
              {
                "title":"Velout?? de l??gumes d'antan",
                "description":"Carotte,panais,topinambour",
                "prix":35
            },
            
              {
                "title":"Soupe ?? l'oignon",
                "description":"Revisit??e",
                "prix":20
            }
        ],
        "plats":[
                 {
                "title":"Coquilles Saint-Jacques",
                "description":"Accompagn??es d'une pur??e de panais",
                "prix":40
            },
              {
                "title":"Magret de canard",
                "description":"Et parmentier de pommes de terres",
                "prix":35
            },
            
              {
                "title":"Pigeonneau d-Ille-et-Vilaine",
                "description":"Sur son lit de gnocchis aux l??gumes",
                "prix":44
            }
        ],
            "desserts":[
                {
                "title":"P??tales de violettes glac??es",
                "description":"Et pur??e de noisettes",
                "prix":18
            },
              {
                "title":"Fondant au chocolat",
                "description":"Revisit??e",
                "prix":22
            },
            
              {
                "title":"Millefeuille croustillant",
                "description":"Myrtilles et p??te d'amande",
                "prix":23
            }
        ]
    
            }
    }, {
    "_id":4,
    "nom":"Le d??lice des sens",
    "urlImage":"./asset/images/toa-heftiba-DQKerTsQwi0-unsplash.jpg",
    "ville":"Folie-M??licourt",
    "description":" Lorem ipsum dolor sit amet consectetur adipisicing elit.natus earum ipsam, nemo similique iste harum dol",
    "menu":{
        "entrees":[
            {
                "title":"Tartare de thon",
                "description":"Assaisonn?? au yuzu",
                "prix":25
            },
              {
                "title":"Bouch??e de homard croustillant",
                "description":"Et sa farandole de petits l??gumes",
                "prix":35
            },
            
              {
                "title":"Velout?? de c??pes",
                "description":"Aux truffes",
                "prix":20
            }
        ],
        "desserts":[
                {
                "title":"Farandole de desserts",
                "description":"Du chef",
                "prix":18
            },
              {
                "title":"Cr??me brul??e",
                "description":"Revisit??e",
                "prix":22
            },
            
              {
                "title":"Tiramisu",
                "description":"?? la noisette",
                "prix":23
            }
        ],
        "plats":[
                 {
                "title":"Poulet r??ti aux herbes de Provence",
                "description":"Et sa cr??me de truffe",
                "prix":40
            },
              {
                "title":"Langoustine po??l??e",
                "description":"Langouste r??tie",
                "prix":35
            },
            
              {
                "title":"C??te de boeuf Angus",
                "description":"Et sa pur??e de panais",
                "prix":44
            }
        ]
    
            }
    }
]`;
;// CONCATENATED MODULE: ./src/index.js







const data = JSON.parse(resto);
const presentationResto = data.map(element => {
  const {
    _id,
    nom,
    ville,
    description,
    urlImage
  } = element;
  return {
    _id,
    nom,
    ville,
    description,
    urlImage
  };
});
console.log(presentationResto);
console.log(data);
function full() {
  const box = document.querySelector(".box-presentation");
  box.style.background = "url('./asset/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg') center center/cover";
  const list = presentationResto.map(element => {
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
  btnConsulter.forEach(element => {
    console.log(element);
    element.addEventListener("click", event => {
      console.log(event.target.dataset.id);
      const id = event.target.dataset.id;
      location.assign(`./resto.html?id=${id}`);
    });
  });
}
full();
/******/ })()
;