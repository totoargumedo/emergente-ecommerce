import React, { useState } from "react";

// LIBRERIAS
import "./ItemSearch.css";
import { Input } from "semantic-ui-react";
import axios from "axios";

const ItemSearch = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [searchData, setSearchData] = useState({});

  console.log(searchData);
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
    console.log("se guardo", searchInputValue);
  };

  return (
    <div>
      <form onSubmit={submitSearchValue}>
        <Input
          icon="search"
          placeholder="Find Monster"
          onChange={onChangeSearchValue}
        />
      </form>
    </div>
  );
};

export default ItemSearch;
