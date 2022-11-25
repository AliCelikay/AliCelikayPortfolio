import React, { useState } from 'react';

// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
// import PortfolioComponent from './components/PortfolioComponent';

function App() {

    // Declaring a state variable `currentPage` using `useState`
    // Give the method to update it a name, `setCurrentPage`
    // useState accepts one argument for the default or initial value of the state variable. setCurrentPage allows us to update currentPage variable
    const [currentPage, setCurrentPage] = useState("About");// setting currentState to be 'About' so that when the application loads, the 'About' page loads automatically

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header>
            {/* We are passing the currentPage from state and the function to update it */}
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
            </Header>

            {/* Here we are calling the renderPage method which will return a component  */}
            <main>
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
}

export default App;
