function doneLoading() {
  var colorStatus = $('#colorStatus').val();

  if (colorStatus === 'RED'){
    $('.circleFrame').addClass('redState');
  } else if (colorStatus === 'GREEN'){
    $('.circleFrame').addClass('greenState');
  } else if (colorStatus === 'YELLOW'){
    $('.circleFrame').addClass('yellowState');
  } else {
    notFound();
  }
}