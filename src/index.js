import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import uuidv4 from 'uuid/v4';
import models from './models';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', models.user);
app.use('/messages', models.message);

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.use((req, res, next) => {
    // do something
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});


app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);




console.log('Hello ever running Node.js project.');

console.log(process.env.MY_SECRET);
