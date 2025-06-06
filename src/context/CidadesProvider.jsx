import React, { createContext, useEffect, useState } from 'react'

export const CidadesContext = createContext();

const CidadesProvider = ({ children }) => {
  const [cidades, setCidades] = useState([]);
  const URL = "http://localhost:3000/cidades";

  const cidadesPesquisar = 
    Object.keys(cidades).map((cidade) => {
      return {label: `${cidade}` }
    });
  

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
    <CidadesContext.Provider value={{cidades, cidadesPesquisar}}>
      {children}
    </CidadesContext.Provider>
  )
}

export default CidadesProvider;