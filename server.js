// use express

let app = express();

// PORTS

let PORT = 3000;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());