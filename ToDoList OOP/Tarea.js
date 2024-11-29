import { limpiarPantalla, Esperarscanf, scanf } from "./Funciones.js";
export const tarea = Object.create(null);
tarea.titulo = "Sin título"; // Si no se proporciona un título, se asigna "Sin título"
tarea.descripcion = "Sin descripción"; // Valor predeterminado
tarea.estado = "Pendiente"; // Valor predeterminado
tarea.dificultad = "⭐"; // Valor predeterminado (una estrella)
tarea.vencimiento = "Ninguna"; // Valor predeterminado
tarea.fechaDeCreacion = new Date();
tarea.ultimaEdicion = new Date();

tarea.ingresarTitulo = function () {
  let titulo = scanf("1- Ingrese el título (es obligatorio): ");
  while (titulo === "") {
    titulo = scanf("El título no puede ser nulo, ingrese uno: ");
  }
  return titulo;
};

tarea.ingresarDescripcion = function () {
  let descripcion = scanf("2- Ingrese una descripcion: ");
  return descripcion || "Sin Descripcion";
};

tarea.ingresarEstado = function () {
  let estado = scanf(
    "3- Ingrese el estado que por defecto esta pendiente: [P]pendiente/ [EC]en curso/ [T]terminada/ [C] cancelada:"
  );
  estado = estado.toUpperCase();
  while (estado != "P" && estado != "EC" && estado != "T" && estado != "C") {
    console.log("Ingresó un estado no válido.Ingrese otro: ");
    estado = scanf();
    estado = estado.toUpperCase();
  }
  return estado;
};
tarea.mostrarDetallesTarea = function (tarea) {
  limpiarPantalla();
  console.log("\nDetalles de la tarea seleccionada:");
  console.log(`Título: ${tarea.titulo}`);
  console.log(`Descripcion: ${tarea.descripcion}`);
  console.log(`Estado: ${tarea.estado}`);
  console.log(`Fecha de Creación: ${tarea.fechaDeCreacion}`);
  console.log(`Vencimiento: ${tarea.vencimiento}`);
  console.log(`Dificultad: ${tarea.dificultad}`);
  console.log("------------------------");
  Esperarscanf();
};

tarea.ingresarDificultad = function () {
  let dificultad = scanf(
    "4- Ingrese la dificultad, por defecto fácil: [F]fácil(⭐)/[M]medio(⭐⭐)/[D]difícil(⭐⭐⭐): "
  );
  dificultad = dificultad.toUpperCase();
  while (dificultad != "F" && dificultad != "M" && dificultad != "D") {
    dificultad = scanf(
      "La dificultad ingresada es inválida, ingrese nuevamente: "
    );
    dificultad = dificultad.toUpperCase();
  }
  if (dificultad === "F") {
    dificultad = "⭐";
  } else if (dificultad === "M") {
    dificultad = "⭐⭐";
  } else if (dificultad === "D") {
    dificultad = "⭐⭐⭐";
  }
  return dificultad;
};

tarea.ingresarFechadeVencimiento = function () {
  let FechaActual = new Date();
  let fechaVencimiento = this.PedirFechadeVencimiento();
  while (fechaVencimiento <= FechaActual) {
    console.log("Fecha no válida. Ingrese nuevamente: ");
    fechaVencimiento = PedirFechadeVencimiento();
  }
  return fechaVencimiento;
};

tarea.PedirFechadeVencimiento = function () {
  let anno,
    mes,
    dia,
    band = -1,
    hora,
    fechaVencimiento;

  anno = scanf("Ingrese el año de vencimiento: ");
  anno = parseInt(anno);

  while (isNaN(anno) || anno < 1000 || anno > 9999) {
    anno = scanf(
      "El año de vencimiento ingresado no es válido. Ingrese otro: "
    );
    anno = parseInt(anno);
  }

  mes = scanf("Ingrese el mes de vencimiento entre el 1 y 12: ");
  mes = parseInt(mes);
  while (isNaN(mes) || mes < 1 || mes > 12) {
    mes = scanf(
      "Mes de vencimiento no válido, reingrese uno correcto del 1 al 12: "
    );
    mes = parseInt(mes);
  }

  do {
    if (band >= 0) {
      console.log("Ingresó un día no válido.");
    }
    switch (mes) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dia = scanf("Ingrese el día de vencimiento entre el 1 y 31: ");
        dia = parseInt(dia);
        if (dia < 1 || dia > 31) dia = NaN;
        break;
      case 2:
        if (AnnoBisiesto(anno)) {
          dia = scanf("Ingrese el día de vencimiento del 1 al 29: ");
          dia = parseInt(dia);
          if (dia < 1 || dia > 29) dia = NaN;
        } else {
          dia = scanf("Ingrese el día de vencimiento del 1 al 28: ");
          dia = parseInt(dia);
          if (dia < 1 || dia > 28) dia = NaN;
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        dia = scanf("Ingrese el día de vencimiento entre el 1 y 30: ");
        dia = parseInt(dia);
        if (dia < 1 || dia > 30) dia = NaN;
        break;
    }
    band++;
  } while (isNaN(dia));

  hora = scanf("Ingrese la hora de vencimiento entre las 0 y las 23: ");
  hora = parseInt(hora);
  while (isNaN(hora) || hora < 0 || hora > 23) {
    hora = scanf(
      "Hora de vencimiento no válida, ingrese una correcta entre 0 y 23: "
    );
    hora = parseInt(hora);
  }

  fechaVencimiento = new Date(anno, mes - 1, dia, hora);
  return fechaVencimiento.toLocaleDateString("es-ES");
};

tarea.AnnoBisiesto = function (anno) {
  return anno % 4 === 0 && anno % 100 !== 0; //un año es
  //bisiesto si es divisible entre 4 pero no entre 100
};
