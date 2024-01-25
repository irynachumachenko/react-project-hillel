import React from 'react';

const MenuItem = ({item}) => {
    const {name, unitPrice, imageUrl, ingredients, soldOut } = item;

    const formatPrice = (price) => {
        return `€${price.toFixed(2)}`;
    };

    return (
        <li>
            <div className='list-item'>
                <img src={imageUrl} alt={name}/>
                <div className='menu-item-info'>
                    <div>
                        <p className='menu-item-info-name'>{name}</p>
                        <p className='menu-item-info-ingredients'>{ingredients.join(', ')}</p>
                    </div>
                    <div>
                        <p className={soldOut ? 'sold-out-text' : 'price-text'}>
                            {soldOut ? 'Sold Out' : formatPrice(unitPrice)}
                        </p>
                    </div>
                </div>
            </div>
            <button className='order-btn'>
                Add to cart
            </button>
        </li>
    )
};

export default MenuItem;