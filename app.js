const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const PORT = 3000;
const connectDatabase = require("./database/connection");

const app = express();
connectDatabase();

app.use(cors());
app.use(express.json()); //required to access json data in POST function

//Use routes
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
