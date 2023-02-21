import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Layout from './components/Layout';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="about" element={<About />} /> */}
                </Route>
            </Routes>
        </>
    );
};

export default App;
