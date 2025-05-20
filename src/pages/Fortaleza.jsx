import React from 'react'
import '../assets/styles/Fortaleza.css';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Fortaleza = () => {
    const pontosTuristicos = [
        {
            img: 'src/img/praia-iracema.jpg',
            title: 'Praia de Iracema',
            text: 'Praia urbana com calçadão, bares e restaurantes. Ponto de encontro para assistir ao pôr do sol.'
        },
        {
            img: 'src/img/mercado-central.jpg',
            title: 'Mercado Central',
            text: 'Mercado tradicional com artesanato local, roupas, souvenirs e comidas típicas do Ceará.'
        },
        {
            img: 'src/img/catedral.jpg',
            title: 'Catedral Metropolitana',
            text: 'Imponente catedral em estilo gótico, uma das maiores do Brasil.'
        },
        {
            img: 'src/img/dragão-do-mar.jpg',
            title: 'Dragão do Mar',
            text: 'Centro cultural com museus, cinema, teatro e espaços para eventos.'
        },
        {
            img: 'src/img/praia-do-futuro.jpg',
            title: 'Praia do Futuro',
            text: 'Extensa praia com barracas que servem frutos do mar e outras especialidades locais.'
        }
    ];

    const dicasViagem = [
        <>A melhor época para visitar é de <strong>junho a janeiro</strong>, quando há menos chuvas.</>,
        <>Experimente pratos típicos como {' '}
            <span className="comida-destaque">tapioca</span>,{' '}
            <span className="comida-destaque">baião de dois</span>,{' '}
            <span className="comida-destaque">caranguejo</span> e{' '}
            <span className="comida-destaque">peixadas</span>.
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
        <div className='container-fortaleza'>
            <div className="sobre-container">
                <div className="image-container">
                    <img
                        src="src/img/fortaleza.jpg"
                        alt="Vista aérea de Fortaleza mostrando praias e cidade"
                        className="main-header-image"
                        loading="lazy"
                    />
                </div>

                <section className='sobre-fortal'>
                    <h2 className='title'>
                        Sobre Fortaleza
                        <span className="orange-line"></span>
                    </h2>
                    <p>
                        Fortaleza é a capital do estado do Ceará, conhecida por suas belas praias urbanas,
                        rica cultura e gastronomia deliciosa. Com mais de 2,6 milhões de habitantes, é uma
                        das maiores cidades do Nordeste brasileiro. A cidade oferece uma combinação perfeita
                        de belezas naturais, vida urbana agitada e patrimônio histórico. Seus 34 km de praias
                        urbanas, como Iracema, Meireles e Praia do Futuro, são os principais atrativos turísticos.
                        Além das praias, Fortaleza é famosa por sua vida noturna animada, artesanato local
                        (especialmente rendas e bordados), e pela hospitalidade calorosa de seu povo.
                    </p>
                </section>
            </div>
            <h2 className='title'>Pontos Turísticos</h2>

            <div className="pontos-turisticos-grid">
                {pontosTuristicos.map((ponto) => (
                    <article className="ponto-turistico-card" key={ponto.title}>
                        <img
                            src={ponto.img}
                            alt={`${ponto.title} - Fortaleza`}
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
                    Fortaleza possui um aeroporto internacional (Aeroporto Internacional Pinto Martins) que recebe voos de diversas cidades brasileiras e alguns destinos internacionais. Do aeroporto ao centro da cidade, você pode:
                </p>
                <ul>
                    <li>Pegar um táxi</li>
                    <li>Usar aplicativos de transporte</li>
                    <li>Utilizar o transporte público</li>
                </ul>
                <p>
                    A cidade também é acessível por rodovias, sendo as principais a BR-116 e a BR-222, que conectam Fortaleza a outras cidades do Nordeste.
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

export default Fortaleza;