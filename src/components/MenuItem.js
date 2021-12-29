import { Typography } from '@material-ui/core';
import React from 'react';
import ItemImage from '../assets/axu01.png';
import '../styles/Menu.css';

function MenuItem({name, genre, description}) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${ItemImage})` }}></div>
            <h1> {name} </h1>
            <p> {genre} </p>
            <p> {description} </p>
        </div>
    )
}

export default MenuItem
