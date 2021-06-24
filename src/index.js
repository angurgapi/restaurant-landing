function importAll(r) {
    r.keys().forEach(r);
  }  
  
  importAll(require.context('./sass', true, /\.scss$/));
  importAll(require.context('./pug/components', true, /\.scss$|\.css$|\.js$/));
  importAll(require.context('./pug/pages', true, /\.scss$|\.css$|\.js$/));

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'