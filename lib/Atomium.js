var DomJS = require("dom-js").DomJS,
    fs = require('fs'),
    util = require('util');
    
module.exports = Atomium;    
    
var domjs = new DomJS();

function Atomium(xml) {
    this.xml = xml;
}



/********************** PUBLIC METHODS **********************/
Atomium.prototype.init = function () {
    
    this.xml = this._replace(this.xml,"\n","");
    this.xml = this._replace(this.xml,"\r","");
    this.xml = this._replace(this.xml,"\t","");
    this._parse();
};

Atomium.prototype.getFeedId = function() {
    return this.feedid;
};
Atomium.prototype.setFeedId = function(a) {
    this.feedid = a;
}

Atomium.prototype.getFeedTitle = function() {
    return this.feedtitle;
};
Atomium.prototype.setFeedTitle = function(feedtitle) {
    this.feedtitle = feedtitle;
}

Atomium.prototype.getFeedSubtitle = function() {
    return this.feedsubtitle;
};
Atomium.prototype.setFeedSubtitle = function(feedsubtitle) {
    this.feedsubtitle = feedsubtitle;
}

Atomium.prototype.getFeedLinks = function() {
    return this.feedlinks;
};
Atomium.prototype.setFeedLinks = function(feedlinks) {
    this.feedlinks = feedlinks;
}

Atomium.prototype.getFeedLogo = function() {
    return this.feedlogo;
};
Atomium.prototype.setFeedLogo = function(feedlogo) {
    this.feedlogo = feedlogo;
}

Atomium.prototype.getFeedUpdated = function() {
    return this.feedupdated;
};
Atomium.prototype.setFeedUpdated = function(feedupdated) {
    this.feedupdated = feedupdated;
}

Atomium.prototype.getFeedAuthors = function() {
    return this.feedauthors;
};
Atomium.prototype.setFeedAuthors = function(feedauthors) {
    this.feedauthors = feedauthors;
}

Atomium.prototype.getFeedGenerator = function() {
    return this.feedgenerator;
};
Atomium.prototype.setFeedGenerator = function(feedgenerator) {
    this.feedgenerator = feedgenerator;
}

Atomium.prototype.getFeedCategories = function() {
    return this.feedcategories;
};
Atomium.prototype.setFeedCategories = function(feedcategories) {
    this.feedcategories = feedcategories;
}

Atomium.prototype.getFeedContributors = function() {
    return this.feedcontributors;
};
Atomium.prototype.setFeedContributors = function(feedcontributors) {
    this.feedcontributors = feedcontributors;
}

Atomium.prototype.getFeedIcon = function() {
    return this.feedicon;
};
Atomium.prototype.setFeedIcon = function(feedicon) {
    this.feedicon = feedicon;
}

Atomium.prototype.getFeedRights = function() {
    return this.feedrights;
};
Atomium.prototype.setFeedRights = function(feedrights) {
    this.feedrights = feedrights;
}

Atomium.prototype.getFeedExtensionElements = function() {
    return this.feedextensionelements;
};
Atomium.prototype.setFeedExtensionElements = function(feedextensionelements) {
    this.feedextensionelements = feedextensionelements;
}

Atomium.prototype.getFeedEntries = function() {
    return this.feedentries;
};
Atomium.prototype.setFeedEntries = function(feedentries) {
    this.feedentries = feedentries;
}
/********************** PRIVATE METHODS **********************/
Atomium.prototype._replace = function(string,text,by) {
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += this._replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
};

