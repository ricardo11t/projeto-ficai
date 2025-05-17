import React, { useState, useContext } from 'react';
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
          <List component="div" disablePadding>
            {Object.keys(cidades).map((cidade, index) => (
              <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemText primary={cidade.nome || cidade} />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      </Collapse>
    </div>
  );
};

export default Navbar;
