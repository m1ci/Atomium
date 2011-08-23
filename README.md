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
