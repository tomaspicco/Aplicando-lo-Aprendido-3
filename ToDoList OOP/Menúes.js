import { limpiarPantalla, scanf } from "./Funciones.js";
export const menu = Object.create(null);

menu.menuPrincipal = function () {
  limpiarPantalla();
  console.log("¡Hola Olivia!\t\n¿Qué deseas hacer?");
  console.log(
    "[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir."
  );
  let opcion = parseInt(scanf("Ingrese una opción: "));
  while (opcion < 0 || opcion > 3) {
    opcion = parseInt(
      scanf("La opción ingresada no es válida.\nIngrese otra: ")
    );
  }
  return opcion;
};

menu.menuAgregarTarea = function () {
  console.log("Ingresó a crear una tarea\n");
  console.log("Para ingresar los datos, seleccione una opción: ");
  console.log(`[1] Ingresar título`);
  console.log(`[2] Ingresar descripcion`);
  console.log(`[3] Ingresar estado`);
  console.log(`[4] Ingresar dificultad`);
  console.log(`[5] Ingresar vencimiento`);
  console.log("Presione 0 para guardar los datos ingresados\n");
  let opcion = parseInt(scanf("Ingresa una opcion: "));
  while (opcion < 0 || opcion > 5) {
    opcion = parseInt(
      scanf("La opción ingresada no es válida.\nIngrese otra: ")
    );
  }
  return opcion;
};

menu.menuVerTareas = function () {
  limpiarPantalla();
  console.log(
    "¿Qué tareas deseas ver?\n[1] Todas\n[2] Pendientes\n[3] Curso\n[4] Terminadas\n[0] Volver"
  );
  let opcion = parseInt(scanf("Ingrese una opción: "));
  while (opcion < 0 || opcion > 4) {
    opcion = parseInt(
      scanf("La opción ingresada no es válida.\nIngrese otra: ")
    );
  }
  return opcion;
};
