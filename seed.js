const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name:"Iphone 14pro",
        img:"https://images.unsplash.com/photo-1598708521413-feaa4e69c01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" ,
        price: 130000,
        desc: "great security options" 
    },
    {
        name:"Macbook m2 pro",
        img:"https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        price: 250000 , 
        desc:"offers wide applications"
    },
    {
        name:"Iwatch",
        price:51000,
        img:"https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        desc:"handy and comfortable"
    },
    {
        name:"iPad Pro", 
        img: "https://images.unsplash.com/photo-1615529882128-03f9275523c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwYWR8ZW58MHx8MHx8fDA%3D", 
        price: 237900, 
        desc: "provides personalized experience"
    },
    {
        name:"airpods" , 
        img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D" , 
        price: 25000 ,
        desc: "great sound quality"
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;