$(document).ready(function () {

	var projects = {};
	var persons = {};

	var currentProjectIndex = 0;

	function fillAllProjectsSection() {
		var entrystring = '';
		$('#all-projects').html('');
		$.each(projects, function(index, val) {
			entrystring += '<div class="project-tile">' +
				'<a href="' + window.location.pathname + '?project_id=' + index + '">' +
				'<img src="' + val.tile + '"/><p>' + val.name + '</p></a></div>';
				console.log(entrystring);
		});
		$('#all-projects').html(entrystring);
	}

	function getSymbolByType(type) {
		var result = 'glyph ';
		switch(type) {
			case "projects-website":
				result += 'house-glyph';
				break;
			case "github" :
				result += 'git-glyph';
				break;
			case "mail":
				result += 'mail-glyph';
				break;
			case "twitter" :
				result += 'twitter-glyph';
				break;
		}
		return '<span class="' + result + '" />';
	}

	function fillProjectInformation(currentProject) {
		$('#projectlinks').html('');
		$.each(currentProject.links, function(index, val) {
			var symbol = getSymbolByType(val.class);
			$('#projectlinks').append(val.text + ' <a href="' + val.link + '">' + symbol + '</a><br />');
		});

		$('#data').html('');
		$.each(currentProject.data, function(index, val){
			$('#data').append(val + ",<br />");
		});
	}

	function getContactHTMLString(entitytype, value) {
		var typestring = getSymbolByType(entitytype);
		var result = '<a href="';
		switch(entitytype) {
			case "mail" :
				result += 'mailto:' + value;
				break;
			case "twitter" :
				result += 'http://twitter.com/' + value;
				break;
			case "github" :
				result += 'https://github.com/' + value;
		}
		result += '">' + typestring + '</a>';
		return result;
	}

	function updateTeam(member) {
		$('#team').html('');
		$.each(member, function(index, val) {
			var currentMember = persons[val];
			var memberstring = currentMember.name;
			if (currentMember.contact) {
				$.each(currentMember.contact, function(index, el) {
					memberstring += getContactHTMLString(index, el);
				});
			}
			if (index !== 0) {
				memberstring = '<br />' + memberstring;
			} 
			$('#team').append(memberstring);
		});
	}

	function setProject(index) {
		var currentProject; 
		if (index >= 0) {
			if (index < projects.length) {
				currentProject = projects[index];
				currentProjectIndex = index;	
			} 
			else{
				currentProject = projects[0];
				currentProjectIndex = 0;
			}
		} else {
			currentProject = projects[projects.length - 1];
			currentProjectIndex = projects.length - 1;
		}

		$('#project-name').html(currentProject.name);
		$('#project-description').html(currentProject.description);
		$('#project-image').attr('src', currentProject.images[0]);
		
		fillProjectInformation(currentProject);
		updateTeam(currentProject.team);
		console.log(currentProject);
	}

	$.getJSON('/js/projects.json', function(data) {
		projects = data.projects;
		persons = data.persons;
		
		fillAllProjectsSection();
		var projectId = getQueryVariable("project_id");
		 if (projectId) {
		 	setProject(parseInt(projectId));
		 }
		 else {
		 	setProject(0);
		 }
	});

	$('#next-project').click(function(event) {
		currentProjectIndex++;
		setProject(currentProjectIndex);
		insertParam("project_id", currentProjectIndex);
		event.preventDefault();
	});

	$('#previous-project').click(function() {
		currentProjectIndex--;
		setProject(currentProjectIndex);
		insertParam("project_id", currentProjectIndex);
		event.preventDefault();
	});

	$('.projectlink').click(function() {

	})

	//helper
	function getQueryVariable(variable) {
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  var i = 0;
	  for (i; i < vars.length; i++) {
	    var pair = vars[i].split("=");
	    if (pair[0] == variable) {
	      return pair[1];
	    }
	  } 
	}

	function insertParam(key, value)
	{
		var parameterlist = [];
    	key = encodeURI(key); 
    	value = encodeURI(value);
    	
    	var url = document.location.href;
    	console.log(url);
    	var urlparts = url.split('?');
    	
    	var set = false;

    	if (urlparts.length > 1) {
    		parameterlist = urlparts[1].split('&');
    		$.each(parameterlist, function(index, param) {
    			var pair = param.split('=');
    	     	if (pair[0]==key)
	         	{
	            	pair[1] = value;
	            	parameterlist[index] = pair.join('=');
	            	set = true;
	        	}
    		});
    	}
    	
    	if (!set) {
    		parameterlist.push([key,value].join('='));
    	}

    	urlparts[1] = parameterlist.join('&');
    	url = urlparts.join('?');
    	console.log(url);
	    history.pushState(null, null, url);

	    // if(i<0) {kvp[kvp.length] = [key,value].join('=');}

	    //this will reload the page, it's likely better to store this until finished
	    //console.log(kvp.join('&')); 
	}
});