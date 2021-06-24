function importAll(r) {
    r.keys().forEach(r);
  }
  
  
  importAll(require.context('../sass', true, /\.scss$/));
  importAll(require.context('../pug', true, /\.scss$|\.css$|\.js$/));