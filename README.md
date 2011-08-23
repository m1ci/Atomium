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
Use this method after every creation of "new Athomium(data)" in order to initialize the parser and start parsing the Atom data. Returns nothing.
### getFeedId()
This method returns an object that has the ID of the Atom feed. Returned object is as it is described below.
### getFeedTitle()
This method returns an object that has the Title of the Atom feed. Returned object is as it is described below.
### getFeedSubtitle()
This method returns an object that has the Subtitle of the Atom feed. Returned object is as it is described below.
### getFeedLinks()
This method returns an array of objects that has the Link element of the Atom feed.
### getFeedLogo()
This method returns an object that has the logo url of the Atom feed. Returned object is as it is described below.
### getFeedUpdated()
This method returns an object that has the last time the feed was modified of the Atom feed. Returned object is as it is described below.
### getFeedAuthors() ...
### getFeedGenerator() ...
### getFeedCategories() ...
### getFeedContributors() ...
### getFeedIcon() ...
### getFeedRights() ...
### getFeedExtensionElements() ...
### getFeedEntries() ...

## TODO
- Entry parser
- ...