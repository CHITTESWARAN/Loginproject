    const express = require("express"); 
    const cors = require("cors");
    const mongoose=require("mongoose")
    const jwt = require("jsonwebtoken");
    const bodyParser = require('body-parser');
    const bcrypt = require('bcryptjs'); 
    const PORT = 4000; 
    const app = express();
    const User = require("./Models/username.js");
    require('dotenv').config(); 

    

    //Middleware
    app.use(cors({ origin: 'https://loginproject-1-iv5d.onrender.com/', credentials: true })); 
    app.use(express.json()); 
    app.use(bodyParser.urlencoded({ extended: true })); 

    //Mongodb
    const connectDb = async () => {
        try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected');
        } catch (error) {
        console.error('Error in the connection:', error.message);
        }
    };
    
    connectDb();

    //login
    app.post("/login",async(req,res)=>{
        const { username, password } = req.body;
        const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    
    res.cookie('token', token, { httpOnly: true, secure: false});

    res.status(200).json({ message: "Login successful", token,username:username });

    })

    //register

    app.post("/register",async(req,res)=>{
        const { username, password } = req.body;

        const userspresent = await User.findOne({ username });  
        if(userspresent)
        {
            return res.status(400).json({ message: "User already exists" });
        }
        else{
    
            const hashedPassword= await bcrypt.hash(password,10)
            const newuser=new User({username, password: hashedPassword});
            newuser.save();

        res.status(201).json({ message: "User created successfully" });

        }

    })

  
    app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); 
    });
