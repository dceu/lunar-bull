# donovanuy.com powered by REACT

a transparency

# Begin working

***2022 branch is [sun-tiger](https://github.com/dceu/lunar-bull/tree/sun-tiger/)***


``` $ npm install```
install package files

**It's advised to keep this file open to keep track of to-do's**

# Deploy
merge to ***[live](https://github.com/dceu/lunar-bull/tree/live)*** branch when ready for deployment 

## Using Heroku Git

### Install the Heroku CLI

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

login to Heroku account and follow the prompts to create a new SSH public key.

``` $ heroku login ```

### Clone the repo
Use Git to clone ***live*** source code to the local machine.

``` $ heroku git: clone -a lunar-bull-live ```

``` $ cd lunar-bull live ```

### deploying changes to Heroku using Git

``` $ git add . ```

``` $ git commit -am "notes and whatnot" ```

``` $ git push heroku master ```

---

# Components to build

- [x] Navigation
- [x] Header
- [ ] ~~Logo~~
- [x] Button
- [x] Card

# Pages and Content Overview

# Landing

    Initial landing page to be a directory, which be used as a navigational component, as the site expands.

---
## ~~Resume~~ ***Portfolio***

~~One scrollable page that features companies I've worked for along with a description of occupational responsibilities in a descending chronological order.~~

### ~~Features~~:

- [ ] ~~Brand Splash of company~~
- [ ] ~~clownfish photo with "reference to uniform"~~
- [ ] ~~links to company as well as geographical location.~~
- [ ] ~~anecdotal summary~~

## ~~Projects~~

***Displayed portfolio of projects in a "rolodex" style: highlighting technologies used, and apis interfaced with; as well as brief anecdotal notes about problems faced in development, or anything new "learned" throughout the process.***

### Features:

- [ ] main flexbox container for all projects
- [ ] card per project
- [ ] on:hover effects regarding technologies/apis
- [ ] expandable brief on:click
- [ ] splash image of project (code or animated minimized "featurette")

---
## ~~Bio~~

~~One page bio focusing on origins professional interests, and hobbies.~~

### ~~Features:~~

- [x] ~~headshot~~
- [x] ~~one long run-on sentence.~~

---
## Contact

    Various methods of contact

### Features:

- [ ] email
- [ ] socials

---

# Future Possible Extensions:

## Page: Blog

    A blog, perhaps powered by HUGO, NEXTJS, GATSBY, etc.
    == Rendering of md files from a google drive folder ==

### Features:

- [ ] splash
- [ ] title, date
- [ ] brief
