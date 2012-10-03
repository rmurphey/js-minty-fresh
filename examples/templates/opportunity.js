app.getTemplate = function( name ) {
  app._templateCache = app._templateCache || {};

  if ( !app._templateCache[ name ] ) {
    app._templateCache[ name ] =
      $.get( '/templates/' + name ).pipe( _.template );
  }

  return app._templateCache[ name ];
}

app.Tasks = {
  target : '#tasks',

  fetch : function() {
    return $.getJSON( '/data/tasks.json' ).pipe(function(resp){
      return resp.tasks;
    });
  },

  process : function() {
    return $.map( tasks, function( entryIndex, task ) {
      var classes = {
        2: 'urgent',
        5: 'very_urgent'
      };

      task.s_class = classes[ entry.status_id ] || 'normal';
      task.index = entryIndex;

      return task;
    });
  },

  populate : function() {
    $.when(
      app.getTemplate( 'tasks' ),
      app.Tasks.fetch()
    ).then(function(tmpl, tasks) {
      $( app.Tasks.target ).append( tmpl(tasks) );
    });
  }
};