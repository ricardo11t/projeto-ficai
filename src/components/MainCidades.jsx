import React, { useContext } from 'react';
import { CidadesContext } from '../context/CidadesProvider';
import CardsComFilters from './CardsComFilters';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

const MainCidades = () => {
    const { cidades } = useContext(CidadesContext);

    return (
        <>
            {Object.keys(cidades).length !== 0 ? (
                <CardsComFilters />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="flex flex-col justify-between h-full p-4">
                            <CardContent>
                                <Skeleton
                                    variant="rectangular"
                                    height={200}
                                    width="100%"
                                    sx={{ borderRadius: 3 }}
                                />
                            </CardContent>
                            <CardContent className="flex-1">
                                <Typography variant="h5" component="div">
                                    <Skeleton height={40} sx={{ mb: 2 }} />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {Array.from({ length: 3 }).map((__, i) => (
                                        <Skeleton key={i} height={20} sx={{ mb: 1 }} />
                                    ))}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default MainCidades;