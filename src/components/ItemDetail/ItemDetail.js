import React, { useState } from "react";

// LIBRERIAS
import "./ItemDetail.css";
import { Tab, Button, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

// COMPONENTES
import { ItemCount } from "../ItemCount/ItemCount";
import ItemOptions from "../ItemOptions/ItemOptions";

// ASSETS
import img1 from "../../assets/itemExample1.jpg";
import img2 from "../../assets/itemExample2.jpg";

export const ItemDetail = ({ data }) => {
  // Estado y eventos de cantidad de items
  const [itemNumber, setItemNumber] = React.useState(0);

  const onAdd = () => {
    setItemNumber(itemNumber + 1);
  };
  const onSubstract = () => {
    if (itemNumber >= 1) {
      setItemNumber(itemNumber - 1);
    }
  };
  // Imagen fija del item (la api que uso no tiene imagenes asique improvise)
  const [imgExample, setImgExample] = useState(true);

  const handleThumbnail = () => {
    setImgExample(!imgExample);
  };
  // Evento Terminar compra
  const [addItemsToCart, setAddItemsToCart] = useState(false);

  const onAddItems = () => {
    setAddItemsToCart(true);
  };

  // Paneles de informacion
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
  // RENDER
  return (
    <div className="itemDetail">
      <Image
        floated="right"
        size="small"
        src={imgExample ? img1 : img2}
        onMouseEnter={handleThumbnail}
        onMouseLeave={handleThumbnail}
      />
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      <ItemCount add={onAdd} substract={onSubstract} quantity={itemNumber} />
      <ItemOptions />
      {addItemsToCart && <h3>Se agregaron {itemNumber} unidades al carrito</h3>}
      <div className="itemDetailButtons">
        <Link to="/tienda">
          <Button animated size="tiny" color="red">
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Link>
        <Button animated size="tiny" color="blue" onClick={onAddItems}>
          <Button.Content visible>Agregar</Button.Content>
          <Button.Content hidden>
            <Icon name="plus" />
          </Button.Content>
        </Button>
        {addItemsToCart && (
          <Link to="/cart">
            <Button animated size="tiny" color="orange">
              <Button.Content visible>Terminar</Button.Content>
              <Button.Content hidden>
                <Icon name="cart" />
              </Button.Content>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
