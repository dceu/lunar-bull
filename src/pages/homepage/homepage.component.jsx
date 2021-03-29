import React from 'react'
import ContentCard from '../../components/content-card/content-card.component.jsx'
import Directory from '../../components/directory/directory.component.jsx'

import './homepage.styles.scss'

const state = {
    content: [
        {
            id: '1',
            heading : 'A React Dev discerns Components',
            inquiries: ['What will be a component?','Will it be stateless or functional?'],

        },
        {
            id: '2',
            heading: 'A React Dev decides on State',
            inquiries: ['What data will State represent?', 'Where will State be "stored"?', 'How will state be accessed?'],
        },
        {
            id: '3',
            heading: 'A React Dev designs Dynamism',
            inquiries: ['What changes when state changes?'],
        },
    ]
}

const Homepage = (state) => 
    
    (
    <div className = 'homepage'>
        <h1>What is a React Developer?</h1>
        {/* {(
            (state.content).map( card => (
                <ContentCard key={card.id} props= {card}/>
            ))
        )} */}
    </div>
);

export default Homepage;