import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/styles/Ubajara.css'; 



const Ubajara = () => {
     const pontosTuristicos = [

        {
            img: 'src/img/ubajara3.jpg',
            title: 'Parque Nacional de Ubajara',
            text: 'Área de preservação com trilhas, cachoeiras e rica biodiversidade.'
             
           
        },

        {
            img: 'src/img/ubajara1.1.jpg',
            title: 'Gruta de Ubajara',
            text: 'Uma das maiores grutas do Brasil, com formações rochosas impressionantes.'
           
        },

        {
            img: 'src/img/ubajara2.jpg',
            title: 'Cachoeira do Boi Morto',
            text: 'Cachoeira de fácil acesso, ideal para banho e piqueniques.'
        },

         {
            img: 'src/img/ubajara-4.webp',
            title: 'Cachoeira do Cafundó',
            text: 'Com quase 90 metros de altura, é a mais visitada do parque e pode ser acessada pela trilha da Samambaia.'
        },
       
    ];

   

    



    const dicasViagem = [
        <>A melhor época para visitar Ubajra é durante périodo de seca, que vai de <strong>junho a dezembro.</strong> onde as trilhas ficam mais seguras, sem risco de lama ou escorregões.</>,
        <>Leve roupas leves e confortáveis, além de um <strong>casaco</strong> para as noites mais frias.</>,
        <>Use <strong>calçados apropriados</strong> para trilhas, como tênis ou botas de caminhada.</>,
        <>Não esqueça de levar <strong>câmera fotográfica</strong> para registrar as belezas naturais.</>,
        <>Não esqueça de levar <strong>protetor solar</strong>, repelente e uma garrafa de água para as trilhas.</>,
    ];

    return (
        <>
        <Header />
        <div className='container-fortaleza'>
            <div className="sobre-container">
                <div className="image-container">
                    <img
                        src="src/img/ubajara3.jpg"
                        alt="Ubajara - Ceará"
                        className="main-header-image"
                        loading="lazy"
                    />
                </div>

                <section className='sobre-ubajara'>
                    <h2 className='title'>
                        Sobre Ubajara
                        <span className="orange-line"></span>
                    </h2>
                    <p>
                        Ubajara é uma cidade localizada na Serra da Ibiapaba,no estado do Ceará.
                        É famosa pelo Parque Nacional de Ubajara, que abriga a famosa Gruta de Ubajara, trilhas ecológicas, cachoeiras
                      e um teleférico que oferece vistas deslumbrantes.
                        A cidade tem clima agradável de serra, rica biodiversidade e é muito procurada para turismo de aventura, ecoturismo e turismo rural.
                    </p>
                </section>
            </div>
            <h2 className='title'>Pontos Turísticos</h2>

            <div className="pontos-turisticos-grid">
                {pontosTuristicos.map((ponto) => (
                    <article className="ponto-turistico-card" key={ponto.title}>
                        <img
                            src={ponto.img}
                            alt={`${ponto.title} - Ubajara`}
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
                <h2>Opções para chegar</h2>
                <p>
                    Ubajara está localizada a cerca de 320 km de Fortaleza, a capital do Ceará. As opções para chegar à cidade incluem:  
               </p><br />
                    <ul>
                        <li><strong>De carro:</strong> A viagem leva cerca de 5 horas pela BR-222 e CE-187.</li>
                        <li><strong>De ônibus:</strong> Há linhas regulares partindo de Fortaleza com duração aproximada de 6 horas.</li>
                        <li><strong>De avião:</strong> O aeroporto mais próximo é o de Sobral, a cerca de 100 km, seguido por transporte terrestre até Ubajara.</li>
                    </ul>
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



export default Ubajara;
