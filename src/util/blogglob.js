const glob = require('glob');
const fs = require('fs');

    let options = {
    cwd : '../blog-src/'
    }
    
    return(
        glob('**/*.md', options, (err, blogList) => {
            console.log(options)
            if (err) {
                console.log(err);
            } else if (blogList.length === 0) {
                console.log('no blogs found')
            } else {
                blogList.forEach( (str, idx) => {
                    let oldPath = '../blog-src/' + str;
                    str = str.replace(/\s+/g, '-').toLowerCase()
                    let newPath = '../blog-src/' + str;
                    fs.rename(oldPath, newPath, err => {
                        if (err) console.log(err);
                        })
                    //console.log(str);
                    blogList[idx] = str;
            })
            const  parsed= JSON.parse(JSON.stringify(blogList));
            console.log(parsed);
            
            // Write to file
            fs.writeFile('./blog-list.json',  JSON.stringify(parsed), 'utf8', err => {
                if (err) console.log(err)
            })
            }
        })
    )


