# Atomium 

Atomium is pure JavaScript parser for Node.js

If you want to try the module or contribute improving it, you are welcome.

## Usage

    var Atomium = require('./lib/Atomium'),feed;
    
    feed = new Atomium(data); //data is actualy the Atom string we want to parse
    //initialize and parse the atom feed 
    feed.init();

At this stage the module supports the following methods:

### init()
Use this method after every creation of "new Athomium(data)" in order to initialize the parser and parse the Atom data. Returns nothing.
### getFeedId()
- returns an object* that has the ID of the Atom feed.
### getFeedTitle()
- returns an object* that has the Title of the Atom feed.
### getFeedSubtitle()
- returns an object* that has the Subtitle of the Atom feed.
### getFeedLinks()
- returns an array** of objects that has the Link element of the Atom feed.
### getFeedLogo()
- returns an object* that has the logo url of the Atom feed.
### getFeedUpdated()
- returns an object* that has the last time the feed was modified of the Atom feed.
### getFeedAuthors()
- returns an array** of objects that has the author information. 
### getFeedGenerator()
- returns the feed generator object*.
### getFeedCategories()
- returns an array** of objects that have the feed category.
### getFeedContributors()
- returns an array** of objects that have the feed contributors.
### getFeedIcon()
- returns icon image object* that provides visual identification for the feed.
### getFeedRights()
- returns object* that holds information about the rights held in and over the feed.
### getFeedExtensionElements()
- returns array** of all extension elements of the feed.
### getFeedEntries()
- returns an array** of all feed entries.


### *
    Returned single objects looks like this:

    { name : "element name",
        attributes : {}
        children [
            { name : "elem", attributes : {att:'val1'}, children [] },
            { name : "elem", attributes : {att:'val1'}, children [] },
            { name : "elem", attributes : {att:'val1'}, children [] }
        ]
    }



### **

    The arrays have 0..n number of objects discribed before.


## TODO
- Entry parser
- ...