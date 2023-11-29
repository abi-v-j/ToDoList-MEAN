// app.js (or index.js)

const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');





const app = express()
const PORT = process.env.PORT || 5000
// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const AddToDo = new mongoose.Schema({
    todoText: {
        type: String,
        required: true,
    },
    todocar: {
        type: String,
        required: true,
    },
})
AddToDoList = mongoose.model('addtodo', AddToDo)




app.post('/AddToDo', async (req, res) => {
    console.log(req.body);
    const { todoText, todocar } = req.body
    console.log(todoText);

    todolist = new AddToDoList({
        todoText,
        todocar
    })

    await todolist.save()


})

app.get('/ShowToDo', async (req, res) => {
   
        let Todolist = await AddToDoList.find()
        res.send(Todolist).status(200)
   

})


app.listen(PORT, async () => {
    try {
        await mongoose.connect('mongodb+srv://abijoy611:mytodoapp_123@cluster0.png44yo.mongodb.net/my-to-do-list');
        console.log("db connection established");
        console.log(`Server started on port ${PORT}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
})




