function updateDates() {
  updateDate( $('#menu-item-1'), $('#start-date') );
  updateDate( $('#menu-item-2'), $('#end-date') );

  function updateDate( target, datepicker ) {
    var date = datepicker.datepicker( 'getDate' );

    target.find( '.day' ).text( date.getDate() );
    target.find( '.month' ).text( Util.monthToText( date.getMonth() ) );
    target.find( '.year' ).text( date.getFullYear() );
  }
}