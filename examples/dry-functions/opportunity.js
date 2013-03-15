// <fieldset id="menu-item-1" data-datepicker="#start-date">
//   <span class="day"></span>
//   <span class="month"></span>
//   <span class="year"></span>
// </fieldset>

function updateDates () {
  connectDatepicker( $('#menu-item-1') );
  connectDatepicker( $('#menu-item-2') );

  function connectDatepicker (target) {
    var datepicker = $( target.attr('data-datepicker') );
    var date = datepicker.datepicker('getDate');

    target.find('.day').text( date.getDate() );
    target.find('.month').text( Util.monthToText( date.getMonth() ) );
    target.find('.year').text( date.getFullYear() );
  }
}

