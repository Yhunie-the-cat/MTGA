import React, { useState, createContext } from "react";

export const CardsContext = createContext();
export const CardsProvider = (props) => {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={[cards, setCards]}>
      {props.children}
    </CardsContext.Provider>
  );
};

export const ColorFilterContext = createContext();
export const ColorFilterProvider = (props) => {
  const [colorFilter, setColorFilter] = useState([]);

  return (
    <ColorFilterContext.Provider value={[colorFilter, setColorFilter]}>
      {props.children}
    </ColorFilterContext.Provider>
  );
};

export const TypeFilterContext = createContext();
export const TypeFilterProvider = (props) => {
  const [typeFilter, setTypeFilter] = useState("");

  return (
    <TypeFilterContext.Provider value={[typeFilter, setTypeFilter]}>
      {props.children}
    </TypeFilterContext.Provider>
  );
};

export const RarityFilterContext = createContext();
export const RarityFilterProvider = (props) => {
  const [rarityFilter, setRarityFilter] = useState("");

  return (
    <RarityFilterContext.Provider value={[rarityFilter, setRarityFilter]}>
      {props.children}
    </RarityFilterContext.Provider>
  );
};

export const TestFilterContext = createContext();
export const TestFilterProvider = (props) => {
  const [testFilter, setTestFilter] = useState([]);

  return (
    <TestFilterContext.Provider value={[testFilter, setTestFilter]}>
      {props.children}
    </TestFilterContext.Provider>
  );
};
