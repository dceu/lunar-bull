import React from 'react'

import './content-card.styles.scss';

const state = {
    header: 'This is a header',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.',

}

const ContentCard = (state) => (
    <div className ="content-card">
        <div className = "content-header">
            {/* `${state.header}` */}
            Header
            </div>
        <p className = "content-body">
            {/* `${state.body}` */}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aperiam omnis neque recusandae totam laudantium veniam maxime, sequi debitis animi? Voluptatum quis perspiciatis corporis autem in odio eaque beatae ad.

        </p>
    </div>
)

export default ContentCard;