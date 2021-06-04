import React from 'react'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import Directory from '../../components/directory/directory.component.jsx'

import './homepage.styles.scss'

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            content: [
                {
                    id: '1',
                    heading : 'This is a Website Built with ReactJS',
                    inquiries: [' What will be a component?',' Will it be stateless or functional?'],
        
                },
                {
                    id: '2',
                    heading: 'A React Dev decides on State',
                    inquiries: [' What data will State represent?', ' Where will State be "stored"?', ' How will state be accessed?'],
                },
                {
                    id: '3',
                    heading: 'A React Dev designs Dynamism',
                    inquiries: ['What changes when state changes?'],
                },
                // {
                //     id: '4',
                //     heading: 'Lorem',
                //     inquiries: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.'],
                // },
                // {
                //     id: '5',
                //     heading: 'Lorem',
                //     inquiries: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.'],
                // },
                
            ]
        }
    } // end constructor

    render() {
        return(
            <div className = 'homepage'>
                <h1 className= 'welcome'>"Hello World"</h1>
                {/* <h3> this is a subheading </h3>
                <p>some basic text</p> */}
                <div className="content-cards">
                {this.state.content.map( card => (
                    
                        <ContentCard key={card.id} heading={card.heading} >{card.inquiries}</ContentCard>
                        
                ))}
                </div>
            </div>
        )
    }
}

export default Homepage;