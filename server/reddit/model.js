var db = require('../../db/schema.js');

var RedditPost = db.Model.extend({
  tableName: 'redditContent',
  hasTimestamps: false
});

RedditPost.getUnixTime = function(ts) {
  var date = new Date(ts * 1000);
  return date;
};

module.exports = RedditPost;
