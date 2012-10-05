app.getTemplate = function( name ) {
  app._templateCache = app._templateCache || {};

  if ( !app._templateCache[ name ] ) {
    app._templateCache[ name ] =
      $.get( '/templates/' + name ).pipe( _.template );
  }

  return app._templateCache[ name ];
}

Tasks.collection = {
  fetch : function() {
    return $.getJSON( '/data/tasks.json' ).pipe( this.process );
  },

  process : function( resp ) {
    return $.map( resp.tasks, function( entryIndex, task ) {
      var classes = {
        2: 'urgent',
        5: 'very_urgent'
      };

      task.s_class = classes[ entry.status_id ] || 'normal';
      task.index = entryIndex;

      return task;
    });
  }
};

Tasks.view = {
  el : '#tasks',

  populate : function() {
    return $.when(
      app.getTemplate( 'tasks' ),
      Tasks.collection.fetch()
    ).done(function(tmpl, tasks) {
      $( Tasks.view.el ).append( tmpl(tasks) );
    });
  }
};