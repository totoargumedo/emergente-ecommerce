import React, { useState, useEffect, createContext } from "react";

// API Firestore
import db from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

// creo contexto para Datos de Item - Monster
export const MonstersContext = createContext();

// componente Provider para Monsters

const MonstersProvider = ({ children }) => {
  // estado para monsters
  const [monsters, setMonsters] = useState([]);

  //   Pedido de listado a API en firebase
  const getMonsters = async () => {
    const monstersList = await getDocs(collection(db, "monsters"));
    let monsterTempo = [];

    monstersList.forEach((monster) => {
      monsterTempo = [...monsterTempo, monster.data()];
    });
    setMonsters(monsterTempo);
  };

  const getSpecificMonster = (monsterForDetail) => {
    let specificMonster = monsters.filter(
      (monster) => monster.index === monsterForDetail
    );
    return specificMonster[0];
  };
  useEffect(() => {
    getMonsters();
  }, []);
  // componente provider
  return (
    <MonstersContext.Provider value={{ monsters, getSpecificMonster }}>
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersProvider;
