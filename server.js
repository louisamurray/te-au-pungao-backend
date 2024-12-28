const express = require('express');
const bodyParser = require('body-parser');
const { Example } = require('./models');

const app = express();

app.use(bodyParser.json());

app.get('/api/examples', async (req, res) => {
    try {
        const examples = await Example.findAll();
        res.json(examples);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/examples', async (req, res) => {
    try {
        const example = await Example.create(req.body);
        res.status(201).json(example);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
