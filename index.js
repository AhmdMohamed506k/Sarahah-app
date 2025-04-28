import express  from "express"
import userRouter from "./src/modules/users/user.routes.js";
import connectionDB from "./db/connectionDB.js";

import session from 'express-session';
import  connectMongoDBSession from 'connect-mongodb-session';
import massageRouter from "./src/modules/massages/massage.routes.js";

let monStore = connectMongoDBSession(session);

const app = express()
const port = 3000





var store = new monStore({
  uri: 'mongodb://localhost:27017/sarahaha',
  collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))

  store.on('error', function(error) {
    console.log(error);
  });







app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))





app.use(userRouter)
app.use( massageRouter)

connectionDB()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))