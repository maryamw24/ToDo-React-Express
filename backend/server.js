const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const route = require('./routes/ToDoRoute');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use(route);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));