export function createTableDiagram2(data, direccion, inLevel) {
  const COLOR = {
    ASO: "red",
    ASOS: "red",
    SMC: "blue",
    SMCS: "blue",
    Library: "blue",
    DTO: "green",
    Method: "purple",
    GL: "darkblue",
    GM: "blueviolet",
    GD: "darkgreen",
    G: "darkred",
    DS: "pink",
    DN: "darkviolet",
    DB: "darkblue",
    IN: "darkorange",
    OUT: "darkred",
    Utility: "black",
  };

  const GROUP = ['GL', 'GM', 'GD', 'G' , 'IN', 'OUT', 'Utility', 'ASOS', 'SMCS']

  const level = getLevel(data);
  const data_ = flattenData(data,0, inLevel * 2);
  console.log(data_);

  // Calcular la longitud de la palabra más larga en cada columna
  let maxWordLengths = Array(level).fill(0);
  for (let i = 0; i < data_.length; i++) {
    for (let j = 0; j < level; j++) {
      if (data_[i] && data_[i].level === j && data_[i].name.length > maxWordLengths[j]) {
        maxWordLengths[j] = data_[i].name.length + 5;
      }
    }
  }


  let table = `<div 
                  class="table" 
                  style="display: grid; grid-template-rows: repeat(${data_.length}, 1fr);">`;


  
  for (let i = 0; i < data_.length; i++) {
    table += `<div class="row" style="display: grid; grid-template-columns: ${getRepeated(data_[i], level)};" >`;
    for (let j = 0; j < level; j++) {
      let val = "";
      let color = "";
      if (data_[i] && data_[i].level === j) {
        color = COLOR[data_[i].type] || "";
        val = `<i id="row${i}-col${j}" 
                      style="color: ${color}; font-size: 20px; padding: 1px 0px; cursor: pointer;" 
                      class="fa-solid fa-circle${data_[i].hasDependencies ? "-minus" : ""}">
                  </i>
                  <div 
                    style="
                      margin: 0px 2px; color: ${(GROUP.includes(data_[i].type)) ? "white" : ""}; 
                      display: inline-block; background-color: ${(GROUP.includes(data_[i].type)) ? COLOR[data_[i].type] : ""}; 
                      padding: 3px ${(GROUP.includes(data_[i].type)) ? "10" : "5"}px; 
                      border-radius: 5px">
                      ${data_[i].name}
                  </div>
                   `;
      } else if (data_[i] && data_[i].level === j + 1) {
        color = COLOR[data_[i].type] || "";
        console.log(color);
        if (direccion) {
          // Insertar SVG de línea con longitud igual a la de la palabra más larga en la columna
          val = `<svg height="20" width="100%" style="width:100%;">
                <path d="M8,0 L8,10 L50,10 L50,5 L60,10 L50,15 L50,10 L8,10 Z" fill="grey" stroke="grey" stroke-width="2" />
              </svg>`;
        } else {
          val = `<svg height="20" width="100%" style="width:100%;">
                <path d="M8,1 L8,12 L60,12 L8,12 L8,8 L2,8 L8,1 L14,8 L3,8" fill="grey" stroke="grey" stroke-width="2" />
              </svg>`;
        }

      } else if (data_[i].level > j) {
        
        
        let level_include = data_
                                .slice(i)
                                .map((d) => d.level);

        const valor = level_include.indexOf(j)

        if (valor != -1) {
          level_include = level_include.slice(0, valor);
        }
        
        let draw = ""
        if (level_include.includes(j + 1)) {
          draw = "Se dibuja"
          val = `<svg height="20" width="10">
            <path d="M8 0 V 100" stroke="grey" stroke-width="2" />
         </svg>`;
        } else {
          draw = "No se dibuja"
        }
      }
      table += `<div style="display:flex; margin: 3px 2px" class="cell">${val}</div>`;
    }
    table += "</div>";
  }

  table += "</div>";

  return table;
}


function getRepeated(data, level) {
  let repeat = "";
  for (let i = 0; i < level; i++) {
    if (data.level === i) {
      repeat += "300px "
    } else if (data.level > i) {
      repeat += "65px "
    } else {
      repeat += "1px "
    
    }
  }
  return repeat
}

window.onload = function () {
  const icons = document.querySelectorAll("i");
  icons.forEach((icon) => {
    icon.addEventListener("click", function (event) {
      const idParts = event.target.id.split("-");
      const row = parseInt(idParts[0].substring(3));
      const col = parseInt(idParts[1].substring(3));

      // Si el elemento tiene la clase fa-circle-minus
      if (event.target.classList.contains("fa-circle-minus")) {
        // Cambiar la clase a fa-circle-plus
        event.target.classList.remove("fa-circle-minus");
        event.target.classList.add("fa-circle-plus");

        // Ocultar las filas hasta que se encuentre otro valor real debajo
        for (let i = row + 1; i <= icons.length; i++) {
          let foundValue = false;
          for (let j = 1; j <= col + 1; j++) {
            const nextCell = document.querySelector(`.row:nth-child(${i + 1}) .cell:nth-child(${j})`);
            if (nextCell && nextCell.textContent.trim() !== "") {
              foundValue = true;
              break;
            }
          }
          if (foundValue) {
            break;
          }
          const nextRow = document.querySelector(`.row:nth-child(${i + 1})`);
          if (nextRow) {
            nextRow.style.display = "none";
          }
        }
      }
      // Si el elemento tiene la clase fa-circle-plus
      else if (event.target.classList.contains("fa-circle-plus")) {
        // Cambiar la clase a fa-circle-minus
        event.target.classList.remove("fa-circle-plus");
        event.target.classList.add("fa-circle-minus");

        // Mostrar las filas hasta que se encuentre otro valor real debajo
        for (let i = row + 1; i <= icons.length; i++) {
          const nextRow = document.querySelector(`.row:nth-child(${i + 1})`);
          if (nextRow) {
            nextRow.style.display = "grid";
          }
        }
      }
    });
  });
};

function getLevel(data, level = 1) {
  let maxLevel = level;
  if (data.dependencies){
    data.dependencies.forEach((dependencie) => {
      let dependencieLevel = getLevel(dependencie, level + 1);
      if (dependencieLevel > maxLevel) {
        maxLevel = dependencieLevel;
      }
    });
  }
  return maxLevel;
}

function flattenData(data, level = 0, inLevel) {
  let result = [];

  if (inLevel === 0 || level <= inLevel) {
    result.push({
      id: data.id,
      name: data.name,
      type: data.type,
      level,
      hasDependencies: data.dependencies && data.dependencies.length > 0
    });

    if (data.dependencies) {
      data.dependencies.forEach((dependencie) => {
        result = result.concat(flattenData(dependencie, level + 1, inLevel));
      });
    }
  }

  return result;
}
