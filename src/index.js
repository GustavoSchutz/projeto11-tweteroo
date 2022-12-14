import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
   const user = req.body;
   if (Object.keys(user).length === 2) {
      users.push(user);
      res.send("ok");
   }
   res.status(409).send("tamanho errado")
});

app.post('/tweets', (req, res) => {
   const tweet = req.body;
   if (Object.keys(tweet).length === 2) {
      tweets.push(tweet);
      res.send("ok");
   }
   res.status(409).send("tamanho errado")
});

app.get('/tweets', (req, res) => {
   const getTweets = tweets.map((tw) => {
      return {
         ...tw,
         avatar: users.find((usr) => usr.username === tw.username).avatar
      }
   });
   res.send(getTweets.slice(-10));
});

app.get('/users', (req, res) => {
   res.send(users)
});

app.listen(5000);