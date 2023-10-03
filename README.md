
# My Learnings
Webpack is a free and open-source module bundler. The bundling process can be customized for webpack using webpack.config file which is a JS module containing different properties like: 

 **entry**: this contains the path where webpack should start bundling the project.  

**output**: the final output of a webpack bundling is a JavaScript file, whose path and filename are determined by the properties of output object. 

**loaders**: module object lays out the rules to be followed when processing a file to be bundled. Vanilla webpack only processes JavaScript and needs other third-party npm modules for other types of files. Typical loaders include sass-loader (for processing scss files), ts-loader (for bundling typescript files), babel –loader (to process higher versions of ECMAScript incompatible for browsers).  

 **plugins**: Plugins can tap into the build process of the webpack and can induce changes in the process. Plugin classes must be instantiated and declared in the plugin array in the config object. 

 

 
## Run

To run this project run

```bash
  npm install
  npm build
  npm run dev
```





## Content

This repo contains a webpack project, which includes an index file, an external module, generateJoke (which uses axios third party library to make an api call and fetch a new joke from https://icanhazdadjoke.com/). This joke is printed

It also includes a counter which gets incremented every 500ms. This is included to demonstrate the web worker which traverses through a large loop, but this doesn't impact
the counter because it runs on a separate thread.

A custom loader, my-loader is added, which is used to load images, but whatever image is loaded, this loader returns a laughing emoji svg. This is used to demonstrate the loader capability. Loader is a function that receives source file content as string and returns the target file content. So whatever image is trying to load, this loader transfroms it into another image(laughing emoji) and returns it. To demonstrate this, an image facebook.svg is trying to be loaded in the index.js but a laughing emoji image is actually loaded.

A custom plugin is included to check the size of the total chunk generated. The plugin creates an asset statsAsset into which it writes the statistics of the build process. Plugin is a class that has an apply method, into which the compiler object is passed. 
Plugins can tap into different lifecycle hooks of the compiler. So this plugin taps into *emit* lifecycle hook and gets the stats. Later in index.js, this staticAsset file is loaded through fetch and the chunk size is written on to the html. Another plugin myPlugin simply consoles these stats.



