const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const db = require('./models/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);

db.sequelize.sync({force: false}).then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
});
