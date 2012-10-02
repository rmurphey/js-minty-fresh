var priceInfo = {};
var priceHtml = getPriceHtml( priceInfo );
var discountHtml = getDiscountHtml( priceInfo );

updateRow( row, priceHtml, discountHtml );

function getDiscountHtml( priceInfo ) {
  var txt = '';

  if ( priceInfo.discountPrice === '$0.00' ) {
    txt += 'FREE!';
  }

  if ( priceInfo.isProrated ) {
    txt += '*';
  }

  if ( priceInfo.isDeferred ) {
    txt += '**';
  }

  return txt ? ( '<strong>' + txt + '</strong>' ) :
    '<img src="/img/loading.gif" />';
}

function getPriceHtml( priceInfo ) {
  if ( !priceInfo.standardPrice ) {
    return '';
  }

  if ( priceInfo.standardPrice == priceInfo.discountPrice ) {
    return '';
  }

  return '<del>' + priceInfo.standardPrice + '</del>';
}

function updateRow( row, priceHtml, discountHtml ) {
  row.find( 'td.price' ).eq( 0 ).html( priceHtml );
  row.find( 'td.price' ).eq( 1 ).html( discountHtml );
}