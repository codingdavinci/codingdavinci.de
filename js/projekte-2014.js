

$(document).ready(function () {

	var projects = {};
	var persons = {};

	var currentProjectIndex = 0;

	function fillAllProjectsSection() {
		var entrystring = '';
		$('#all-projects').html('');
		$.each(projects, function(index, val) {
			entrystring += '<div class="col-md-3 project-tile"><img src="' + val.tile + '"/><p>' + val.name + '</p></div>';
		});
		$('#all-projects').html(entrystring);
	}

	function getSymbolByLinktype(type) {
		return "S";
	}

	function getSymbolForContactType(type) {
		return '#';
	}

	function fillProjectInformation(currentProject) {
		$('#projectlinks').html('');
		$.each(currentProject.links, function(index, val) {
			var symbol = getSymbolByLinktype(val.class);
			$('#projectlinks').append(val.text + ' <a href="' + val.link + '">' + symbol + '</a><br />');
		});

		$('#data').html('');
		$.each(currentProject.data, function(index, val){
			$('#data').append(val + ",<br />");
		});
	}

	function updateTeam(member) {
		$('#team').html('');
		$.each(member, function(index, val) {
			var currentMember = persons[val];
			$('#team').append(currentMember.name + '<br />');
		});
	}

	function setProject(index) {
		var currentProject; 
		if (index >= 0) {
			if (index < projects.length) {
				currentProject = projects[index];	
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
		event.preventDefault();
	});

	$('#previous-project').click(function() {
		currentProjectIndex--;
		setProject(currentProjectIndex);
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
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}
});