// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';
// import Header from "./Header";
import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function PortfolioComponent() {

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
            {/* <Header> */}
                {/* We are passing the currentPage from state and the function to update it */}
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
            {/* </Header> */}

            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}

            <Footer />
        </div>
    );

}



export default PortfolioComponent;
