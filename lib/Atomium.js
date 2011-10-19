var DomJS = require("dom-js").DomJS,
    fs = require('fs'),
    util = require('util');

module.exports = Atomium;

function Atomium(xml) {
    this.xml = xml;
}

Atomium.prototype.init = function () {
    this.domjs = new DomJS();
    this.xml = this._replace(this.xml,"\n","");
    this.xml = this._replace(this.xml,"\r","");
    this.xml = this._replace(this.xml,"\t","");
    this._parseFeed();
};

function Entry() {

    this.entryAuthors = [];
    this.entryCategories = [];
    this.entryContributors = [];
    this.entryId = null;
    this.entryLinks = [];
    this.entryPublished = null;
    this.entryRights = null;
    this.entrySource = null;
    this.entrySummary = null;
    this.entryTitle = null;
    this.entryUpdated = null;
    this.entryExtensionElements = [];
}

/*********Getters and Setters for ENTRY element*********/
Entry.prototype.getEntryAuthors = function(entryAuthors){
    return this.entryAuthors;
};
Entry.prototype.setEntryAuthors = function(entryAuthors){
    this.entryAuthors.push(entryAuthors);
};
Entry.prototype.getEntryCategories = function(){
    return this.entryCategories;
};
Entry.prototype.setEntryCategories = function(entryCategories){
    this.entryCategories.push(entryCategories);
};
Entry.prototype.getEntryContent = function(){
    return this.entryContent;
};
Entry.prototype.setEntryContent = function(entryContent){
    this.entryContent = entryContent;
};
Entry.prototype.getEntryContributors = function(){
    return this.entryContributors;
};
Entry.prototype.setEntryContributors = function(entryContributor){
    this.entryContributors.push(entryContributor);
};
Entry.prototype.getEntryId = function(){
    return this.entryId;
};
Entry.prototype.setEntryId = function(entryId){
    this.entryId=entryId;
};
Entry.prototype.getEntryLinks = function(entryLinks){
    return this.entryLinks;
};
Entry.prototype.setEntryLinks = function(entryLinks){
    this.entryLinks.push(entryLinks);
};
Entry.prototype.getEntryPublished = function(entryPublished){
    return this.entryPublished;
};
Entry.prototype.setEntryPublished = function(entryPublished){
    this.entryPublished=entryPublished;
};
Entry.prototype.getEntryRights = function(entryRights){
    return this.entryRights;
};
Entry.prototype.setEntryRights = function(entryRights){
    this.entryPublished=entryRights;
};
Entry.prototype.getEntrySource = function(entrySoruce){
    return this.entrySource;
};
Entry.prototype.setEntrySource = function(entrySource){
    this.entrySource=entrySource;
};
Entry.prototype.getEntrySummary = function(entrySummary){
    return this.entrySummary;
};
Entry.prototype.setEntrySummary = function(entrySummary){
    this.entrySummary=entrySummary;
};
Entry.prototype.getEntryTitle = function(entryTitle){
    return this.entryTitle;
};
Entry.prototype.setEntryTitle = function(entryTitle){
    this.entryTitle = entryTitle;
};
Entry.prototype.getEntryUpdated = function(entryUpdated){
    return this.entryUpdated;
};
Entry.prototype.setEntryUpdated = function(entryUpdated){
    this.entryUpdated=entryUpdated;
};
Entry.prototype.getEntryExtensionElements = function(entryExtensionElements){
    return this.entryExtensionElements;
};
Entry.prototype.setEntryExtensionElements = function(entryExtensionElements){
    this.entryExtensionElements.push(entryExtensionElements);
};

