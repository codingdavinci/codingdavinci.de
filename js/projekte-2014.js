

$(document).ready(function () {

	var projects = {};
	var persons = {};

	function setProject(index) {
		var currentProject = projects[index];
		$('#project-name').html(currentProject.name);
		$('#project-description').html(currentProject.description);
		$('#project-image').attr('src', currentProject.images[0]);
		console.log(currentProject);
	}

	$.getJSON('/js/projects.json', function(data) {
		projects = data['projects'];
		persons = data['persons'];
		setProject(0);
	});
});