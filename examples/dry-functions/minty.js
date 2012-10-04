function updateDates() {
  $.each({
    '#menu-item-1': '#start-date',
    '#menu-item-2': '#end-date'
  }, function( menuItem, datepicker ) {
    var target = $( menuItem );
    var date = $( datepicker ).datepicker( 'getDate' );

    target.find( '.day' ).text( date.getDate() );
    target.find( '.month' ).text( Util.monthToText( date.getMonth() ) );
    target.find( '.year' ).text( date.getFullYear() );
  });
}