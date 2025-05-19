import { useContext, useState } from 'react';
import Navbar from './Navbar';
import { CidadesContext } from '../context/CidadesProvider';
import {
  CircularProgress,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { cidades } = useContext(CidadesContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="flex justify-between bg-orange-700 p-4 items-center">
        {/* Logo */}
        <div className="ml-4">
          <a href="/">
            <img
              src="/src/img/ficaiicon.png"
              alt="Ficaí Logo"
              className="h-10 cursor-pointer"
            />
          </a>
        </div>

        {/* Menu e Botões */}
        <div className="flex items-center space-x-16">
          {/* Menu de cidades */}
          <div>
            {cidades.length === 0 ? (
              <div className="relative z-50">
                <List component="nav">
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
                    {open ? <ExpandLess /> : <ExpandMore />}
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
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 2,
                    }}
                  >
                    <CircularProgress />
                  </Paper>
                </Collapse>
              </div>
            ) : (
              <Navbar />
            )}
          </div>

          {/* Botões de login/cadastro */}
          <ul className="flex space-x-4">
            <li>
              <a href="/Login">
                <button className="text-white bg-yellow-400 rounded-md px-4 py-2 hover:bg-yellow-500">
                  Entrar
                </button>
              </a>
            </li>
            <li>
              <a href="/Cadastrar">
                <button className="text-white bg-black rounded-md px-4 py-2 hover:bg-gray-900">
                  Cadastrar
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
