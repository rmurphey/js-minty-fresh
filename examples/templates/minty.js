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

function populateTaskList() {
  var template = _.template( $( '#tasks_template' ).text() );

  var tasks = $.getJSON( '/data/tasks.json' ).pipe(function(resp) {
    return $.map( resp.tasks, function( entryIndex, task ) {
      var classes = {
        2: 'urgent',
        5: 'very_urgent'
      };

      task.s_class = classes[ entry.status_id ] || 'normal';
      task.index = entryIndex;

      return task;
    });
  });

  tasks.done(function(t) {
    $( '#tasks' ).append( template(t) );
  });
}
