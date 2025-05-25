import React, { useContext } from 'react';
import Cards from './Card';
import { CidadesContext } from '../context/CidadesProvider';
import {
  Card,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MainLP = () => {
  const { cidades } = useContext(CidadesContext);

  return (
    <>
      <h3 className='mt-10 text-[30px] text-center font-bold'>Destinos Populares</h3>

      {cidades.length !== 0 ? (
        <Cards />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6'>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="flex flex-col justify-between h-full p-4">
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
      <div className='flex justify-center mb-5'>
        <Link to={`/cidades`}><button className='bg-primary text-white cursor-pointer rounded pl-20 pr-20 pb-1 pt-1 hover:bg-primary/95'>Ver Mais</button></Link>
      </div>
    </>
  );
};

export default MainLP;
