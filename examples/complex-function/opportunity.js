suite( 'price table', function() {
  test( 'update row', function() {
    var row = $( '<table><tr><td class="price"/><td class="discount"/></tr></td></table>' ).find( 'tr' );
    var priceHtml = '<p class="foo">price</p>';
    var discountHtml = '<p class="bar">discount</p>';

    udpateRow( row, priceHtml, discountHtml );

    assert.equal( row.find( 'td.price' ).html(), priceHtml );
    assert.equal( row.find( 'td.discount' ).html(), discountHtml );
  });

  test( 'get price html', function() {
    assert.equal( getPriceHtml({
      discountPrice : '$0.00'
    }), '<strong>FREE!</strong>' );

    // ...
  });

  test( 'get discount html', function() {
    assert.equal( getDiscountHtml({}), '');

    // ...
  });
});