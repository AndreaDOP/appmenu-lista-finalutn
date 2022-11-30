const express = require("express");
const app = express();
const mysql = require("mysql2");
//motor de plantilla
const hbs = require("hbs");
//encontrar archivos
const path = require("path");
//para enviar mails
const nodemailer = require("nodemailer");
//variables de entorno
require("dotenv").config();

//configuramos el puerto
const PORT = process.env.PORT || 9000;

//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//configuamos el motor de plantillas de HBS
app.set("view engine", "hbs");
//configuramos la ubicacion de las plantillas
app.set("views", path.join(__dirname, "views"));
//configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname, "views/partials"));

//conexion a la base de datos
const conexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

conexion.connect((err) => {
  if (err) throw err;
  console.log(`Conectado a la Database ${process.env.DATABASE}`);
});

//rutas de la aplicacion
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "¡¡Bienvenidos!!",
  });
});

app.get("/inicio", (req, res) => {
  res.render("inicio", {
    titulo: "¡¡Bienvenidos!!",
  });
});

app.get("/carnes", (req, res) => {
  res.render("carnes", {
    titulo: "Carnes",
  });
});

app.get("/ensaladas", (req, res) => {
  res.render("ensaladas", {
    titulo: "ensaladas",
  });
});

app.get("/guarniciones", (req, res) => {
    res.render("guarniciones", {
      titulo: "guarnicioness",
    });
  });

app.get("/postres", (req, res) => {
  res.render("postres", {
    titulo: "postres",
  });
});

app.post("/inicio", (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const phone = req.body.phone;

  //creamos una funcion para enviar Email al cliente

//async function EnvioMail

  let datos = {
    nombre: nombre,
    email: email,
    phone: phone
  }

  let sql = "INSERT INTO usuarios set?";

  conexion.query(sql, datos, function(err){
    if(err) throw err;
    console.log(`1 Registro insertado`);
    res. render('inicio')
  })
 
})

//servidor a la escucha de las peticiones
app.listen(PORT, () => {
  console.log(`Servidor trabajando en el puerto: ${PORT}`);
});



//para imprimir
//console.log(process.env.DATABASE);
