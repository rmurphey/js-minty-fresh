function doneLoading() {
  var colorStatus = $('#colorStatus').val().toLowerCase();

  if ( $.inArray( colorStatus, [ 'red', 'green', 'yellow' ] ) > -1 ) {
    $( '.circleFrame' ).addClass( colorStatus + 'State' );
    return;
  }

  notFound();
}