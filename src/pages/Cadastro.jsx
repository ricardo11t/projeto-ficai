import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton
} from '@mui/material';
import { PersonAdd as PersonAddIcon, Visibility, VisibilityOff } from '@mui/icons-material';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const validations = [
      [!formData.nome.trim(), 'O nome completo é obrigatório'],
      [!formData.email.trim(), 'O email é obrigatório'],
      [!formData.password, 'A senha é obrigatória'],
      [!formData.confirmPassword, 'Confirme sua senha'],
      [formData.password !== formData.confirmPassword, 'As senhas não coincidem'],
      [formData.password.length < 6, 'A senha deve ter pelo menos 6 caracteres'],
      [!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email), 'Por favor, insira um email válido']
    ];

    for (const [condition, message] of validations) {
      if (condition) return message;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setLoading(true);
    try {
      // Simulação de API com tratamento de erro
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simular sucesso aleatório para demonstração
          Math.random() > 0.2 ? resolve() : reject(new Error('Erro de conexão com o servidor'));
        }, 1500);
      });
      
      navigate('/login', {
        state: {
          registrationSuccess: true,
          message: 'Cadastro realizado com sucesso! Faça login.'
        }
      });
    } catch (err) {
      setError(err.message || 'Erro ao cadastrar. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <PersonAddIcon sx={{
          fontSize: 50,
          color: 'primary.main',
          mb: 2,
          backgroundColor: 'rgba(255, 152, 0, 0.1)',
          p: 1,
          borderRadius: '50%'
        }} />

        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Criar Nova Conta
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            width: '100%',
            '& .MuiTextField-root': { mb: 2 }
          }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Nome Completo"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            variant="outlined"
            required
            autoFocus
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            required
          />

          <TextField
            fullWidth
            label="Senha"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            variant="outlined"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirme a Senha"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="outlined"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    aria-label="toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.5,
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Cadastrar'
            )}
          </Button>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Já possui uma conta? Faça login
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Cadastro;