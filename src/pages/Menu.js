import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Movie List</h1>
            <div className='menuList'>
                {MenuList.map((item, key) => {
                    return <MenuItem 
                        key={key}
                        name={item.name}
                        genre={item.genre}
                        description={item.description}
                    />
                })}
            </div>
        </div>
    )
}

export default Menu;
