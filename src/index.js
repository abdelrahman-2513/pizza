import './index.css'
import reactDOM from 'react-dom/client'
const pizzaData = require('./data');


function App() {
    return (<div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>)
}

function Header() {
    return <header className='header'><h1>Fast Pizza co.</h1></header>
}

function Menu() {
    const numPizzas = pizzaData.length;
    return (<main className='menu'>
        <h2>Our Menu</h2>
        <p>Authentic italian cousine, what about pizza is always awesome!! :)</p>
        {numPizzas > 0 && (<ul className='pizzas'>
            {pizzaData.map((pizza) => (
                <Pizza pizzaOBJ={pizza} key={pizza.name} />
            ))}
        </ul>)}

    </main>)
}

function Footer() {
    const date = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = date >= openHour && date <= closeHour;
    console.log(isOpen)

    return (<footer className='footer'>
        {isOpen ? (
            <div className='order'>
                <p>
                    {new Date().toLocaleTimeString()}  we are currently opening!)
                </p>
                <button className='btn'>Order</button>
            </div>
        ) : <p>
            we will open from {openHour}:00 to {closeHour}:00 ;)
        </p>}
    </footer >)
}
function Pizza(props) {
    return <li className={`pizza ${props.pizzaOBJ.soldOut ? "sold-out" : ""}`}>
        <img src={props.pizzaOBJ.photoName} alt={props.pizzaOBJ.name} />
        <div>
            <h3>{props.pizzaOBJ.name}</h3>
            <p>{props.pizzaOBJ.ingredients}</p>
            <span>{props.pizzaOBJ.soldOut ? "SOLD-OUT" : `${props.pizzaOBJ.price} $`}</span>
        </div>

    </li>
}

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(< App />);