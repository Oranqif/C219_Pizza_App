import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizza = 
[
    {
        image:"margherita.jpg", 
        imageName:"Margherita Pizza", 
        name:"Margherita Pizza", 
        ingredient:"Dough, Basil, Tomatoes, Olive Oil, Garlic, Mozarella", 
        price:1.00
    }, 
    {
        image:"salamino.jpg", 
        imageName:"Salamino Pizza", 
        name:"Salamino Pizza", 
        ingredient:"Dough, Salami, Grape Tomatoes, Marinara Sauce, Red Onion, Parmesan", 
        price:1.50
    },
    {
        image:"prosciutto.jpg", 
        imageName:"Prosciutto Pizza", 
        name:"Prosciutto Pizza", 
        ingredient:"Dough, Tomatoes, Mozarella", 
        price:1.20
    }, 
    {
        image:"spinaci.jpg", 
        imageName:"Spinaci Pizza", 
        name:"Spinaci Pizza", 
        ingredient:"Dough, Bell Pepper, Tomatoes, Mozarella", 
        price:1.10
    },
    {
        image:"funghi.jpg", 
        imageName:"Funghi Pizza", 
        name:"Funghi Pizza", 
        ingredient:"Dough, Red Onion, Tomatoes, Mozarella", 
        price:1.10
    }, 
    {
        image:"focaccia.jpg", 
        imageName:"Focaccia Bread", 
        name:"Focaccia Bread", 
        ingredient:"Dough, Garlic, Mozarella", 
        price:1.10
    }, 
]

const listPizza = pizza.map((pizza, i) => (
    <Pizza 
    image={pizza.image} 
    imageName={pizza.imageName} 
    name={pizza.name} 
    ingredient={pizza.ingredient} 
    price={pizza.price}
    />
))

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <div className="pizzas">
                {listPizza}
            </div>
            <Footer/>
        </div>
    )
}

function Header() {
    return <h1 style={{color: "#dc655a", fontSize: "3rem"}}>Mikail's Pizzeria</h1>
}

function Pizza(prop) {
    return (
        <div className="pizza">
            <img src={prop.image} alt={prop.imageName} />
            <h2>{prop.name}</h2>
            <p>{prop.ingredient}</p>
            <p>${prop.price}</p>
        </div>
    )
}

Pizza.defaultProps = {
    imageName: "No Image",
    name: "Pizza",
    ingredient: "Dough, Sauce, Mozarella",
    price: 0.01
}

function Menu() {
    const hour = new Date().getHours();
    const isOpen = hour >= 10 && hour <= 22? true: false;
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p>{isOpen ? "Authentic Italian Cuisine, all from our stove oven" : ""}</p>
        </div> 
    )
}

function Order() {
    const hour = new Date().getHours();
    const isOpen = hour >= 12 && hour <= 22? true: false;
    return (
        <div>
            { isOpen ? 
            <div className="order">
                <p>We're currently open</p>
                <button type="button" className="btn">Order</button>
                <p className="open">Open from 11:00 AM to 10:00 PM</p>
            </div>
            :
            <div className="order">
                <p>Sorry we're closed</p>
                <button type="button" className="btn" disabled>Order</button>
                <p className="open">Open from 11:00 AM to 10:00 PM</p>
            </div>
            }
        </div>
    )
}

function Footer() {
    return (
    <div>
        <footer className="footer">
            <Order />
        </footer>
    </div>  
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)