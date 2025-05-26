import React from 'react'
import CardsComFilters from '../components/CardsComFilters'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainCidades from '../components/MainCidades'

const Cidades = () => {
  return (
    <>  
    <Header />
        <main>
            <MainCidades />
        </main>
    <Footer />
    </>
  )
}

export default Cidades