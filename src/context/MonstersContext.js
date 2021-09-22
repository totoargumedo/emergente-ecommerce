import React, { useState, useEffect, createContext } from "react";

// LIBRERIAS
import { collection, getDocs } from "@firebase/firestore";
import db from "../firebase/firebaseConfig";

// Se crea context para monsters en firestore
export const MonstersContext = createContext();

const MonstersProvider = (children) => {
  // datos desde la coleccion monsters de firestore

  const [monsters, setMonsters] = useState([]);

  console.log(monsters);

  useEffect(() => {
    // consumir base de datos de firestore
    const getDataFromFirebase = async () => {
      // se especifica coleccion y se llama a db desde el modulo de configuracion que creamos
      const datosMonsters = await getDocs(collection(db, "monsters"));
      // creamos array temporal para recibir los objetos
      const Temp = [];
      // for each para recorrer los objetos del array recibido
      datosMonsters.forEach((monster) => {
        // los pusheamos dentro del array temporal
        Temp.push({ ...monster.data(), id: monster.id });
      });
      setMonsters(Temp);
    };
    getDataFromFirebase();
  }, []);

  return (
    <MonstersContext.Provider value={{ monsters, setMonsters }}>
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersProvider;
