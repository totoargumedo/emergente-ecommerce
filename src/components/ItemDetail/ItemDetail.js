import React from "react";

// LIBRERIAS
import "./ItemDetail.css";
import { Tab, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// COMPONENTES
import { ItemCount } from "../ItemCount/ItemCount";
import ItemOptions from "../ItemOptions/ItemOptions";

export const ItemDetail = ({ data }) => {
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
        <Tab.Pane className="monsterScores" attached={false}>
          {data.proficiencies.map((proficiencie) => {
            return proficiencie.proficiency.name + " | ";
          })}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Pasivos",
      render: () => (
        <Tab.Pane className="monsterScores" attached={false}>
          {data.special_abilities.map((ability) => {
            return ability.name + " | ";
          })}
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div className="itemDetail">
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      <ItemCount />
      <ItemOptions />
      <Link to="/tienda">
        <Button animated size="tiny" color="red">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
};
