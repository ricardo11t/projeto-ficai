import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { CidadesContext } from '../context/CidadesProvider';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cidades } = useContext(CidadesContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative z-50 w-full bg-[#c87548] p-4 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="ml-4">
        <a href="/">
          <img src="/src/img/ficaiicon.png" alt="Logo" className="h-10 cursor-pointer" />
        </a>
      </div>

      {/* Menu de navegação */}
      <div className="flex items-center gap-6">
        <List component="nav" aria-label="menu de cidades" className="p-0">
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
          sx={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 50, mt: 1 }}
        >
          <Paper
            sx={{
              width: 200,
              borderRadius: 2,
              boxShadow: 3,
              overflow: 'hidden',
            }}
          >
            <List component="div" disablePadding>
              {Object.keys(cidades).map((key, index) => {
                const cidade = cidades[key];
                return (
                  <ListItemButton key={index} component={Link} to={`/${cidade.nome?.toLowerCase() || cidade}`}>
                    <ListItemText primary={cidade.nome || cidade} />
                  </ListItemButton>
                );
              })}
            </List>
          </Paper>
        </Collapse>

        {/* Links fixos (exemplo) */}
        <ul className="flex gap-4">
          <li>
            <Link to="/fortaleza" className="hover:text-black">Fortaleza</Link>
          </li>
          <li><a href="#" className="hover:text-black">Guaramiranga</a></li>
          <li><a href="#" className="hover:text-black">Aracati</a></li>
          <li><a href="#" className="hover:text-black">Jijoca</a></li>
          <li><a href="#" className="hover:text-black">Aquiraz</a></li>
        </ul>
      </div>

      {/* Botões de ação */}
      <div className="flex items-center space-x-4">
        <a href="/Login">
          <button className="text-white bg-orange-300 rounded-md p-2 hover:bg-amber-400">Entrar</button>
        </a>
        <a href="/Cadastrar">
          <button className="bg-black text-white rounded-md p-2">Cadastrar</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
