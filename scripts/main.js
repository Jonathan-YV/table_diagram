
import { data, data2, data3 } from './data.js';
import { createTableDiagram } from './table.js';
import { createTableDiagram2 } from './grid.js';

const table = document.getElementById('table');



table.innerHTML = createTableDiagram2(data3);