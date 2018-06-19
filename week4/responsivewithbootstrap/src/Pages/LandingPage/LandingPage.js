import React from 'react';
import Tile from './tile/tile';
import Header from '../header/header';
import './LandingPage.css';
class LandingPage extends React.Component {
    constructor() {
        super();
        this.skillInformation = [
            {
                name: 'html',
                description: 'web lang',
                imgUrl: '/html.png'
            },
            {
                name: 'npm',
                description: 'your lang',
                imgUrl: '/npm.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgUrl: '/js.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'HTML',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'CSS',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'JS',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'React',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'Angular',
                description: 'aaaa',
                imgUrl: '/html.png'
            },
            {
                name: 'Webpack',
                description: 'aaaa',
                imgUrl: '/html.png'
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <Header />
                        <div className="tiles">
                    {this.skillInformation.map((skills) => {
                        return (<Tile skillName={skills.name} skilldescription={skills.description} skillImg={skills.imgUrl}>
                        </Tile>
                        )
                    })}
                    </div>
                </div>
        )
    }
}
export default LandingPage;