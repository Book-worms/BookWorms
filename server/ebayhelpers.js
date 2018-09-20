const request = require('request');

// create variable to access ebay_app_id env
const ebay = process.env.EBAY_APP_ID;
const createKeyWordForSearch = keyword => encodeURI(keyword);

// create function to access ebay find api
const ebayPost = (keyWordSearch, callback) => {
  const options = {
    method: 'POST',
    url: `http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${ebay}&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD=&keywords=${keyWordSearch}&paginationInput.entriesPerPage=3`,
  };
  request(options, callback);
};

const ebayHelpers = {
  createKeyWordForSearch,
  ebayPost,
};

module.exports.ebayHelpers = ebayHelpers;
