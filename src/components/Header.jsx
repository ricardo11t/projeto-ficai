import { useContext, useState } from 'react'
import Navbar from '/projetos/projeto-ficai/src/components/Navbar'
import { CidadesContext } from '../context/CidadesProvider'
import { CircularProgress, Collapse, List, ListItemButton, ListItemText, Paper } from '@mui/material';
import { CircleOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';


const Header = () => {
    const [open, setOpen] = useState(false);
    const { cidades } = useContext(CidadesContext);
  
    const handleClick = () => {
      setOpen(!open);
    };

  return (
    <>
      <header>
        <div className='flex justify-between bg-(color:--color-primary) p-4'>
            <div className='ml-4 mt-3'>
                <a href="/"><img src="/src/img/ficaiicon.png" alt=""  className='h-10 cursor-pointer'/></a>
            </div>

            <div className='flex space-x-4 gap-40'>
              <div>
                {cidades.length === 0 ? (
        <div className="relative z-50">
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              onClick={handleClick}
              sx={{
                backgroundColor: '#c87548',
                color: 'white',
                '&:hover': { backgroundColor: '#ffba01' },
                borderRadius: 2,
                border: 1,
                borderColor: 'white',
              }}
            >
              <ListItemText primary="Cidades" />
              {open ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
          </List>

          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ position: 'absolute', top: '100%', left: 0, zIndex: 50, mt: 1 }}
          >
            <Paper
              sx={{
                width: 200,
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
              }}
            >
              <List 
              component="div" 
              disablePadding
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                minHeight:'100'
              }}
              >
                <CircularProgress />
              </List>
            </Paper>
          </Collapse>
        </div>
                )

                :
                
                (<Navbar />)}
              </div>
                <ul className='flex space-x-4 mt-3'>
                    <li className='rounded-md'><a href="/Login" className='border-gray-400'><button className='text-white bg-(--color-secondary) rounded-md p-2 cursor-pointer outline-1 hover:bg-[#c87548]'>Entrar</button></a></li>
                    <li className='rounded-md'><a href="/Login" className='border-gray-400'><button className='text-white bg-black rounded-md p-2 cursor-pointer hover:bg-gray-900'>Cadastrar</button></a></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header