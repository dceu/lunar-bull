import React from 'react'

import './bio.styles.scss'
import ContentCard from '../../components/content-card/content-card.component'

const Bio = () => 
    (
        <div className="biography-page">

            <img class='profile' src='assets/profile/profile.jpg'/>
            
        <ContentCard id='0' heading='Donovan Conrad Estrada Uy'
         body='Born in Tampa, FL a stonethrow away from Raymond James Stadium (where the cannons sound as the Bucs play), and would much prefer if somebody else wrote his biography.'/>
        </div>
    )


export default Bio;