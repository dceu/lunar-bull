import React from 'react'

import './content-card.styles.scss';

const lorem = {
    header: 'This is a header',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.',

}

const ContentCard = ({id, heading, children, ...other}) => 

 (   
     <div className ="content-card" id={`$id`}>
     {heading ? <h3 className="content-header">{heading}</h3> : null}
     
        
    
            
        <p className = "content-body">
            {children}
    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad. */}

        </p>
    </div>
)

export default ContentCard;