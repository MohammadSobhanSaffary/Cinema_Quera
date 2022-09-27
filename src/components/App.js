import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import NotFound from './NotFound';

export default function App() {
    // your code here ...
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>

    )
}
