function getSomeThings(callback) {
  var peopleRequest = $.getJSON('/data/people.json')
                        .pipe(function(data) {
                          return data.people;
                        });

  var tasksRequest = $.getJSON('/data/tasks.json')
                        .pipe(function(data) {
                          return data.tasks;
                        });

  $.when(peopleRequest, tasksRequest).then(callback);
}