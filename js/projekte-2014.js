

$(document).ready(function () {

	var projects = {};
	var persons = {};

	currentProject = 0;


	function getSymbolByLinktype(type) {
		return "S";
	}

	function getSymbolForContactType(type) {
		return '#';
	}

	function fillProjectInformation(currentProject) {
		$('#projectlinks').html('');
		$.each(currentProject.links, function(index, val) {
			var symbol = getSymbolByLinktype(val.class)
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
			currentMember = persons[val];
			$('#team').append(currentMember.name + '<br />');
		});
	}

	function setProject(index) {
		var currentProject = projects[index];
		console.log(currentProject);
		$('#project-name').html(currentProject.name);
		$('#project-description').html(currentProject.description);
		$('#project-image').attr('src', currentProject.images[0]);

		if (index < projects.length) {
			$('#next-project').html('<a href="#?project_id=' + ++index + '">Nächstes Projekt</a>');
		}

		if (index > 0) {
			$('#previous-project').html('<a href="#?project_id=' + --index + '">Vorheriges Projekt</a>');
		}
		
		fillProjectInformation(currentProject);
		updateTeam(currentProject.team)
		console.log(currentProject);
	}

	$.getJSON('/js/projects.json', function(data) {
		projects = data['projects'];
		persons = data['persons'];
		setProject(0);
	});

	$('#next-project').click(function() {
		currentProject++;
		setProject(currentProject);
	})

	$('#previous-project').click(function() {
		currentProject--;
		setProject(currentProject);
	})
});