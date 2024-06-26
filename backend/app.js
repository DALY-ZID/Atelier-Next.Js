const express=require('express'); 
const  mongoose =require("mongoose") 
const dotenv =require('dotenv') 
dotenv.config() 
const app = express(); 
const cors = require('cors');
app.use(cors()); // Active CORS pour toutes les routes

//BodyParser Middleware 
app.use(express.json());  
mongoose.set("strictQuery", false); 
// Connexion à la base données 
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }) 
.then(() => {console.log("Connexion à la base de données réussie"); 
}).catch(err => { 
    console.log('Impossible de se connecter à la base de données', err); 
    process.exit(); 
}); 

app.get("/",(req,res)=>{ 
res.send("bonjour"); 
}); 

const categorieRouter =require("./routes/categorie.route") 
app.use('/api/categorie', categorieRouter);

const scategorieRouter =require("./routes/scategorie.route") 
app.use('/api/scategorie', scategorieRouter);

const articleRouter =require("./routes/article.route") 
app.use('/api/article', articleRouter);


app.listen(process.env.PORT, () => { 
console.log(`Server is listening on port ${process.env.PORT}`); });