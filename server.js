// use express

let app = express();

// PORTS

let PORT = 3000;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());



require("")(app);
require("")(app);




app.listen(PORT, function() {
    console.log("Welcome to port: " + PORT);
})