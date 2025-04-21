import React from 'react';

import Layout from './Layout';
import './styles/global.css';

import './styles/signup.css';

import Button from '../components/loginButton';
import StyledInput from '../components/styledInput';

import {Link} from "react-router-dom";

class Signup2 extends React.Component {
    render() {
        return (
            <Layout>
            <main className='welcome'>
                <div className='welcomeText'>
                    <h2 className='header'>Step 2</h2>
                </div>
                <StyledInput placeholder='Name' text='Name'></StyledInput>
                <StyledInput placeholder='Surname' text='Surname'></StyledInput>
                <StyledInput placeholder='Username' text='Username'></StyledInput>
                <StyledInput placeholder='+48 123456789' text='Phone number'></StyledInput>              
                <Link to='/home'>
                    <Button text='Sign up'></Button>
                </Link>
                
                <p className='subtext'>Already have account? <Link to='/log'><span className='subtext__span'>Log in</span></Link></p>


            
            </main>
            
            </Layout>            
        );
    }
}
export default Signup2;