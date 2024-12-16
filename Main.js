const express = require('express')
const {read,write} = require('./fs.servises')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    try {
        const users = await read();
        res.json(users);
    } catch (e) {
        res.status(500).json(e.message);
    }
})
app.post('/users', async (req, res) => {
    try{
        const users = await read();
        const newUser = {
            id:users.length ? users[users.length-1].id+1 : 1,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
        users.push(newUser);
        await write();
        res.status(201).json(newUser);
    }catch (e){
        res.status(500).json(e.message);
    }
})
app.get('/users/:userId', async (req, res) => {
    try{
        const users = await read();
        const user = users.find(user => user.id === Number(req.params.userId));
        res.json(user);
    }catch (e) {
        res.status(500).json(e.message);
    }
})
app.delete('/users/:userId', async (req, res) => {
    try{
       const users = await read();
       const findUserId = users.filter(user => user.id !== Number(req.params.userId))
        await write(users);
        res.status(200).json(findUserId);
    }catch (e) {
        res.status(500).json(e.message);
    }

})
app.put('/users/:userId', async (req, res) => {
    try{
        const users = await read();
        const findUserId = users.findIndex(user => user.id === Number(req.params.userId))
        if (findUserId === -1) {
            return res.status(404).json('User not found');
        }
        const user = users[findUserId];
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        await write(users);
        res.status(200).json(user);
    }catch (e) {
        res.status(500).json(e.message);
    }
})
const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`))
