const fs = require('fs');

const sentRequest = {};

  const getLinks = (json) => {
    return json.relationships_follow_requests_sent.map(item => item.string_list_data[0].href)
  }

  const sentRequests = getLinks(sentRequest);
  fs.writeFileSync('./links', JSON.stringify(sentRequests));