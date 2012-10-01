function showPrice(row, standardPrice, discountPrice, savings, isProrated, isDeferred) {

  var priceCol = row.find('td.price').eq(0);
  var discountCol = row.find('td.price').eq(1);
  var txt = '';

  if (!discountPrice && !standardPrice && !savings && !isProrated && !isDeferred) {
    discountCol.html('<img src="/img/loading.gif" />');
  } else {
    if (discountPrice && (standardPrice == discountPrice)) {
      priceCol.html('');
    } else {
      priceCol.html('<del>' + standardPrice + '</del>');
    }

    txt = '<strong>';

    if (discountPrice == '$0.00') {
      txt += 'FREE!';
    }

    if (isProrated) {
      txt += '*';
    } else if (isDeferred) {
      txt += '**';
    }

    txt += '</strong>';
  }

  discountCol.html(txt);
}

showPrice(row, null, null, null, null, null);