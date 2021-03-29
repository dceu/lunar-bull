import React from 'react'

import './content-card.styles.scss';

const lorem = {
    header: 'This is a header',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.',

}

const ContentCard = ({id, heading, body, ...other}) => 

 (   
    <div className ="content-card-`${id}`">
        <div className = "content-header">
            {heading}
            </div>
        <p className = "content-body">
            {body}
    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad. */}

        </p>
    </div>
)

export default ContentCard;