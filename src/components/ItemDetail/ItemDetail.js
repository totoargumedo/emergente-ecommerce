import React from "react";

// LIBRERIAS
import "./ItemDetail.css";
import { Tab } from "semantic-ui-react";

export const ItemDetail = ({ data }) => {
  console.log(data);
  const panes = [
    {
      menuItem: "Puntajes",
      render: () => (
        <Tab.Pane className="monsterScores" attached={false}>
          Fuerza: {data.strength} <br />
          Constitucion: {data.constitution} <br />
          Destreza: {data.dexterity}
          <br />
          Inteligencia: {data.intelligence}
          <br />
          Sabiduria: {data.wisdom}
          <br />
          Carisma: {data.charisma}
          <br />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Comp",
      render: () => (
        <Tab.Pane attached={false}>
          {data.proficiencies.map((proficiencie) => {
            return proficiencie.proficiency.name + " | ";
          })}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Pasivos",
      render: () => (
        <Tab.Pane attached={false}>
          {data.special_abilities.map((ability) => {
            return ability.name + " | ";
          })}
        </Tab.Pane>
      ),
    },
  ];
  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};
