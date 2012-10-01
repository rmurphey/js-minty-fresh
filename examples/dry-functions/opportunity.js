function updateDates() {
  updateDate( $('#menu-item-1') );
  updateDate( $('#menu-item-2') );

  function updateDate( target ) {
    var datepicker = $( target.attr( 'data-datepicker' ) );
    var date = datepicker.datepicker( 'getDate' );

    target.find( '.day' ).text( date.getDate() );
    target.find( '.month' ).text( Util.monthToText( date.getMonth() ) );
    target.find( '.year' ).text( date.getFullYear() );
  }
}