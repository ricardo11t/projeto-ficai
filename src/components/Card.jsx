import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CidadesContext } from '../context/CidadesProvider';
import { Link } from 'react-router-dom';


const Cards = () => {
    const { cidades } = useContext(CidadesContext);

return (
    <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10'>
        {Object.keys(cidades).map((cidade) =>
            Object.keys(cidades[cidade]).map((pontoKey) => {
                const ponto = cidades[cidade][pontoKey];
                return (
                <Card key={pontoKey} className="flex flex-col justify-between h-full">
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
                        <Link to={`/${cidade}`}>
                            <Button size="small">Ver Detalhes</Button>
                        </Link>
                    </CardActions>
                </Card>
                );
            })
        )}
    </div>
);
}

export default Cards;