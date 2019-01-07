import express from 'express';
import router from './routes/index';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve('./public')));
app.use('/', router);
const port = 4000;

app.listen(port, () => {
    console.log('server started');
})