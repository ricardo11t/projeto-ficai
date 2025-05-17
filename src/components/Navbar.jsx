import React, { useState, useEffect } from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cidades, setCidades] = useState([]);  // Estado para armazenar cidades
  const URL = "http://localhost:3000/cidades";

  // Função para buscar cidades da API
  const getCities = async () => {
    try {
      const res = await fetch(URL);
      const dados = await res.json();
      setCidades(dados);  // Atualiza o estado com os dados recebidos
    } catch (err) {
      console.error("Erro ao buscar as cidades", err);
    }
  };

  // useEffect para chamar getCities apenas 1 vez quando o componente monta
  useEffect(() => {
    getCities();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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

      {/* Dropdown fora do fluxo normal */}
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
          <List component="div" disablePadding>
            {/* Renderiza dinamicamente cada cidade usando map */}
            {cidades.map((cidade, index) => (
              <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemText primary={cidade.nome || cidade} />
                {/* Use cidade.nome se a cidade for objeto, ou cidade se for string */}
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Collapse>
    </div>
  );
};

export default Navbar;
