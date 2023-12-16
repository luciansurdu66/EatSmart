const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const db = require('./models/index');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/ingredient', ingredientRoutes);

app.get('api/getIp', (req, res) => {
    const networkInterfaces = os.networkInterfaces();

    const ipv4Address = Object.values(networkInterfaces)
        .flatMap(interfaces => interfaces)
        .find(interface => interface.family === 'IPv4' && !interface.internal);

    if (ipv4Address) {
        res.json({ ipv4Address: ipv4Address.address });
    } else {
        res.status(500).json({ error: 'Failed to retrieve IPv4 address' });
    }
});


db.sequelize.sync({force: false}).then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
});
