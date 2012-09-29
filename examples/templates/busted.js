function createTasksHtml(tasks) {

  $.each(tasks, function(entryIndex, entry) {
    var s_class;

    switch (this.status_id) {
      case 2:
        s_class = 'urgent';
        break;
      case 5:
        s_class = 'very_urgent';
        break;
      default:
        s_class = 'normal';
        break;
    }

    var tasks_ops = '<div id="d' + entryIndex + '" class="' + s_class + '"><input type="checkbox" id="c' + entryIndex + '" value="' + entryIndex + '" class="c_' + s_class + '"/> ' + this.task + '</div>';

    $('#tasks').append(tasks_ops);
  });
}