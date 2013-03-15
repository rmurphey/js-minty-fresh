/*****************************************************************************
 *   __  __            _       _             ___              _
 *   \ \/ _\     /\/\ (_)_ __ | |_ _   _    / __\ __ ___  ___| |__
 *    \ \ \     /    \| | '_ \| __| | | |  / _\| '__/ _ \/ __| '_ \
 * /\_/ /\ \   / /\/\ \ | | | | |_| |_| | / /  | | |  __/\__ \ | | |
 * \___/\__/   \/    \/_|_| |_|\__|\__, | \/   |_|  \___||___/_| |_|
 *                                 |___/
 *
 * Identifying and Eliminating Code Smells
 *
 * Rebecca Murphey
 * Senior Software Engineer at Bazaarvoice
 * @rmurphey • rmurphey.com
 *
 *****************************************************************************/
















// THE SMELL

function updateDates () {
  var startDate = $("#start-date").datepicker("getDate");

  $("#menu-item-1 .day").text( startDate.getDate() );
  $("#menu-item-1 .month").text( Util.monthToText(startDate.getMonth() ) );
  $("#menu-item-1 .year").text( startDate.getFullYear() );

  var endDate = $("#end-date").datepicker("getDate");

  $("#menu-item-2 .day").text( endDate.getDate() );
  $("#menu-item-2 .month").text( Util.monthToText( endDate.getMonth() ) );
  $("#menu-item-2 .year").text( endDate.getFullYear() );
}


















// THE FIX: functions

function updateDates () {
  connectDatepicker( $('#menu-item-1'), $('#start-date') );
  connectDatepicker( $('#menu-item-2'), $('#end-date') );

  function connectDatepicker (target, datepicker) {
    var date = datepicker.datepicker('getDate');

    target.find('.day').text( date.getDate() );
    target.find('.month').text( Util.monthToText( date.getMonth() ) );
    target.find('.year').text( date.getFullYear() );
  }
}









// OPPORTUNITY: associate date picker via data- attr
//
// <fieldset id="menu-item-1" data-datepicker="#start-date">
//   <span class="day"></span>
//   <span class="month"></span>
//   <span class="year"></span>
// </fieldset>

function updateDates () {
  connectDatepicker( $('#menu-item-1') );
  connectDatepicker( $('#menu-item-2') );

  function connectDatepicker (target) {
    var datepicker = $( target.attr('data-datepicker') );
    var date = datepicker.datepicker('getDate');

    target.find('.day').text( date.getDate() );
    target.find('.month').text( Util.monthToText( date.getMonth() ) );
    target.find('.year').text( date.getFullYear() );
  }
}














// THE SMELL

$('#countyLocation').change(selectedLocation);

function selectedLocation() {
  var selected = $('#countyLocation').val();

  if (selected == "Ireland") {
    var Ireland = new google.maps.LatLng(53.527248, -8.327637);
    map.setCenter(Ireland);
    map.setZoom(6);
  }

  if (selected == "Clare") {
    var Clare = new google.maps.LatLng(52.988337, -9.102173);
    map.setCenter(Clare);
    map.setZoom(8);
  }

  if (selected == "Dublin") {
    var Dublin = new google.maps.LatLng(53.399707, -6.262207);
    map.setCenter(Dublin);
    map.setZoom(9);
  }
}

















// THE FIX: objects

$('#countyLocation').change(selectedLocation);

function selectedLocation () {
  var selected = $('#countyLocation').val();

  var locations = {
    "Ireland" : {
      lat : 53.527248,
      lng : -8.327637,
      zoom : 6
    },
    "Clare" : {
      lat : 52.988337,
      lng : -9.102173,
      zoom : 8
    },
    "Dublin" : {
      lat : 53.399707,
      lng : -6.262207,
      zoom : 9
    }
  };

  var location = locations[selected];
  var center = new google.maps.LatLng(location.lat, location.lng);

  map.setCenter(center);
  map.setZoom(location.zoom);
}











// OPPORTUNITY: load data from the server
// - server-managed data!
// - return a promise -- more on that shortly

$('#countyLocation').change(selectedLocation);

function selectedLocation () {
  var selected = $("#countyLocation").val();

  return $.get('/data/locations.json', function(locations) {
    var location = locations[selected];
    var center = new google.maps.LatLng(location.lat, location.lng);

    map.setCenter(center);
    map.setZoom(location.zoom);
  });
}














// THE SMELL

function showPeople (people) {
  $.each(people, function (idx, person) {
    $('<li>', {
      id: 'person_' + person.id,
      text: person.name
    }).appendTo('#people');

    $('<button>', {
      id: 'button_' + person.id,
      text: 'Remove ' + person.name
    }).appendTo('#buttons');
  });

  $('#buttons button').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('id').replace('button_', '');
    $('#person_' + id).remove();
  });
}













// THE FIX: take advantage of closures

function showPeople (people) {
  $.each(people, function (idx, person) {
    var li = $('<li>', {
      text: person.name
    }).appendTo('#people');

    $('<button>', {
      text: 'Remove ' + person.name,
      click: function( e ) {
        e.preventDefault();
        li.remove();
      }
    })
    .appendTo('#buttons');
  });
}
























// THE SMELL

function showPrice (row, standardPrice, discountPrice, savings, isProrated, isDeferred) {

  var priceCol = row.find('td.price').eq(0);
  var discountCol = row.find('td.price').eq(1);
  var txt = '';

  if (!discountPrice && !standardPrice && !savings && !isProrated && !isDeferred) {
    discountCol.html('<img src="/img/loading.gif" />');
  } else {
    if (discountPrice && (standardPrice == discountPrice)) {
      priceCol.html('');
    } else {
      priceCol.html('<del>' + standardPrice + '</del>');
    }

    txt = '<strong>';

    if (discountPrice == '$0.00') {
      txt += 'FREE!';
    }

    if (isProrated) {
      txt += '*';
    } else if (isDeferred) {
      txt += '**';
    }

    txt += '</strong>';
  }

  discountCol.html(txt);
}
































