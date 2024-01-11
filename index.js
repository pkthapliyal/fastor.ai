require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

//  All middleware route
const { dbConnection } = require("./config/db");

const { employeeRouter } = require("./routes/employee");
const { enquiryRouter } = require("./routes/enquiry");


const PORT = process.env.PORT || 3300;



app.use(express.json());
app.use(cors());

// Router Middleware
app.use("/employee", employeeRouter);
app.use("/enquiry", enquiryRouter)


app.get('/', (req, res) => {
    res.send("Hello Welcome to Hompage. PLease use postman to test apis.")
});



app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    try {
        await dbConnection;
        console.log("DB Connected")

    } catch (error) {
        console.error({ error: error.message })
    }
});