import React from 'react'
import '../assets/styles/Jericoacoara.css';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Jericoacoara = () => {
  const pontosTuristicos = [
    {
      img: 'src/img/LagoaAzul.jpg',
      title: 'Lagoa Azul',
      text: 'é uma atração natural no Ceará, mais especificamente em Jijoca de Jericoacoara, conhecida por suas águas cristalinas e tons azuis e verdes.'
    },
    {
      img: 'src/img/PraiaDeJericoacoara.jpg',
      title: 'Praia de Jericoacoara',
      text: 'Ideal para kitesurf, windsurf e banho de mar, Ponto de partida para vários passeios de buggy.'
    },
    {
      img: 'src/img/BuracoAzul.jpg',
      title: 'Buraco Azul Caiçara',
      text: 'Lagoa artificial formada por águas de chuva em uma antiga escavação com Cor turquesa impressionante.'
    },
    {
      img: 'src/img/LagoaJeri.jpg',
      title: 'Lagoa do Amâncio',
      text: 'É uma lagoa sazonal, ou seja, ela existe principalmente na época das chuvas'
    },
    {
      img: 'src/img/VilaDeJericoacoara.jpg',
      title: 'Vila De Jericoacoara',
      text: 'Charmosa, com ruas de areia e clima rústico-chique, Cheia de bares, restaurantes e lojinhas.'
    }
  ];

  const dicasViagem = [
    <>A melhor época para visitar é de <strong>agosto a novembro</strong>, quando o clima está seco, céu limpo e vento bom.</>,
    <>Alta temporada:<strong>Julho, dezembro, feriados</strong>, mais caro e cheio</>,
    <>Quadra Chuvosa:<strong>Jfevereiro a maio</strong>,tudo fica mais verde e a Lagoa do Amâncio cheia!</>,
    <>Jeri é cheia de experiências únicas aqui estão as melhores coisas para fazer em Jeri:{' '}
      <span className="fazer-em-jeri">Assistir ao pôr do sol da Duna do Pôr do Sol</span>,{' '}
      <span className="fazer-em-jeri">Aula de kitesurf ou windsurf</span>,{' '}
      <span className="fazer-em-jeri">Explorar o centrinho de Jeri</span> e{' '}
      <span className="fazer-em-jeri">Provar comidas típicas nordestinas em barraquinhas locais.</span>.
    </>,
    <>Visite a <strong>feirinha da Beira Mar</strong> para comprar artesanato local.</>,
    'Use protetor solar, mesmo em dias nublados, pois o sol é forte durante todo o ano.',
    <>Para conhecer as praias mais distantes, considere {' '}
      <strong>alugar um carro</strong> ou <strong>contratar um passeio guiado</strong>.
    </>
  ];
  return (
    <>
      <Header />
      <div className='container-Jericoacoara'>
        <div className="sobre-container">
          <div className="image-container">
            <img
              src="src/img/Jericoacoara.png"
              alt="Vista aérea de Jericoacoara mostrando praias e cidade"
              className="main-header-image"
              loading="lazy"
            />
          </div>

          <section className='sobre-Jericoacoara'>
            <h2 className='title'>
              Sobre Jericoacoara:
              <span className="orange-line"></span>
            </h2>
            <p>
              Jericoacoara é uma vila de pescadores que virou um dos destinos turísticos mais cobiçados do Brasil e do mundo.
              Localizada no noroeste do Ceará, a cerca de 300 km de Fortaleza, ela está inserida no Parque Nacional de Jericoacoara,
              uma área de proteção ambiental com dunas, lagoas de água doce e praias incríveis.
            </p>
          </section>
        </div>
        <h2 className='title'>Pontos Turísticos</h2>

        <div className="pontos-turisticos-grid">
          {pontosTuristicos.map((ponto) => (
            <article className="ponto-turistico-card" key={ponto.title}>
              <img
                src={ponto.img}
                alt={`${ponto.title} - Jericoacoara`}
                className="card-image"
                loading="lazy"
              />
              <div className="card-content">
                <h3>{ponto.title}</h3>
                <p>{ponto.text}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="como-chegar-section">
          <h2>Como Chegar</h2>
          <p>
            Partindo de Fortaleza-Aeroporto Pinto Martins - FOR
          </p>
          <ul>
            <li>Fortaleza está a cerca de 300 km de Jericoacoara. As opções de transporte incluem:</li>
            <li>Transfer compartilhado</li>
            <li>Ônibus + jardineira:</li>
            <li>Carro alugado</li>
          </ul>
          <p>
            Veículos comuns não são permitidos na vila. É necessário deixar o carro em estacionamentos em Jijoca e seguir com jardineira ou transfer 4x4.
          </p>
        </section>

        <section className="dicas-viagem">
          <h2>Dicas de Viagem</h2>
          <ol>
            {dicasViagem.map((dica, index) => (
              <li key={index}>{dica}</li>
            ))}
          </ol>
        </section>
      </div>
      <Footer />
    </>
  );

}

export default Jericoacoara