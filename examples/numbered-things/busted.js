function showPeople(people) {
  $.each(people, function(idx, person) {
    $('<li>', {
      id: 'person_' + person.id,
      text: person.name
    }).appendTo('#people');

    $('<button>', {
      id: 'button_' + person.id,
      text: 'Remove ' + person.name
    }).appendTo('#buttons');
  });

  $('#buttons button').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('id').replace('button_', '');
    $('#person_' + id).remove();
  });
}