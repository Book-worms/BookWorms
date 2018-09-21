/* eslint-disable prefer-destructuring */
const axios = require('axios');

const config = require('../config.js');
require('dotenv').config();

const goodReads = process.env.GOODREADS_KEY;
const google = process.env.GOOGLE;
const libThing = process.env.LIBRARYTHING;



// Finally got a response thats useable from good reads!!! format below
//  https://www.goodreads.com/book/title.xml?&key=API_KEY&title=where+the+wild+things+are
const goodReadsData = (title) => {
  const formattedTitle = title.split(' ').join('+');
  return axios.get(`https://www.goodreads.com/book/title.xml?&key=${goodReads}&title=${formattedTitle}`);
};

const googleBooks = (title) => {
  const format = title.split(' ').join('_');
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${format}&key=${google}`);
};
const openLibrary = isbn => axios.get(`https://openlibrary.org/api/books.json?bibkeys=ISBN:${isbn}`);
const googleGenre = genre => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${genre}&key=${google}&maxResults=40`);

const libThingISBN = ISBN => axios.get(`http://www.librarything.com/services/rest/1.1/?method=librarything.ck.getwork&isbn=${ISBN}&apikey=${libThing}`);


module.exports = {
  goodReadsData,
  googleBooks,
  libThingISBN,
  googleGenre,
  openLibrary,
};
