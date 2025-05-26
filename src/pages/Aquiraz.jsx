import React from 'react';
import '../assets/styles/Aquiraz.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Aquiraz = () => {
    const pontosTuristicos = [
        {
            img: 'src/img/beachpark.png',
            title: 'Beach Park',
            text: 'Um dos maiores parques aquáticos da América Latina, localizado à beira-mar em Porto das Dunas.'
        },
        {
            img: 'src/img/museu-Aquiraz.jpg',
            title: 'Museu Centro hístorico',
            text: 'localizado no Centro Histórico de Aquiraz, abriga um valioso acervo de arte sacra dos séculos XVIII e XIX em um antigo casarão colonial. É um importante espaço de preservação da história religiosa e cultural do Ceará.'
        },
        {
            img: 'src/img/engenho.jpg',
            title: 'Engenho São Luiz',
            text: 'Engenho tradicional com produção de rapadura e melado, aberto à visitação.'
        },
        {
            img: 'src/img/praiabatoque.jpg',
            title: 'Praia do Batoque',
            text: 'Praia tranquila e preservada, ideal para quem busca contato com a natureza.'
        },
        {
            img: 'src/img/praiapresidio.jpg',
            title: 'Praia do Presídio',
            text: 'Praia de águas calmas, coqueiros e barracas simples, frequentada por moradores locais.'
        }
    ];

    const dicasViagem = [
        <>A melhor época para visitar Aquiraz é durante a <strong>estação seca</strong>, de <strong>julho a dezembro</strong>.</>,
        <>Leve roupas leves, protetor solar e <span className="comida-destaque">repelente</span> se for visitar áreas de mata ou engenhos.</>,
        <>Não deixe de experimentar <span className="comida-destaque">rapadura artesanal</span> e <span className="comida-destaque">frutos do mar frescos</span>.</>,
        <>Para visitar o Beach Park, <strong>compre ingressos com antecedência</strong> em alta temporada.</>,
        <>Você pode combinar o passeio com uma visita a Fortaleza, que fica a cerca de <strong>30 km</strong> de distância.</>
    ];

    return (
        <>
            <Header />
            <div className='container-aquiraz'>
                <div className="sobre-container">
                    <div className="image-container">
                        <img
                            src="src/img/aquiraz.jpg"
                            alt="Vista aérea de Aquiraz com praias e vegetação"
                            className="main-header-image"
                            loading="lazy"
                        />
                    </div>

                    <section className='sobre-aquiraz'>
                        <h2 className='title'>
                            Sobre Aquiraz
                            <span className="orange-line"></span>
                        </h2>
                        <p>
                            Aquiraz é uma charmosa cidade do litoral cearense, conhecida por suas praias paradisíacas,
                            história rica e atrações turísticas como o famoso Beach Park. Foi a primeira capital do Ceará
                            e ainda preserva parte de sua arquitetura colonial. A cidade combina belezas naturais com
                            tradições culturais e é um ótimo destino tanto para famílias quanto para quem busca sossego.
                            É também um ponto de parada obrigatório para quem visita Fortaleza.
                        </p>
                    </section>
                </div>

                <h2 className='title'>Pontos Turísticos</h2>
                <div className="pontos-turisticos-grid">
                    {pontosTuristicos.map((ponto) => (
                        <article className="ponto-turistico-card" key={ponto.title}>
                            <img
                                src={ponto.img}
                                alt={`${ponto.title} - Aquiraz`}
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
                        Aquiraz está localizada a cerca de 30 km de Fortaleza. Para chegar lá, você pode:
                    </p>
                    <ul>
                        <li>Alugar um carro na capital e seguir pela CE-040</li>
                        <li>Usar transporte por aplicativo ou táxi</li>
                        <li>Pegar um ônibus intermunicipal na rodoviária de Fortaleza</li>
                    </ul>
                    <p>
                        A estrada é bem sinalizada e a viagem dura cerca de 40 minutos a 1 hora, dependendo do trânsito.
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

export default Aquiraz;
