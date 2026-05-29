const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de exemplo para testar
app.get('/api/produtos', (req, res) => {
    res.status(200).json([
        { id: 1, nome: 'Teclado Mecânico', preco: 250 },
        { id: 2, nome: 'Mouse Gamer', preco: 150 }
    ]);
});

// Exportando para o caso de testes futuros, mas iniciando o servidor na porta
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = server;