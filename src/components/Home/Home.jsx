import './Home.css';
import Header from '../Header/Header';
import Form from '../Form/Form';

const Home = () => {
    return (
        <div className="wrapper">
            <Header/>
            <h2>The best pizza</h2>
            <h3>Straight out of the oven, straight for you</h3>
            <p className='form__text'>Welcome! Please start by telling us your name</p>
            <Form/>
        </div>
    );
};

export default Home;
