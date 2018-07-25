$(document).ready(function () {
	if(!window.location.hash) {
  		$('.data-entry').addClass('hidden');
	}
	

	var filter = {
		category: null,
		type: null,
		license: null,
		year: null
	};
	var all_entries = [];
	var default_entry;

	function scrollToAnchor(aid) {
		var aTag = $("#" + aid);
		$('html,body').animate({scrollTop: aTag.offset().top - 50}, 'slow');
	}

	function buildEntryList() {

		var entries = all_entries.filter(function (entry) {
			if ((filter.categories != null) && (entry.categories.indexOf(filter.categories) < 0)) return false;
			if ((filter.types != null) && (entry.types.indexOf(filter.types) < 0)) return false;
			if ((filter.licenses != null) && (entry.licenses.indexOf(filter.licenses) < 0)) return false;
			if ((filter.years != null) && (entry.years.indexOf(filter.years) < 0)) return false;
			if ((filter.region != null) && (entry.region.indexOf(filter.region) < 0)) return false;

			return true;
		});

		// for each data entry a link in navigation
		var htm = entries.map(function (entry) {
			return '<li><a href="#' + entry.id + '" value="' + entry.id + '">' + entry.name + '</a></li>';
		}).join('');
		if (entries.length == 0) {
			htm = '<li><span>Keine Einträge mit diesen Filterkriterien</span></li>'
		}
		$(".nav-entries").html(htm);
		$(".nav-entries a").click(function (e) {
			var id = $(e.currentTarget).attr('value');
			$('.data-entry').addClass('hidden');
			$(".nav-entries li").removeClass('active');
			$('#' + id).removeClass('hidden');
			$(".nav-entries a[value='" + id + "']").parent().addClass('active');
			scrollToAnchor(id);
			e.stopPropagation();
			return false;
		});
	}

	function collectEntries() {
		// collect data entries´
		console.log("collect entries called");
		$('.data-entry').each(function (i, e) {
			e = $(e);
			var entry = {
				id: e.attr('id'),
				name: $('.data-interlude h3', e).text(),
				categories: [],
				licenses: [],
				types: [],
				years: [],
				region: []
			};
			$('.data-category .label', e).each(function (i, e) {
				entry.categories.push($(e).text());
			});
			$('.data-type .label', e).each(function (i, e) {
				entry.types.push($(e).text());
			});
			$('.data-license .label', e).each(function (i, e) {
				entry.licenses.push($(e).text());
			});
			$('.data-year .label', e).each(function (i, e) {
				entry.years.push($(e).text());
			});
			$('.data-region .label', e).each(function (i, e) {
				entry.region.push($(e).text());
			});

			if (entry.id !== 'start')
				all_entries.push(entry);
		});
		all_entries.sort(function (a, b) {
			if (a.name > b.name) return 1;
			if (a.name < b.name) return - 1;
			return 0;
		});
	}

	function fillFilter(mode, labeltype) {
		//collect filter properties

		var list = [];
		all_entries.forEach(function (entry) {
			entry[mode].forEach(function (cat) {
				if (list.indexOf(cat) < 0) list.push(cat);
			});
		});
		list.sort(function (a, b) {
			if (a[a.length-1] > b[b.length-1]) return 1;
			if (a[a.length-1] < b[b.length-1]) return - 1;
			return 0;
		});
		var htm = list.map(function (entry) {
			console.log(entry);
			return '<a href value="' + entry + '" class="label label-' + labeltype + '">' + entry + '</a>';
		}).join(' – ');
		console.log(htm);
		$(".nav-filter-" + mode).html(htm);
		//toggle filter properties
		$(".nav-filter-" + mode + " a").click(function (e) {
			var val = $(e.currentTarget).attr('value');
			if ($(e.currentTarget).hasClass('active')) {
				val = null;
			}
			$(".nav-filter-" + mode + " a").removeClass('active');
			filter[mode] = val;
			if (val) {
				$(e.currentTarget).addClass('active');
			}
			buildEntryList();
			e.stopPropagation();
			return false;
		});
	}

	collectEntries();
	fillFilter('categories', 'default');
	fillFilter('types', 'info');
	fillFilter('licenses', 'danger');
	fillFilter('years', 'warning');
	fillFilter('region', 'primary');
	
	//HACK: Set filter for 2015
//	filter['years'] = '2015';
	buildEntryList();


	//show start
	$('#start').removeClass('hidden');

	$('#default_entry').addClass('active');
	console.log($('#default_entry'));

	//expand/collapse filtersection
	$(".nav-filter-toggle").click(function (e) {
		var el = $(e.currentTarget);
		var mode = el.attr('data-filter');
		if (!el.hasClass('hidden')) {
			filter[mode] = null;
			$(".nav-filter-" + mode + " a").removeClass('active');
			buildEntryList();
		}
		el.toggleClass('dropup');
		el.next().toggleClass('hidden');
		e.stopPropagation();
		return false;
	});

	//go to top - link
	$(".navigation-gotop").click(function (e) {
		scrollToAnchor('navigation-top');
		e.stopPropagation();
		return false;
	});

	// show all - link
	$(".navigation-all").click(function (e) {
		$('.data-entry').removeClass('hidden');
		$("#navigation-entries li").removeClass('active');
		e.stopPropagation();
		return false;
	});



});