Atomium.prototype._parse = function(){
    var feedidtemp;
    var feedtitletemp;
    var feedsubtitletemp;
    var feedlinkstemp = [];
    var feedlogotemp;
    var feedupdatedtemp;
    var feedauthorstemp = [];
    var feedgeneratortemp;
    var feedcategoriestemp = [];
    var feedentriestemp = [];
    var feedicontemp;
    var feedrightstemp;
    var feedextensionelementstemp = [];
    var feedcontributorstemp = [];
    domjs.parse(this.xml, function(err, dom) {
    console.log(util.inspect(dom, false, 23));
//    console.log("serializes to : " + dom.toXml());
    for(i in dom.children) {
        console.log(dom.children[i].name);
        if(dom.children[i].name == 'id') {
            feedidtemp = dom.children[i];
        }else
        if(dom.children[i].name == 'title') {
            feedtitletemp = dom.children[i];
        }else
        if(dom.children[i].name == 'subtitle') {
            feedsubtitletemp = dom.children[i];
        }else
        if(dom.children[i].name == 'link') {
            feedlinkstemp.push(dom.children[i]);
        }else
        if(dom.children[i].name == 'logo') {
            feedlogotemp = dom.children[i];
        }else
        if(dom.children[i].name == 'updated') {
            feedupdatedtemp = dom.children[i];
        }else
        if(dom.children[i].name == 'author') {
            feedauthorstemp.push(dom.children[i]);
        }else
        if(dom.children[i].name == 'generator') {
            feedgeneratortemp = dom.children[i];
        }else
        if(dom.children[i].name == 'category') {
            feedcategoriestemp.push(dom.children[i]);
        }else
        if(dom.children[i].name == 'contributor') {
            feedcontributorstemp.push(dom.children[i]);
        }else
        if(dom.children[i].name == 'icon') {
            feedicontemp =  dom.children[i];
        }else
        if(dom.children[i].name == 'rights') {
            feedrightstemp =  dom.children[i];
        }else
        if(dom.children[i].name == 'entry') {
            feedentriestemp.push(dom.children[i]);
        }else
            feedextensionelementstemp.push(dom.children[i]);
    }
    
/*    
        //Web API title
        console.log("Web API title: " + dom.children[11].children[1].children[0].text);
                
        //API summary
        console.log("Summary: " + dom.children[11].children[7].children[0].text);
                
        //API rating
        console.log("Rating: " + dom.children[11].children[8].children[0].children[0].children[0].text);

        //API description
        console.log("Description: " + dom.children[11].children[8].children[0].children[5].children[0].text);
                                
        //Icon url
        console.log("Icon url: " + dom.children[11].children[8].children[0].children[9].children[0].text);
        
        //Date modified
        console.log("Date modified: " + dom.children[11].children[8].children[0].children[13].children[0].text);

                //Tags
                var tags = dom.children[11].children[8].children[0].children[17].children;
                for (i in tags) {
                    console.log("Tag: " + tags[i].children[0].text);
                }
                console.log("Category: " + dom.children[11].children[8].children[0].children[18].children[0].text);
                console.log("Supporting protocol: " + dom.children[11].children[8].children[0].children[19].children[0].text);

                //endpoint
                if (dom.children[11].children[8].children[0].children[20].children.length <1) {
                    console.log("API endpoint: /");
                } else {
                    console.log("API endpoint: " + dom.children[11].children[8].children[0].children[20].children[0].text);
                }
                //response formats
                var response_formats = dom.children[11].children[8].children[0].children[23].children[0].text.split(",");
                for (i in response_formats) {
                    console.log("Response format:" + response_formats[i].replace(' ',''));
                }
                //authentication
                var authentication = dom.children[11].children[8].children[0].children[27].children[0].text.split(",");
                for (i in authentication) {
                    console.log("Authentication supported:" + authentication[i].replace(' ',''));
                }
                //SSL
                console.log("SSL: " + dom.children[11].children[8].children[0].children[28].children[0].text);
                //Read-only
                console.log("Read-only: " + dom.children[11].children[8].children[0].children[29].children[0].text);
                //Blog
                console.log("Blog: " + dom.children[11].children[8].children[0].children[32].children[0].text);

                //Account required
                var account = dom.children[11].children[8].children[0].children[35].children;
                if (account.length >= 1)
                    console.log("Account required: " + account[0].text);
                else
                    console.log("Account required: /");

                //Commercial licensing
                var commercial = dom.children[11].children[8].children[0].children[36].children;
                if(commercial.length >= 1)
                    console.log("Commercial licensing: " + commercial[0].text);
                else
                    console.log("Commercial licensing: /");
                    
                //Non-commercial licensing
                var noncommercial = dom.children[11].children[8].children[0].children[39].children;
                if(noncommercial.length >= 1)
                    console.log("Non-commercial licensing: " + noncommercial[0].text);
                else
                    console.log("Non-commercial licensing: /");

                //Data licensing
                var datalicensing = dom.children[11].children[8].children[0].children[40].children;
                if(datalicensing.length >= 1)
                    console.log("Data licensing: " + datalicensing[0].text);
                else
                    console.log("Data licensing: /");
                    
                //Usage fees
                var fees = dom.children[11].children[8].children[0].children[41].children;
                if(fees.length >= 1)
                    console.log("Usage fees: " + fees[0].text);
                else
                    console.log("Usage fees: /");
                    
                //Usage limits
                var limits = dom.children[11].children[8].children[0].children[42].children;
                if(limits.length >= 1)
                    console.log("Usage limits: " + limits[0].text);
                else
                    console.log("Usage limits: /");                    
*/                    
            });
        this.setFeedId(feedidtemp);
        this.setFeedTitle(feedtitletemp);
        this.setFeedSubtitle(feedsubtitletemp);
        this.setFeedLinks(feedlinkstemp);
        this.setFeedLogo(feedlogotemp);
        this.setFeedUpdated(feedupdatedtemp);
        this.setFeedAuthors(feedauthorstemp);
        this.setFeedGenerator(feedgeneratortemp);
        this.setFeedCategories(feedcategoriestemp);
        this.setFeedContributors(feedcontributorstemp);
        this.setFeedIcon(feedicontemp);
        this.setFeedRights(feedrightstemp);
        this.setFeedExtensionElements(feedextensionelementstemp);
        this.setFeedEntries(feedentriestemp);
};