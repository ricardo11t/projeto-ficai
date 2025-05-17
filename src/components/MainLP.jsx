import React, { useContext } from 'react'
import Cards from './Card'
import { CidadesContext } from '../context/CidadesProvider'
import { CardContent, Skeleton, Card, Typography, Button, CardActions, Box } from '@mui/material';

const MainLP = () => {
  const { cidades } = useContext(CidadesContext);

  return (
    <>
      <h3 className='mt-10 text-[30px] text-center font-bold'>Destinos Populares</h3>

      {cidades.length != 0 ? (<Cards />) 
      
      :
      <div className='grid grid-cols-3'>
              <div className='m-6 w-150'>
                  <Card className="flex flex-col justify-between h-full">
                    <CardContent>
                      <Skeleton variant='rectangular' height={300} width={560} sx={{borderRadius:3}} />
                    </CardContent>
                    <CardContent className="flex-1">
                        <Typography variant="h5" component="div">
                          {Array.from({ length: 1 }).map((_, i) => (
                            <Skeleton key={i} height={50} sx={{ mb: 2 }} />
                          ))}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} height={20} sx={{ mb: 1 }} />
                          ))}
                        </Typography>
                    </CardContent>
                </Card>
              </div>
              <div className='m-6 w-150'>
                <Card className="flex flex-col justify-between h-full">
                    <CardContent>
                      <Skeleton variant='rectangular' height={300} width={560} sx={{borderRadius:3}} />
                    </CardContent>
                    <CardContent className="flex-1">
                        <Typography variant="h5" component="div">
                          {Array.from({ length: 1 }).map((_, i) => (
                            <Skeleton key={i} height={50} sx={{ mb: 2 }} />
                          ))}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} height={20} sx={{ mb: 1 }} />
                          ))}
                        </Typography>
                    </CardContent>
                </Card>
              </div>
              <div className='m-6 w-150'>
                <Card className="flex flex-col justify-between h-full">
                    <CardContent>
                      <Skeleton variant='rectangular' height={300} width={560} sx={{borderRadius:3}} />
                    </CardContent>
                    <CardContent className="flex-1">
                        <Typography variant="h5" component="div">
                          {Array.from({ length: 1 }).map((_, i) => (
                            <Skeleton key={i} height={50} sx={{ mb: 2 }} />
                          ))}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} height={20} sx={{ mb: 1 }} />
                          ))}
                        </Typography>
                    </CardContent>
                </Card>
              </div>
      </div>
      }
    </>
  ) 
}

export default MainLP