const express = require("express");
const cors = require("cors");
const port = process.env["NODE_ENV"] === "development" ? 4000 : 80;
const app = express();
app.use(cors());
if (process.env["NODE_ENV"] === "development") {
  console.log("dev mode!");
}

app.get("/", (req, res) => {
  const personList = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      city: "New York"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      city: "Los Angeles"
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      age: 28,
      city: "Chicago"
    }
  ];
  return res.status(200).json(personList);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
