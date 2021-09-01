import React, { useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import img1 from "../../assets/itemExample1.jpg";
import img2 from "../../assets/itemExample2.jpg";

// LIBRERIAS
import "./Item.css";

const Item = ({ data, url }) => {
  const [imgExample, setImgExample] = useState(true);

  const handleThumbnail = () => {
    setImgExample(!imgExample);
  };

  return (
    <Card className="Item">
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src={imgExample ? img1 : img2}
          onMouseEnter={handleThumbnail}
          onMouseLeave={handleThumbnail}
        />
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{data.index}</Card.Meta>
        <Card.Description>{data.url}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="orange">
            AGREGAR
          </Button>
          <Button basic color="green" on="">
            MAS INFO
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

Item.defaultProps = {
  data: {
    name: "Loading...",
    index: "Loading...",
  },
};

export default Item;
