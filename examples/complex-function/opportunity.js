test( 'update row', function() {
  var t = $( '<table><tr><td class="price"/><td class="discount"/></tr></td></table>' );
  var row = t.find( 'tr' );
  var priceHtml = '<p class="foo">price</p>';
  var discountHtml = '<p class="bar">discount</p>';

  udpateRow( row, priceHtml, discountHtml );

  assert.equal( row.find( 'td.price' ).html(), priceHtml );
  assert.equal( row.find( 'td.discount' ).html(), discountHtml );
});