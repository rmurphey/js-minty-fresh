function getTwoThings( callback ) {
  var peopleRequest = $.getJSON( '/data/people.json' );
  var taskRequest = $.getJSON( '/data/tasks.json' );

  $.when( peopleRequest, taskRequest )
    .done(function( people, tasks ) {
      callback( people[0].people, tasks[0].tasks );
    });
}