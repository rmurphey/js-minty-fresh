function getSomeThings( callback ) {
  var people, tasks;

  var peopleRequest = $.ajax( '/data/people.json', {
    dataType: 'json',
    success: function( data ) {
      people = data.people;
    }
  });

  var taskRequest = $.ajax( '/data/tasks.json', {
    dataType: 'json',
    success: function( data ) {
      tasks = data.tasks;
    }
  });

  $.when( peopleRequest, taskRequest ).done(function() {
    callback( people, tasks );
  });
}