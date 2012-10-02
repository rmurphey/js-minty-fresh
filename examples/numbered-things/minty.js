function showPeople( people ) {
  $.each( people, function( idx, person ) {
    var li = $('<li>', {
      text: person.name
    }).appendTo( '#people' );

    $('<button>', {
      text: 'Remove ' + person.name,
      click: function( e ) {
        e.preventDefault();
        li.remove();
      }
    })
    .appendTo( '#buttons' );
  });
}