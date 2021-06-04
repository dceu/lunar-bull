import React from 'react'

import './bio.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

const Bio = () => 
    (
        <div className="biography-page">

            <div className="bio-header"><img class='profile' src='assets/profile/profile.jpg'/></div>
            
        <ContentCard id='0' heading='Donovan Conrad Estrada Uy'>
            <p>Born in Tampa, FL a stonethrow away from Raymond James Stadium (where the cannons sound as the Bucs play), grew up when the art classes were being cut in lieu of windows suite literacy tutorials (playing The Oregon Trail).</p>
            <p>Can be found practicing geometric symmetries in a boxing gym if not servicing tables for a middle-market.</p>
            <p>Currently studying Project Management, and Data Science while trying to maintain a web-development skillset.</p>
            </ContentCard>
        </div>
        
    )


export default Bio;