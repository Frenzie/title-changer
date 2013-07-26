// ==UserScript==
// @name		Title Changer
// @author		Frenzie
// @version		0.4
// @namespace		http://extendopera.org/userjs/content/title-changer
// @description		Changes the document title of websites in a pre-ordained manner.
// @include		*
// ==/UserScript==
// Changelog
// 0.1 Oct 27, 2011 Proof of concept.
// 0.2 Oct 27, 2011 Full URL matching instead of just hostname.
// 0.3 Oct 28, 2011 Had to include the possibility of using regexp properly.
// 0.4 Slightly changed the way settings work.

(function () {
	'use strict';
	// Check whether the variable UJS_title_changes_settings was defined in a user preferences file.
	// If defined, copy the array. If not, define a new array.
	var UJS_title_changes = (typeof UJS_title_changes_settings !== 'undefined') ? UJS_title_changes_settings : [];
	
	// Title changes go here. These examples should help you get started.
	UJS_title_changes[UJS_title_changes.length] = ['en.wikipedia.org', 'Wikipedia, the free encyclopedia', 'Wikipedia'];
	UJS_title_changes[UJS_title_changes.length] = ['my.opera.com/community/forums', '- Opera Community', 'MyOpera'];
	//UJS_title_changes[UJS_title_changes.length] = ['www.lme.com', /.*/, 'London Metal Exchange']; // Changes the title of every page on this site to London Metal Exchange. Quick overview of regexp here: http://www.w3schools.com/jsref/jsref_obj_regexp.asp
	
	for (var i=0; i<UJS_title_changes.length; i++) {
		var location_match =  UJS_title_changes[i][0];
		var title_match = UJS_title_changes[i][1];
		var title_replace = UJS_title_changes[i][2];
		
		if (
			(location.toString().indexOf( location_match ) !== -1)
			&& ( (document.title.indexOf( title_match ) !== -1) || document.title.match( title_match ) )
		) {
			document.title = document.title.replace(title_match, title_replace);
		}
	}
})();