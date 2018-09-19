const request = require('request');

const createKeyWordForSearch = keyword => encodeURI(keyword);

const ebayPost = (keyWordSearch) => {
  const options = {
    method: 'POST',
    url: 'http://svcs.ebay.com/services/search/FindingService/v1',
    headers: {

    },
  };
};
