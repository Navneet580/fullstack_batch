// console.log("Radha")

const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

const PORT = 8080;

const app = express();

const logger = (req, res, next) => {
    console.log(`Request method: ${req.method} and request path: ${req.path}`);
    next();
};

app.use(logger);
app.use(express.json());

app.get("/ping", (req, res) => {
    res.status(200).send("PONG");
});

// @@1
// create an endpoint to get all of the todos
/**
 * response body structure
 * status: 200
 * data: {}
 * message: "Success"
 */
app.get("/todos", async (req, res) => {
    try {
        // for @@2 this paragraph only
        const data = await fs.promises.readFile("./db.json", "utf-8");
        return res.status(200).json({
            message: "Successfully fetched the todos",
            data: JSON.parse(data),
        });

        // @@1
        // fs.readFile("./db.json", "utf-8", (err, data)=>{
        //     if (err) {
        //         console.log(err)
        //         return res.status(500).json({
        //             message: "Internal Server Error",
        //             data: null
        //         })
        //     }
        //     return res.status(200).json({
        //         message: "Successfully fetched the todos",
        //         data: JSON.parse(data)
        //     })
        // })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
});

// create an endpoint to get add todos
// @@2
app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
        const { title } = req.body;
        const todo = {
            title: title,
            isComplete: false,
            id: uuid.v4(),
        };
        const data = await fs.promises.readFile("./db.json", "utf-8");
        const parseData = JSON.parse(data);
        parseData.push(todo);
        await fs.promises.writeFile("./db.json", JSON.stringify(parseData));

        return res.status(200).json({
            message: "Successfully fetched the todos",
            data: parseData,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }

});

// create an endpoint to delete a todo
app.delete('/todos/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const data = await fs.promises.readFile("./db.json", "utf-8");
        const parsedData = JSON.parse(data);
        const todo = parsedData.find((todo) => todo.id === id);
        if (todo){
            // delete the todo from array
            const filteredData = parsedData.filter((todo) => todo.id !== id);
            await fs.promises.writeFile("./db.json", JSON.stringify(filteredData));
            
            return res.status(200).json({
                message: "Todo deleted successfully",
                data: filteredData
            })

        }
        return res.status(400).json({
            message: "Todo with this id does not exist",
            data: null,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
})

// create an endpoint to update the todo
app.patch('/todos/:id', async (req, res)=>{
    try {
        const { id } = req.params;
        const { title, isComplete } = req.body;

        const parsedData = JSON.parse(data);
        const todo = parsedData.find((todo) => todo.id === id);
        if(title && title === '') return res.status(400).json({
            message: "Todo title can not be empty",
            data: null,
        });
        if (todo){

            // update the todo from array
            todo = {
                ...todo,
                title: title || todo.title,
                isComplete: isComplete || todo.isComplete
            }

            await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
            return res.status(200).json({
                message: "Todo deleted successfully",
                data: null
            })
        }
        return res.status(400).json({
            message: "Todo with this id is unable to update",
            data: null,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
