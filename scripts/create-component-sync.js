const fs = require('fs');
/**
 * The function should be able to take a string and an array of file extensions
 * and use them to create the following structure:
 * directory with the string as the name enclosing one file each for each element
 * in the file extensions array.
 * For example,  createComponentDirectory('Header', ['js', 'css', 'test.js']) will
 * return a directory called Header enclosing these 3 files: Header.js, Header.css, Header.test.js
 *  For .js files which are supposed to be React components, some boilerplate code is also
 * written to each of them so they can be directly imported into the app.
 */
// TO DO: Better error handling and boilerplate for test files and possibly CSS as well.
const fileContent = name => {
  return `
import React from 'react';
    
const ${name} = () => {
return (
    <div>
    <h1>${name} here</h1>
    </div>
);
};

export default ${name};
`;
};
// This is a cleaner version of the same function from create-component.js
const createComponentDirectory = (name, fileTypes) => {
  fs.mkdirSync(`${name}`);
  fileTypes.map(fileType => {
    fs.openSync(`${name}/${name}.${fileType}`, 'w');
    if (fileType === 'js') {
      const data = fileContent(name);
      fs.writeFileSync(`${name}/${name}.${fileType}`, data);
    }
  });
};

const components = [
  'Header',
  'Home',
  'Favorites',
  'SearchResults',
  'MoviesContainer',
  'MovieCard',
  'MovieDetail',
  'NotFound404',
  'VideoPlayer',
  'Footer'
];

components.map(component => createComponentDirectory(component, ['js', 'css', 'test.js']));
