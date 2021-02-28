import react from 'react'

import './menuItem.styles.scss'
import {withRouter} from 'react-router-dom'

const menuItem = ({title, imageUrl, size,  linkUrl, match, ...otherProps}) => (
    <div className = {`${size} menuItem`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <div className = 'background-image'></div>
        <div className = 'content'>
            <div className = 'title'>{title.toUpperCase()}</div>

        </div>

    </div> 
)

export default withRouer(menuItem);