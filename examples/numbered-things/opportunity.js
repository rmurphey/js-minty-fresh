function showPeople( people ) {
  $.each( people, function( idx, person ) {
    var li = $('<li>', {
      text: person.name
    }).appendTo( '#people' );

    $( '<button>', {
      text: 'Remove ' + person.name
    })
    .appendTo( '#buttons' )
    .data( 'li', li );
  });
}

$( '#buttons' ).on( 'click', 'button', function( e ) {
  e.preventDefault();
  $( this ).data( 'li' ).remove();
});