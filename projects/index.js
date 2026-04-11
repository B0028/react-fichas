import { lazy } from "react";

{/* PRÁCTICO */}
const Ficha00 = lazy(() => import("./DesarrolloPractico/Ficha-00/Ficha-00"));
const Ficha01 = lazy(() => import("./DesarrolloPractico/Ficha-01/Ficha-01"));
{/* TEORICO */}
const Ejercicio01 = lazy(() => import("./DesarrolloTeorico/Ejercicio-01/Ejercicio-01"));
const Ejercicio02 = lazy(() => import("./DesarrolloTeorico/Ejercicio-02/Ejercicio-02"));

export const projects = {

  // PRÁCTICO
  practico: [
    {
      id: "f00",
      name: "Ficha 00",
      path: "ficha-00",
      component: Ficha00
    },
    {
      id: "f01",
      name: "Ficha 01",
      path: "ficha-01",
      component: Ficha01
    },
  ],
  
  // TEORICO
  teorico: [
    {
      id: "e01",
      title: "Ejercicio 01",
      path: "ejercicio01",
      component: Ejercicio01,
    },
    {
      id: "e02",
      title: "Ejercicio 02",
      path: "ejercicio02",
      component: Ejercicio02,
    },
  ],
};