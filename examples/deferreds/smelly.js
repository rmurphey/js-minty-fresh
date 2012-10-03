function getTwoThings( callback ) {
  $.getJSON( '/data/people.json', function( data ) {
    var people = data.people;

    $.getJSON( '/data/tasks.json', function( data ) {
      var tasks = data.tasks;
      callback( people, tasks );
    });
  });
}