import express from "express";
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send(
    `<form method='POST'action='/'>
    <input type='text' name='name'/>
    <button type='submit'>Enviar</button>
    </form>`
  );
});

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.send(`<h1>Hola ${req.body.name}!</h1>`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
