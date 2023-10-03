import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const API_ADRESS = "https://v2.jokeapi.dev/joke/";




app.get("/",  (req,res)=>{
        res.render("index.ejs",{data:'null'});
})

app.post("/post-joke",async (req,res)=>{
    const selectedCategory = req.body.category;
    const str = req.body.searchBar;
    try{
    var result = await axios.get(`${API_ADRESS}/${selectedCategory}?contains=${str}`);
    res.render("index.ejs",{data:result.data});
    }
    catch(error){
        console.error(error);
        res.render("index.ejs",{data:result.data});

    }

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


