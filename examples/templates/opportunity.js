function getTemplate( name ) {
  window._templateCache = window._templateCache || {};

  if ( !window._templateCache[ name ] ) {
    window._templateCache[ name ] =
      $.get( '/templates/' + name ).pipe( _.template );
  }

  return window._templateCache[ name ];
}