/*********Getters and Setters for the FEED element*********/
Atomium.prototype.getFeedId = function() {
    return this.feedid;
};
Atomium.prototype.setFeedId = function(feedid) {
    this.feedid = feedid;
};
Atomium.prototype.getFeedTitle = function() {
    return this.feedtitle;
};
Atomium.prototype.setFeedTitle = function(feedtitle) {
    this.feedtitle = feedtitle;
};
Atomium.prototype.getFeedSubtitle = function() {
    return this.feedsubtitle;
};
Atomium.prototype.setFeedSubtitle = function(feedsubtitle) {
    this.feedsubtitle = feedsubtitle;
};
Atomium.prototype.getFeedLinks = function() {
    return this.feedlinks;
};
Atomium.prototype.setFeedLinks = function(feedlinks) {
    this.feedlinks = feedlinks;
};
Atomium.prototype.getFeedLogo = function() {
    return this.feedlogo;
};
Atomium.prototype.setFeedLogo = function(feedlogo) {
    this.feedlogo = feedlogo;
};
Atomium.prototype.getFeedUpdated = function() {
    return this.feedupdated;
};
Atomium.prototype.setFeedUpdated = function(feedupdated) {
    this.feedupdated = feedupdated;
};
Atomium.prototype.getFeedAuthors = function() {
    return this.feedauthors;
};
Atomium.prototype.setFeedAuthors = function(feedauthors) {
    this.feedauthors = feedauthors;
};
Atomium.prototype.getFeedGenerator = function() {
    return this.feedgenerator;
};
Atomium.prototype.setFeedGenerator = function(feedgenerator) {
    this.feedgenerator = feedgenerator;
};
Atomium.prototype.getFeedCategories = function() {
    return this.feedcategories;
};
Atomium.prototype.setFeedCategories = function(feedcategories) {
    this.feedcategories = feedcategories;
};
Atomium.prototype.getFeedContributors = function() {
    return this.feedcontributors;
};
Atomium.prototype.setFeedContributors = function(feedcontributors) {
    this.feedcontributors = feedcontributors;
};
Atomium.prototype.getFeedIcon = function() {
    return this.feedicon;
};
Atomium.prototype.setFeedIcon = function(feedicon) {
    this.feedicon = feedicon;
};
Atomium.prototype.getFeedRights = function() {
    return this.feedrights;
};
Atomium.prototype.setFeedRights = function(feedrights) {
    this.feedrights = feedrights;
};
Atomium.prototype.getFeedExtensionElements = function() {
    return this.feedextensionelements;
};
Atomium.prototype.setFeedExtensionElements = function(feedextensionelements) {
    this.feedextensionelements = feedextensionelements;
};
Atomium.prototype.getFeedEntries = function() {
    return this.feedentries;
};
Atomium.prototype.setFeedEntries = function(feedentries) {
    this.feedentries = feedentries;
};

/********************** PRIVATE METHODS **********************/
Atomium.prototype._replace = function(string,text,by) {
    var strLength = string.length, txtLength = text.length;
    if ((strLength === 0) || (txtLength === 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += this._replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
};

Atomium.prototype._parseFeed = function(){
    var feedauthorstemp = [];
    var feedcategoriestemp = [];
    var feedcontributorstemp = [];
    var feedgeneratortemp = null;
    var feedicontemp = null;
    var feedidtemp = null;
    var feedlinkstemp = [];
    var feedlogotemp = null;
    var feedrightstemp = null;
    var feedsubtitletemp = null;
    var feedtitletemp = null;
    var feedupdatedtemp = null;
    var feedextensionelementstemp = [];
    var feedentriestemp = [];
    this.domjs.reset();
    this.domjs.parse(this.xml, function(err, dom) {
//    console.log(util.inspect(dom, false, 23));
//    console.log("serializes to : " + dom.toXml());

    for(var i in dom.children) {
//        console.log(dom.children[i].name);
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
            var entry = new Entry();
            var entryElements = dom.children[i].children;
            for(var j in entryElements){
//                console.log('Entry element: '+entryElements[j].name);
                if(entryElements[j].name == 'author'){
                    entry.setEntryAuthors(entryElements[j]);
                } else
                if(entryElements[j].name == 'category'){
                    entry.setEntryCategories(entryElements[j]);
                } else
                if(entryElements[j].name == 'content'){
                    entry.setEntryContent(entryElements[j]);
                } else
                if(entryElements[j].name == 'contributor'){
                    entry.setEntryContributors(entryElements[j]);
                } else
                if(entryElements[j].name == 'id'){
                    entry.setEntryId(entryElements[j]);
                } else
                if(entryElements[j].name == 'link'){
                    entry.setEntryLinks(entryElements[j]);
                } else
                if(entryElements[j].name == 'published'){
                    entry.setEntryPublished(entryElements[j]);
                } else
                if(entryElements[j].name == 'rights'){
                    entry.setEntryRights(entryElements[j]);
                } else
                if(entryElements[j].name == 'source'){
                    entry.setEntrySource(entryElements[j]);
                } else
                if(entryElements[j].name == 'summary'){
                    entry.setEntrySummary(entryElements[j]);
                } else
                if(entryElements[j].name == 'title'){
                    entry.setEntryTitle(entryElements[j]);
                } else
                if(entryElements[j].name == 'updated'){
                    entry.setEntryUpdated(entryElements[j]);
                } else
                if(entryElements[j].name == 'published'){
                    entry.setEntryPublished(entryElements[j]);
                } else
                if(/\S/.test(entryElements[j].name)) {
                    // string is not empty and not just whitespace
                    entry.setEntryExtensionElements(entryElements[j]);
                } else {
                    //do nothing, its not important element
                }
            }
            feedentriestemp.push(entry);
        }else
        
        feedextensionelementstemp.push(dom.children[i]);
    }
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