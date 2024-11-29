import { opcion1, opcion2, opcion3 } from "./Funciones.js";
import { menu } from "./Menúes.js";

let opcionMenu;

do {
  opcionMenu = menu.menuPrincipal();
  switch (opcionMenu) {
    case 1:
      opcion1();
      break;
    case 2:
      opcion2();
      break;
    case 3:
      opcion3();
      break;
    case 0:
      console.log("Saliendo del programa.");
      break;
    default:
      console.log("Opción no válida.");
  }
} while (opcionMenu !== 0);
