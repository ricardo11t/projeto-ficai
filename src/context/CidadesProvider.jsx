import React, { createContext, useEffect, useState } from 'react'

export const CidadesContext = createContext();

const CidadesProvider = ({ children }) => {
  const [cidades, setCidades] = useState([]);
  const URL = "http://localhost:3000/cidades";

const getCities = async () => {
  try {
    const res = await fetch(URL);
    const dados = await res.json();
    setCidades(dados);
  } catch (err) {
    console.error("Erro ao buscar as cidades:", err);
  }
};

  useEffect(() => {
    getCities();
  } ,[]);

  return (
    <CidadesContext.Provider value={{cidades}}>
      {children}
    </CidadesContext.Provider>
  )
}

export default CidadesProvider