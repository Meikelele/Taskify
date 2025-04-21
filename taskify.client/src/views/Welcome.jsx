import React from 'react';

import Layout from './Layout';
import './styles/welcome.css';


import Button from '../components/loginButton';
import {Link} from "react-router-dom";

class Welcome extends React.Component {
    render() {
        return (
            <Layout>
                <main className='welcome'>
                    <div className='welcome__logo'>
                        <h2 className='header'>Taskify</h2>
                    </div>
                    
                    <Link to='/log'>
                        <Button text="Log in" />
                    </Link>
                    
                    <Link to='/reg'>
                        <Button text="Sing up" />
                    </Link>
                </main>
                
            </Layout>            
        );
    }
}
export default Welcome;