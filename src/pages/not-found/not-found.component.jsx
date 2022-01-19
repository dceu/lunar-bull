import React from 'react'


import ContentCard from '../../components/content-card/content-card.component'

const NotFound = () =>
    (
        <div className="404-page">
            <div className="404-header"></div>

            <ContentCard id="0" heading='Under Construction'>
                <p>Sorry the page you are looking for doesn't exist, or is under construction.</p>
            </ContentCard>
        </div>
    )

export default NotFound;