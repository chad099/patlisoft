import React, {Component} from 'react';
import Header from './Header';
import Services from './Services';
import Project from './Project';
import Team from './Team';
import Contact from './Contact';


export default class Home extends Component {
    render() {
        return(
            <div>
                    <div>
                        <Header/>
                        <Services />
                        <Project/>
                        <Team />
                        <Contact/>
                    </div>
            
                    
            </div>
            
        );
    }
}