showPrice(row, null, null, null, null, null);















// THE FIX: more & smaller functions

var priceInfo = {
  discountPrice: '$0.00',
  isProrated: true
};

var priceHtml = getPriceHtml(priceInfo);
var discountHtml = getDiscountHtml(priceInfo);

updateRow(row, priceHtml, discountHtml);

function getDiscountHtml (priceInfo) {
  var txt = '';

  if (priceInfo.discountPrice === '$0.00') {
    txt += 'FREE!';
  }

  if (priceInfo.isProrated) {
    txt += '*';
  }

  if (priceInfo.isDeferred) {
    txt += '**';
  }

  return txt ? ( '<strong>' + txt + '</strong>' ) :
    '<img src="/img/loading.gif" />';
}

function getPriceHtml (priceInfo) {
  if (!priceInfo.standardPrice) {
    return '';
  }

  if (priceInfo.standardPrice == priceInfo.discountPrice) {
    return '';
  }

  return '<del>' + priceInfo.standardPrice + '</del>';
}

function updateRow (row, priceHtml, discountHtml) {
  row.find('td.price').eq(0).html(priceHtml);
  row.find('td.price').eq(1).html(discountHtml);
}











// OPPORTUNITY: tests!

test('update row', function () {
  var t = $('<table><tr><td class="price"/><td class="discount"/></tr></td></table>');
  var row = t.find('tr');
  var priceHtml = '<p class="foo">price</p>';
  var discountHtml = '<p class="bar">discount</p>';

  udpateRow(row, priceHtml, discountHtml);

  assert.equal(row.find('td.price').html(), priceHtml);
  assert.equal(row.find('td.discount').html(), discountHtml);
});













// THE SMELL

function getSomeThings (callback) {
  var completed = 0;
  var people, tasks;

  $.ajax('/data/people.json', {
    dataType: 'json',
    success: function (data) {
      completed++;
      people = data.people;
      onFinished();
    }
  });

  $.ajax('/data/tasks.json', {
    dataType: 'json',
    success: function (data) {
      completed++;
      tasks = data.tasks;
      onFinished();
    }
  });

  function onFinished () {
    if (completed < 2) { return; }
    callback(people, tasks);
  }
}












// THE FIX: deferreds and promises

function getSomeThings (callback) {
  var people, tasks;

  var peopleRequest = $.ajax('/data/people.json', {
    dataType: 'json',
    success: function (data) {
      people = data.people;
    }
  });

  var taskRequest = $.ajax('/data/tasks.json', {
    dataType: 'json',
    success: function (data) {
      tasks = data.tasks;
    }
  });

  $.when(peopleRequest, taskRequest).done(function () {
    callback(people, tasks);
  });
}









// OPPORTUNITY: pre-processing your data, returning a promise

function getSomeThings (callback) {
  var peopleRequest = $.getJSON('/data/people.json')
                        .pipe(function (resp) {
                          return resp.people;
                        });

  var taskRequest = $.getJSON( '/data/tasks.json' )
                        .pipe(function (resp) {
                          return resp.tasks;
                        });

  return $.when(peopleRequest, taskRequest).done(callback);
}












// THE SMELL

function createTasksHtml (tasks) {

  $.each(tasks, function (entryIndex, entry) {
    var s_class;

    switch (this.status_id) {
      case 2:
        s_class = 'urgent';
        break;
      case 5:
        s_class = 'very_urgent';
        break;
      default:
        s_class = 'normal';
        break;
    }

    var tasks_ops = '<div id="d' + entryIndex + '" class="' + s_class + '"><input type="checkbox" id="c' + entryIndex + '" value="' + entryIndex + '" class="c_' + s_class + '"/> ' + this.task + '</div>';

    $('#tasks').append(tasks_ops);
  });
}













// THE FIX: templates

/*
<script type="text/template" id="tasks_template">
<% _.each(tasks, function(task) { %>

<div id="d<%= task.index %>" class="<% task.s_class %>">
  <input
    type="checkbox"
    id="c<%= task.index %>"
    value="<%= task.index %>"
    class="c_<%= task.s_class %>" >
  <%= task.task %>
</div>

<% }); %>
</script>
*/

function createTasksHtml (tasks) {
  var template = $('#tasks_template').text();

  tasks = $.map(tasks, function (entryIndex, task) {
    var classes = {
      2: 'urgent',
      5: 'very_urgent'
    };

    task.s_class = classes[entry.status_id] || 'normal';
    task.index = entryIndex;

    return task;
  });

  $('#tasks').append( _.template(tasks_template, tasks) );
}

// OPPORTUNITY: hosted templates w/caching

function getTemplate (name) {
  window._templateCache = window._templateCache || {};

  if (!window._templateCache[name]) {
    window._templateCache[name] =
      $.get('/templates/' + name).pipe(_.template);
  }

  return window._templateCache[name];
}














/*****************************************************************************
 *
 * Rebecca Murphey
 * Senior Software Engineer at Bazaarvoice
 * @rmurphey • rmurphey.com
 * bazaarvoice.com
 *
 * Repo:              github.com/rmurphey/js-minty-fresh
 * Links:             pinboard.in/u:rmurphey/t:js-minty-fresh/
 * On teh internets:  rmurphey.com/js-minty-fresh/presentation/
 *
 ****************************************************************************/














