import express from 'express';

const app = express();
 app.use(express.json());

 const users = [];

 app.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.send(req.body);
 });

 app.get('/users', (req, res) => {
    res.send(users)
 });

 app.listen(5000);