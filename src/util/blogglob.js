const glob = require('glob');

const blogglob = (relDir) => {
    let options = {
    cwd : relDir
    }
    return(
        glob('*.*', options, (err, blogList) => {
            console.log(options)
            if (err) {
                console.log(err);
            } else if (blogList.length === 0) {
                console.log('no blogs found')
            } else {
            console.log(blogList);
            }
        })
    )
}

export default blogglob;

