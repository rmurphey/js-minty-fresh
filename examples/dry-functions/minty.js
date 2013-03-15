function updateDates () {
  connectDatepicker( $('#menu-item-1'), $('#start-date') );
  connectDatepicker( $('#menu-item-2'), $('#end-date') );

  function connectDatepicker (target, datepicker) {
    var date = datepicker.datepicker('getDate');

    target.find('.day').text( date.getDate() );
    target.find('.month').text( Util.monthToText( date.getMonth() ) );
    target.find('.year').text( date.getFullYear() );
  }
}

