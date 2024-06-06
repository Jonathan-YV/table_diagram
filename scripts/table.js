export function createTableDiagram(data) {
  const COLOR = {
    ASO: "red",
    Library: "blue",
    DTO: "green",
  };

  const level = getLevel(data);
  const data_ = flattenData(data);
  console.log(data_);
  let table = "<table>";

    // Calcular la longitud de la palabra más larga en cada columna
    let maxWordLengths = Array(level).fill(0);
    for (let i = 0; i < data_.length; i++) {
      for (let j = 0; j < level; j++) {
        if (data_[i] && data_[i].level === j && data_[i].name.length > maxWordLengths[j]) {
          maxWordLengths[j] = data_[i].name.length + 5;
        }
      }
    }

  for (let i = 0; i < data_.length; i++) {
    table += "<tr>";
    for (let j = 0; j < level; j++) {
      let val = "";
      let color = "";
      if (data_[i] && data_[i].level === j) {
        color = COLOR[data_[i].type] || "";
        val = `<i id="row${i}-col${j}" 
                      style="color: ${color}; font-size: 20px;" 
                      class="fa-solid fa-circle${data_[i].hasDependencies ? "-minus" : ""}">
                   </i>
                   ${data_[i].name}`;
      } else if (data_[i ] && data_[i].level === j + 1) {
        // Insertar SVG de línea con longitud igual a la de la palabra más larga en la columna
        val = `<svg height="20" width="${maxWordLengths[j] * 10}" style="width:${maxWordLengths[j] * 10}px;">
                <path d="M0,10 L${maxWordLengths[j] * 10 - 10},10 L${maxWordLengths[j] * 10 - 10},5 L${maxWordLengths[j] * 10},10 L${maxWordLengths[j] * 10 - 10},15 L${maxWordLengths[j] * 10 - 10},10 Z" fill="red" stroke="red" stroke-width="2" />
              </svg>`;
      } else if (data_[i].level > j) {
        val = `<svg height="20" width="10">
            <path d="M5 0 V 100" stroke="red" stroke-width="2" />
         </svg>`;
      }
      table += `<td>${val}</td>`;
    }
    table += "</tr>";
  }

  table += "</table>";

  return table;
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
            const nextCell = document.querySelector(`tr:nth-child(${i + 1}) td:nth-child(${j})`);
            if (nextCell && nextCell.textContent.trim() !== "") {
              foundValue = true;
              break;
            }
          }
          if (foundValue) {
            break;
          }
          const nextRow = document.querySelector(`tr:nth-child(${i + 1})`);
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
          const nextRow = document.querySelector(`tr:nth-child(${i + 1})`);
          if (nextRow) {
            nextRow.style.display = "";
          }
        }
      }
    });
  });
};

function getLevel(data, level = 1) {
  let maxLevel = level;
  data.dependencies.forEach((dependencie) => {
    let dependencieLevel = getLevel(dependencie, level + 1);
    if (dependencieLevel > maxLevel) {
      maxLevel = dependencieLevel;
    }
  });
  return maxLevel;
}

function flattenData(data, level = 0) {
  let result = [{
    id: data.id,
    name: data.name,
    type: data.type,
    level,
    hasDependencies: data.dependencies && data.dependencies.length > 0
  }];
  data.dependencies.forEach((dependencie) => {
    result = result.concat(flattenData(dependencie, level + 1));
  });
  return result;
}
