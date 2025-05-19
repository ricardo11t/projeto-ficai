import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
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
      <div className="flex justify-between bg-primary p-4 items-center">
        {/* Logo */}
        <div className="ml-4">
          <Link to="/"> {/* Substitua a tag <a> por <Link> */}
            <img
              src="/src/img/ficai-logo.png"
              alt="Ficaí Logo"
              className="h-20 cursor-pointer p-0"
            />
          </Link>
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
              <Link to="/login"> {/* Substitua por Link */}
                <button className="text-white bg-yellow-400 rounded-md px-4 py-2 cursor-pointer hover:bg-yellow-500">
                  Entrar
                </button>
              </Link>
            </li>
            <li>
              <Link to="/cadastro"> {/* Ajuste para o caminho correto */}
                <button className="text-white bg-black rounded-md px-4 py-2 cursor-pointer hover:bg-gray-900">
                  Cadastrar
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;