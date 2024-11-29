import { menu } from "./Menúes.js";
import { Lista } from "./Lista.js";
import { tarea } from "./Tarea.js";

import promptSync from "prompt-sync";
export const scanf = promptSync();

export function limpiarPantalla() {
  process.stdout.write("\x1Bc");
}

export function opcion1() {
  limpiarPantalla();
  let opcion = menu.menuVerTareas();
  switch (opcion) {
    case 1:
      limpiarPantalla();
      Lista.mostrarTodasTareas();
      break;
    case 2:
      limpiarPantalla();
      console.log("Estas son tus tareas pendientes:");
      Lista.verTareasPorEstado("P");
      break;
    case 3:
      limpiarPantalla();
      console.log("Estas son tus tareas en proceso:");
      Lista.verTareasPorEstado("EC");
      break;

    case 4:
      limpiarPantalla();
      console.log("Estas son tus tareas terminadas:");
      Lista.verTareasPorEstado("T");
      break;

    default:
      console.log("Opción no válida.");
  }
}

export function opcion3() {
  let menuAgregar = -1;
  let tareaNueva = Object.create(tarea);
  do {
    limpiarPantalla();
    menuAgregar = menu.menuAgregarTarea(
      tareaNueva.titulo,
      tareaNueva.descripcion,
      tareaNueva.estado,
      tareaNueva.dificultad,
      tareaNueva.vencimiento
    );
    limpiarPantalla();
    switch (menuAgregar) {
      case 1:
        tareaNueva.titulo = tarea.ingresarTitulo();
        break;
      case 2:
        tareaNueva.descripcion = tarea.ingresarDescripcion();

        break;
      case 3:
        tareaNueva.estado = tarea.ingresarEstado();
        break;
      case 4:
        tareaNueva.dificultad = tarea.ingresarDificultad();
        break;
      case 5:
        tareaNueva.vencimiento = tarea.ingresarFechadeVencimiento();
        break;
      case 0:
        if (tareaNueva.titulo === "Sin título") {
          menuAgregar = -1;
          console.log("No se puede agregar la tarea sin título.");
          Esperarscanf();
        } else {
          Lista.ListadeTareas.push(tareaNueva);
          Lista.ordenarTareas(); // Ordenar tareas si es necesario
          console.log("¡Tarea creada con éxito!");
          Esperarscanf();
        }
        break;
      default:
        console.log("Opción inválida.");
        Esperarscanf();
        break;
    }
  } while (menuAgregar != "0");
}

export function Esperarscanf() {
  scanf("Presione una tecla para seguir...");
}

export function opcion2() {
  console.log("Introduzca una palabra o frase para buscar tareas: ");
  let cadenaBusqueda = scanf();

  if (cadenaBusqueda.trim() === "") {
    console.log("La búsqueda no puede estar vacía. Inténtelo nuevamente.");
    return;
  }

  buscarTarea(cadenaBusqueda);
}

export function buscarTarea(cadena) {
  let resultados = Lista.ListadeTareas.filter((tarea) =>
    tarea.titulo.toLowerCase().includes(cadena.toLowerCase())
  );

  if (resultados.length === 0) {
    console.log("No hay tareas relacionadas con la búsqueda.");
    Esperarscanf();
  } else {
    mostrarCoincidencias(resultados);
  }
}

export function mostrarCoincidencias(resultados) {
  limpiarPantalla();
  console.log("Tareas encontradas:");
  resultados.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });

  gestionarResultados(resultados);
}

export function gestionarResultados(resultados) {
  console.log("\n¿Qué deseas hacer?");
  console.log("[1] Ver detalles de la tarea");
  console.log("[0] Volver al menú principal");

  let opcion = parseInt(scanf());
  switch (opcion) {
    case 1:
      console.log("Ingrese el número de la tarea para ver los detalles: ");
      let indice = parseInt(scanf()) - 1;

      if (indice >= 0 && indice < resultados.length) {
        mostrarDetallesTarea(resultados[indice]);
      } else {
        console.log("Número inválido. Inténtelo nuevamente.");
        gestionarResultados(resultados);
      }
      break;
    case 0:
      console.log("Volviendo al menú principal...");
      break;
    default:
      console.log("Opción no válida.");
      gestionarResultados(resultados);
  }
}

export function editarTarea(ver) {
  console.log("Si deseas editarla presiona E, o presiona 0 para volver.");
  let editar = scanf().toUpperCase();

  if (editar === "E") {
    let opcionEditar;
    do {
      console.log("¿Qué atributo deseas editar?");
      console.log(
        "[1] Título\n[2] Descripción\n[3] Estado\n[4] Dificultad\n[5] Fecha de vencimiento\n[0] Volver"
      );
      opcionEditar = parseInt(scanf("Ingresa una opción: "));

      while (isNaN(opcionEditar) || opcionEditar < 0 || opcionEditar > 5) {
        opcionEditar = parseInt(
          scanf("Opción inválida. Ingresa una opción válida: ")
        );
      }

      switch (opcionEditar) {
        case 1:
          Lista.ListadeTareas[ver - 1].titulo = tarea.ingresarTitulo();
          console.log("El titulo se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 2:
          Lista.ListadeTareas[ver - 1].descripcion =
            tarea.ingresarDescripcion();
          console.log("La descripcion se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 3:
          Lista.ListadeTareas[ver - 1].estado = tarea.ingresarEstado();
          console.log("El estado se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 4:
          Lista.ListadeTareas[ver - 1].dificultad = tarea.ingresarDificultad();
          console.log("La dificultad se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 5:
          Lista.ListadeTareas[ver - 1].vencimiento =
            tarea.ingresarFechadeVencimiento();
          console.log("La fecha de vencimiento se cambio con exito");
          Esperarscanf();
          limpiarPantalla();
          break;
        case 0:
          console.log("Saliendo del editor...");
          break;
        default:
          console.log("Opción no válida.");
          break;
      }
    } while (opcionEditar !== 0);
  }
}
