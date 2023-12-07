const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./DB');
const userRoute = require('./routes/UserRoute');

const PORT = process.env.PORT || 5000;
const MOZILLA_API_URL = "https://http-observatory.security.mozilla.org/api/v1/";
const { PrismaClient } = require("@prisma/client");
const path = require("path");
const prisma = new PrismaClient();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

let corsOptions = {
    origin: 'https://gbm-admin-back.herokuapp.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use('/api/users', userRoute);

app.get('/api/iplist', async (req, res) => {
    const IPAdresses = await prisma.IPBlacklist.findMany()
    res.json(IPAdresses)
})

app.get('/api/hostnames', async (req, res) => {
    const hostnames = await prisma.HostnameBlacklist.findMany()
    res.json(hostnames)
})

app.get('/api/emails', async (req, res) => {
    const emails = await prisma.User.findMany()
    res.json(emails)
})

app.get('/*', function(req, res) {
    res.sendFile(path.join('/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
