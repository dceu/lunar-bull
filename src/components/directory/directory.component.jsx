import React from 'react'

class Directory extends React.Component {
    constructor() {
        super();



        this.state = {
            pages: [
                {
                    id: 0,
                    title: 'resume',
                },{
                    id: 1,
                    title: 'projects',
                },{
                    id: 2,
                    title: 'blog',
                },{
                    id: 3,
                    title: 'bio',
                },{
                    id: 4,
                    title: 'contact',
                },
            ]        
        }
    }

    render() {
        return(
            <div className = 'directory'>
                {this.state.pages.map(({id, ...pageProps}) => (
                    <MenuItem key = {id} {...pageProps} />
                ))}
            </div>
        )
    }
}