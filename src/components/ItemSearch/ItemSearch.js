import React, { useState } from "react";

// LIBRERIAS
import "./ItemSearch.css";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

// COMPONENTES

const ItemSearch = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [searchData, setSearchData] = useState({});

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const submitSearchValue = (e) => {
    e.preventDefault();
    const searchInputValue = searchValue.toLowerCase().replace(/ /g, "-");
    if (searchInputValue) {
      axios(`https://www.dnd5eapi.co/api/monsters/${searchInputValue}`).then(
        (res) => setSearchData(res.data)
      );
      setSearchValue(``);
    }
  };

  return (
    <div>
      <form onSubmit={submitSearchValue}>
        <Input placeholder="Find Monster" onChange={onChangeSearchValue} />
        <Button icon="search"></Button>

        <Link to={`/monster/${searchData.index}`}>
          {/* <Item data={searchData} /> */}
        </Link>
      </form>
    </div>
  );
};

export default ItemSearch;
