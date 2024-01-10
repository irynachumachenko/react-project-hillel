import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <div className='container'>
                <p className='header__text'>pizza day</p>
                <input type='text' placeholder='search for the order #'/>
            </div>
        </section>
    );
};

export default Header;