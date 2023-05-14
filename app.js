// Importing the required dependencies
const express = require('express');

// Creating an instance of the Express application
const appdata = express();

// Loading the foodDatabase module
let foodDatabase = require('./data');

// Route for the root URL
appdata.get('/',(req,res) => {
    res.send(`<h2>Welcome to Health Database</h2>
    <h3>Art by, KOTTA M S S J Manvith</h3>
    <h4>For queries, please contact: kotta.mssjmanvith.20cse@bmu.edu.in</h4>
    `);
})

// Route to get all food names
appdata.get('/all', (req,res) => {
    let foodnames = [];
    foodData.forEach(elements => {
        foodnames.push(elements.foodname);
    });
    res.json(foodnames);
})

// Route to check the health API status
appdata.get('/health-api', (req,res) => {
    let time = new Date().toLocaleTimeString();
    res.json({time: time, app: "expressDatabaseServer", 'status': 'isActive'});
})

// Route to get all fruits
appdata.get('/fruit', (req,res) => {
    let fruits = [];
    foodData.forEach(elements => {
        if (elements.category === 'Fruit') fruits.push(elements.foodname);
    });
    res.json(fruits);
})

// Route to get all proteins
appdata.get('/protien', (req,res) => {
    let protiens = [];
    foodData.forEach(elements => {
        if (elements.category === 'Protein') protiens.push(elements.foodname);
    });
    res.json(protiens);
})

// Route to get all foods with calorie above 100
appdata.get('/calorie-above-100', (req,res) => {
    let calorieAbove100 = [];
    foodData.forEach(elements => {
        if (elements.calorie > 100) calorieAbove100.push(elements.foodname);
    })
    res.json(calorieAbove100);
})

// Route to get all vegetables
appdata.get('/vegetable', (req,res) => {
    let vegetables = [];
    foodData.forEach(element => {
        if (element.category === 'Vegetable') vegetables.push(element.foodname);
    });
    res.json(vegetables);
})

// Route to get all foods with calorie below 100
appdata.get('/calorie-below-100', (req,res) => {
    let calorieBelow100 = [];
    foodData.forEach(elements => {
        if (elements.calorie < 100) calorieBelow100.push(elements.foodname);
    })
    res.json(calorieBelow100);
})

// Starting the server on port 3000
appdata.listen(3000,() => {
    console.log(`Server running on port 3000`);
})

