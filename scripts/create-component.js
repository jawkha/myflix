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
const createComponentDirectory = (name, fileTypes) => {
  fs.mkdir(`${name}`, () => {
    fileTypes.map(fileType => {
      fs.open(`${name}/${name}.${fileType}`, 'w', err => {
        if (err) throw err;
        if (fileType === 'js') {
          const data = `
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
          fs.writeFile(`${name}/${name}.${fileType}`, data, err => {
            if (err) throw err;
            console.log(`${name}/${name}.${fileType} successfully saved.`);
          });
        }
      });
    });
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
