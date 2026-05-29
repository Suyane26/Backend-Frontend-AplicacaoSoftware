const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API Online');
});

app.get('/api/produtos', (req, res) => {
    res.status(200).json([
        { id: 1, nome: 'Teclado Mecânico', preco: 250 },
        { id: 2, nome: 'Mouse Gamer', preco: 150 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});