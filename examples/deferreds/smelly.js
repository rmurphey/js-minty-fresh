function getTwoThings( callback ) {
  $.ajax( '/data/people.json', {
    dataType : 'json',
    success : function( data ) {
      var people = data.people;

      $.ajax( '/data/tasks.json', {
        dataType : 'json',
        success : function( data ) {
          var tasks = data.tasks;
          callback( people, tasks );
        }
      });
    }
  });
}