import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <div className='mt-2'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;