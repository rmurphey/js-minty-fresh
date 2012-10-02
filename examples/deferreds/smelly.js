function getSomeThings( callback ) {
  var completed = 0;
  var people, tasks;

  $.ajax( '/data/people.json', {
    dataType: 'json',
    success: function( data ) {
      completed++;
      people = data.people;
      onFinished();
    }
  });

  $.ajax( '/data/tasks.json', {
    dataType: 'json',
    success: function( data ) {
      completed++;
      tasks = data.tasks;
      onFinished();
    }
  });

  function onFinished() {
    if ( completed < 2 ) { return; }
    callback( people, tasks );
  }
}