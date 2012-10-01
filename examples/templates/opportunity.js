function getTemplate(name) {
  window._templateCache = window._templateCache || {};

  return window._templateCache[ name ] ||
    $.get('/templates/' + name).pipe(function(tmpl) {
      var compiled = window._templateCache[ name ] = _.template( tmpl );
      return compiled;
    });
}