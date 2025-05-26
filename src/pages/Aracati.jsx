import React from 'react'
import '../assets/styles/Aracati.css'
import Header from '../components/Header';
import Footer from '../components/Footer'

 const Aracati = () => {
    const pontosTuristicos = [
       {
            img: 'https://www.viajali.com.br/wp-content/uploads/2020/12/aracati-7.jpg',
            title: 'Praia Da Quixaba',
            text: 'Praia desértica a 18km do centro de Aracati, lugar agradável com pousadas por perto e ideal para quem está com crianças.'
        },
        {
            img: 'https://www.viajali.com.br/wp-content/uploads/2020/12/aracati-9.jpg',
            title: 'Retirinho',
            text: 'Praia ideal para assistir o crepúsculo e um ótimo local para tirar fotos e ganhar lembranças.'
        },
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/ab/84/4e/praia-majorlandia.jpg?w=600&h=400&s=1',
            title: 'Praia de Majorlândia',
            text: 'Point indispensável para quem gosta do tradicional carnaval da cidade, evento muito popular no estado.'
        },
        {
            img: 'https://sinalnews.com.br/wp-content/uploads/2024/01/IMG_2269-scaled-1-1536x1024.jpg',
            title: 'Rua Grande - Centro Histórico do Aracati',
            text: 'Centro cultural da cidade com elementos históricos e que retratam a jornada do município desde o começo.'
        },
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/44/af/23/photo0jpg.jpg?w=600&h=400&s=1',
            title: 'Broadway',
            text: 'Rua repleta de lojas locais, nas quais vendem artigos que representam a cultura do estado e muito aconchegante para os visitantes. '
        }
    ];


   const dicasViagem = [
        <>A melhor época para visitar é de <strong>junho a janeiro</strong>, quando há menos chuvas.</>,
        <>Experimente pratos típicos como {' '}
            <span className="comida-destaque">Moqueca de Siri</span>,{' '}
            <span className="comida-destaque">Arroz de Camarão</span>,{' '}
            <span className="comida-destaque">Farofa de Siri</span> e{' '}
            <span className="comida-destaque">Pirão de Peixe</span>.
        </>,
        <>Visite a <strong>Broadway de Canoa Quebrada</strong> para comprar artesanato local.</>,
        'Use protetor solar, mesmo em dias nublados, pois o sol é forte durante todo o ano.',
        <>Para conhecer as praias mais distantes, considere {' '}
            <strong>alugar um carro</strong> ou <strong>contratar um passeio guiado</strong>.
        </>
    ];

  return (
    <>
    <Header />


    <div className='container-aracati'>
            <div className="sobre-container">
                <div className="image-container">
                    <img
                        src="https://turismo.b-cdn.net/wp-content/uploads/2015/08/Canoa-Quebrada-no-Cear%C3%A1.jpg"
                        alt="Materiais AudioVisuais mostrando Aracati e seus pontos turísticos"
                        className="main-header-image"
                        loading="lazy"
                    />
                </div>

                 <section className='sobre-aracati'>
                    <h2 className='title'>
                        Sobre Aracati
                        <span className="orange-line"></span>
                    </h2>
                    <p>
                       Aracati é um município localizado no litoral leste do estado do ceará, 
                       fica a cerca de 150km da capital, Fortaleza.
                       As principais fontes de renda da cidade é o turismo, acompanhado da pesca,
                       comércio e agricultura. O aeroporto da cidade permite melhor logística dos
                       turistas que desejam conhecer o local.
                    </p>
                </section>

                 </div>
            <h2 className='title'>Pontos Turísticos</h2>

            <div className="pontos-turisticos-grid">
                {pontosTuristicos.map((ponto) => (
                    <article className="ponto-turistico-card" key={ponto.title}>
                        <img
                            src={ponto.img}
                            alt={`${ponto.title} - Aracati`}
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
                    Aracati possui um aeroporto regional (Aeroporto Regional de Canoa Quebrada Dragão do Mar) que recebe voos de lugares próximos a cidade, a rota é reduzida por ser um aeroporto regional.
                </p>
                <ul>
                    <li>Pegar um táxi</li>
                    <li>Usar aplicativos de transporte</li>
                </ul>
                <p>
                    A cidade também é acessível por rodovias, sendo a principal, a BR-304, que conecta a cidade de Fortaleza até o estado do Rio Grande do Norte
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
    
};

export default Aracati;

