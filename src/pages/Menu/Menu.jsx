import React, {useState, useEffect} from 'react';
import './Menu.css'
import Header from '../../components/Header/Header';
import { PIZZA_API } from '../../constants';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            const res = await fetch(`${PIZZA_API}/menu`);
            const { data } = await res.json();
            setMenu(data);
        };
        getMenu();
    }, []);

    return (
        <>
            <Header/>
            <div className='menu-wrapper'>
                <ul className='menu-list'>
                    {menu.map(item => <MenuItem item={item} key={item.id}/>)}
                </ul>
            </div>
        </>
    );
};

export default Menu;
