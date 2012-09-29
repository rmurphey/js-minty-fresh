// sane-er code
var priceInfo = {};
var priceHtml = getPrice(priceInfo);
var discountHtml = getDiscount(priceInfo);

updateRow(row, priceHtml, discountHtml);

function getDiscount(priceInfo) {
  var txt;

  if (
    priceInfo.discountPrice &&
    priceInfo.standardPrice &&
    priceInfo.savings
  ) {

    if (priceInfo.discountPrice == '$0.00') {
      txt += 'FREE!';
    }
    if (priceInfo.isProrated) {
      txt += '*';
    } else if (priceInfo.isDeferred) {
      txt += '**';
    }

    if (txt) {
      return '<strong>' + txt + '</strong>';
    }
  }

  return '<img src="/img/loading.gif" />';
}

function getPrice(priceInfo) {
  if (!priceInfo.standardPrice) {
    return '';
  }

  if (priceInfo.standardPrice == priceInfo.discountPrice) {
    return '';
  }

  return '<del>' + priceInfo.standardPrice + '</del>';
}

function updateRow(row, priceHtml, discountHtml) {
  row.find('td.price').eq(0).html(priceHtml);
  row.find('td.price').eq(1).html(discountHtml);
}