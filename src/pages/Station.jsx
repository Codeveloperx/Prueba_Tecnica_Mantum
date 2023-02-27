import React, { useState } from "react";
import CardList from "../components/CardList";
import { useAxios } from "../hooks/useAxios";

const Station = () => {
  const { station, isLoading } = useAxios();
  const [search, setSearch] = useState();

  const searcher = ({target}) =>{
    setSearch(target.value)
  }

  // filter function
  let results = [];
  if(!search){
    results = station;
  }else{
    results = station.filter((elemento)=>
      elemento.name.toLowerCase().includes(search.toLowerCase()));
  }


  return (
    <div>
      <input
        className="form-control search"
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Busqueda..."
      />
      {isLoading && <h2 className="loading">Cargando...</h2>}
      <CardList stations={results} />
    </div>
  );
};

export default Station;
