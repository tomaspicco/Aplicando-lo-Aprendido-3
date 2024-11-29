import {
    scanf,
    Esperarscanf,
    editarTarea,
    limpiarPantalla,
  } from "./Funciones.js"; 
  import { menu } from "./Menúes.js"; 
  import { tarea } from "./Tarea.js";
  export const Lista = {
    ListadeTareas: [],
  
    // Función para ver detalles de todas las tareas
    verdetallesTodas: function () {
      console.log("¿Deseas ver los detalles de alguna?");
      console.log("Introduce el número para verla o 0 para volver");
      let ver = parseInt(scanf());
      while (true) {
        if (ver === 0) {
          console.log("Volviendo al Menú anterior...");
          menu.menuPrincipal(); 
          return;
        } else if (ver > 0 && ver <= this.ListadeTareas.length) {
          console.log(`Título: ${this.ListadeTareas[ver - 1].titulo}`);
          console.log(`Descripción: ${this.ListadeTareas[ver - 1].descripcion}`);
          console.log(`Estado: ${this.ListadeTareas[ver - 1].estado}`);
          console.log(
            `Fecha de Creación: ${this.ListadeTareas[ver - 1].fechaDeCreacion}`
          );
          console.log(`Vencimiento: ${this.ListadeTareas[ver - 1].vencimiento}`);
          console.log(`Dificultad: ${this.ListadeTareas[ver - 1].dificultad}`);
          console.log("------------------------");
          editarTarea(ver); 
          return;
        } else {
          limpiarPantalla(); 
          console.log("El número de tarea que indicó es incorrecto");
          for (let i = 0; i < this.ListadeTareas.length; i++) {
            console.log(`[${i + 1}]: ${this.ListadeTareas[i].titulo}`);
          }
          console.log("Introduce el número para verla o 0 para volver");
          ver = parseInt(scanf());
        }
      }
    },
  
    // Función para mostrar todas las tareas
    mostrarTodasTareas: function () {
      if (this.ListadeTareas.length === 0) {
        console.log("No hay tareas para mostrar.");
        Esperarscanf(); 
        menu.menuPrincipal(); // Llama a la función para volver al menú principal
        return; // Salir de la función
      }
      console.log("Estas son todas tus tareas:");
      for (let i = 0; i < this.ListadeTareas.length; i++) {
        console.log(`[${i + 1}]: ${this.ListadeTareas[i].titulo}`);
      }
      this.verdetallesTodas(); // Llama a la función para ver detalles de todas las tareas
    },
  
    // Función para ordenar las tareas por título
    ordenarTareas: function () {
      let tareaTemp = Object.create(tarea); 
      for (let i = 0; i < this.ListadeTareas.length; i++) {
        for (let j = 0; j < this.ListadeTareas.length - 1; j++) {
          if (this.ListadeTareas[j].titulo > this.ListadeTareas[j + 1].titulo) {
            tareaTemp = this.ListadeTareas[j];
            this.ListadeTareas[j] = this.ListadeTareas[j + 1];
            this.ListadeTareas[j + 1] = tareaTemp;
          }
        }
      }
    },
  
    // Función para ver los detalles de las tareas por estado
    verdetalles: function (estado) {
      console.log("¿Deseas ver los detalles de alguna?");
      console.log("Introduce el número para verla o 0 para volver");
      let ver = parseInt(scanf());
      while (true) {
        if (ver === 0) {
          console.log("Volviendo al Menú anterior...");
          menu.menuPrincipal();
          return; // Salir de la función para volver al menú
        } else if (
          ver > 0 &&
          ver <= this.ListadeTareas.length &&
          this.ListadeTareas[ver - 1].estado === estado
        ) {
          console.log(`Título: ${this.ListadeTareas[ver - 1].titulo}`);
          console.log(`Descripción: ${this.ListadeTareas[ver - 1].descripcion}`);
          console.log(`Estado: ${this.ListadeTareas[ver - 1].estado}`);
          console.log(
            `Fecha de Creación: ${this.ListadeTareas[ver - 1].fechaDeCreacion}`
          );
          console.log(`Vencimiento: ${this.ListadeTareas[ver - 1].vencimiento}`);
          console.log(`Dificultad: ${this.ListadeTareas[ver - 1].dificultad}`);
          console.log("------------------------");
          editarTarea(ver);
          return; // Salir de la función después de editar la tarea
        } else {
          limpiarPantalla();
          console.log("El número de tarea que indicó es incorrecto");
          for (let i = 0; i < this.ListadeTareas.length; i++) {
            if (this.ListadeTareas[i].estado === estado) {
              console.log(`[${i + 1}]: ${this.ListadeTareas[i].titulo}`);
            }
          }
          console.log("Introduce el número para verla o 0 para volver");
          ver = parseInt(scanf());
        }
      }
    },
  
    // Función para ver tareas por estado
    verTareasPorEstado: function (estado) {
      let contador = 0;
      for (let i = 0; i < this.ListadeTareas.length; i++) {
        if (this.ListadeTareas[i].estado === estado) {
          contador++;
          console.log(`[${i + 1}]: ${this.ListadeTareas[i].titulo}`);
        }
      }
      if (contador > 0) {
        this.verdetalles(estado);
      } else {
        console.log("No hay tareas para mostrar.");
        Esperarscanf();
        menu.menuPrincipal(); // Llama a la función para volver al menú principal
      }
      return contador;
    },
  }; // LLAVE QUE CIERRA EL OBJETO
  