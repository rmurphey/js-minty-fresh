function getSomeThings(callback) {
  var peopleRequest = $.getJSON( '/data/people.json' )
                        .pipe(function( resp ) {
                          return resp.people;
                        });

  var taskRequest = $.getJSON( '/data/tasks.json' )
                        .pipe(function( resp ) {
                          return resp.tasks;
                        });

  return $.when( peopleRequest, taskRequest ).done( callback );
}