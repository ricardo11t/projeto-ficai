import React, { useContext, useState } from 'react'
import { CidadesContext } from '../context/CidadesProvider'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CardsComFilters = () => {
    const { cidades } = useContext(CidadesContext);

    const pontos = Object.keys(cidades).flatMap((cidade) =>
        Object.keys(cidades[cidade]).map((pontokey) => ({
            cidade,
            ...cidades[cidade][pontokey],
        }))
    );

    const [pontosAleatorios, setPontosAleatorios] = useState(pontos);

    const shuffle = (array) => {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    };

    const handleClick = (cidade) => {
        const pontosDaCidade = Object.keys(cidades[cidade]).map((pontokey) => ({
            cidade,
            ...cidades[cidade][pontokey],
        }));
        const embaralhados = shuffle(pontosDaCidade);
        setPontosAleatorios(embaralhados);
    };

    const filter = Object.keys(cidades).map((cidade, i) => (
        <div key={i} className='flex justify-center gap-2'>
            <button
                className='bg-white outline rounded cursor-pointer p-2 hover:bg-gray-300'
                onClick={() => handleClick(cidade)}
            >
                {cidade}
            </button>
        </div>
    ));

    return (
        <>
            <div className='flex justify-baseline ml-10 gap-2 mt-5 mb-5'>
                <div><h5 className='p-2'>Filtro:</h5></div>
                <div><button className='bg-white outline rounded cursor-pointer p-2 hover:bg-gray-300' onClick={() => setPontosAleatorios(shuffle(pontos))}>Todos</button></div>
                <div className='flex gap-2'>{filter}</div>
            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10'>
                {pontosAleatorios.map((ponto, i) => (
                    <Card key={i} className="flex flex-col justify-between h-full">
                        <CardMedia
                            component="img"
                            sx={{ height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            image={ponto.img}
                        />
                        <CardContent className="flex-1">
                            <Typography variant="h5" component="div">
                                {ponto.nome}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                {ponto.desc}
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-start mt-auto">
                            <Link to={`/${ponto.cidade}`}>
                                <Button size="small">Ver Detalhes</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default CardsComFilters;