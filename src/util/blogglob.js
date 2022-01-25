const glob = require('glob');
const fs = require('fs');

    let options = {
    cwd : '../blog-src/'
    }
    
    function Post(title, md){
        this.title = title,
        this.md = md
    }
    
    let fixCaseAddHyphen = (str) => {
        let oldPath = '../blog-src/' + str;
        let fixedStr = str.replace(/\s+/g, '-').toLowerCase()
        let newPath = '../blog-src/' + fixedStr;
        fs.rename(oldPath, newPath, err => {
            if (err) console.log(err);
            })
        return {fixedStr, newPath};
        //console.log(str);
    }
    
    let replaceHyphen = (str) => {
        if (str.indexOf('-')){
            return str.replace(/-/g, ' ');
        }
        else return str;
    }
    
    let capitalize = (str) => {
        if (str.indexOf(' ')) {
           let arr = str.split(' ')
           arr.forEach((w,i) => {
               arr[i] = w[0].toUpperCase() + w.substr(1)
               })
           return arr.join(' ');
        }
    }
    
    let newBlogs = (titles, md) => {
       let blogs = []; 
        titles.forEach( (b, i) => {
          blogs.push(new Post(b, md[i]));
        })
        return blogs;
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
                    blogList[idx] = fixCaseAddHyphen(str).fixedStr;
                    })
            const  parsedList = JSON.parse(JSON.stringify(blogList));
            //console.log(parsedList);
            let titles = Array.from(
                blogList.map(
                    str => capitalize(replaceHyphen(str)).slice(0,-3)));
            //console.log(titles);
            let blogs = newBlogs(titles, blogList);
                
            
            
            // Write to file
            fs.writeFile('./blog-list.json',  JSON.stringify(blogs), 'utf8', err => {
                if (err) console.log(err)
            })
            }
        })
    )


