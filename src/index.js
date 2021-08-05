function importAll(r) {
    r.keys().forEach(r);
  }  
  importAll(require.context('./img', true, /\.(jpg|jpeg|png|webp|svg|png)$/));
  importAll(require.context('./sass', true, /\.scss$/));
  importAll(require.context('./pug/components', true, /\.(css|scss|jpg|jpeg|png|svg|png|ico|xml|mp4|webp)$/));
  // importAll(require.context('./pug/components', true, /\.scss$|\.css$|\.js$/));
  importAll(require.context('./pug/pages', true, /\.scss$|\.css$|\.js$/));

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'