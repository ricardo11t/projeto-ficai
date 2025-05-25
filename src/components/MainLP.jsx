import React, { useContext } from 'react';
import Cards from './Card';
import { CidadesContext } from '../context/CidadesProvider';
import {
  Button,
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
      <div className='relative w-full h-150'>
        <img src="/src/img/imagembg.png" alt="" className='w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className='text-center'>
            <h1 className="text-white text-5xl font-bold">Descubra as Maravilhas do Ceará</h1>
            <br />
            <p className='text-white'>Praias paradisíacas, serras, cultura rica e gastronomia única. Faça login</p>
            <p className='text-white'>para explorar os melhores destinos!</p>
            <br />
            <div className='gap-5 flex justify-center'>
              <div>
                <Link to={`/cadastro`}><Button variant='contained' sx={{ backgroundColor: '#c85a29'}}>Cadastre-se</Button></Link>
              </div>
              <div>
                <Link to={`/login`}><Button variant='outlined' sx={{ borderColor: 'white', color: 'white' }}>Já tenho uma conta</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className='mt-10 text-[30px] text-center font-semibold'>Destinos Populares</h3>
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
        <Link to={`/cidades`}><Button variant='contained' sx={{ backgroundColor: '#c85a29', paddingLeft:20, paddingRight:20}}>Ver Mais</Button></Link>
      </div>
      <div className='flex flex-col w-full h-80 bg-amber-600'>
        <div className='mt-10'>
        <div className='text-center mt-5'>
            <h2 className="text-white text-3xl font-bold">Pronto para explorar o Ceará?</h2>
          <br />
            <p className='text-white'>Cadastre-se agora para ter acesso a informações exclusivas sobre os</p>
            <p className='text-white'>melhores pontos turísticos do estado.</p>
          <br />
          <div className='gap-5 flex justify-center'>
            <div>
              <Link to={`/cadastro`}><Button variant='contained' sx={{ backgroundColor: '#c85a29' }}>Criar minha conta</Button></Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLP;
