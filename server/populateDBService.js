var mongodb = require("mongojs"),
    q = require('q');

module.exports = function(url, datafile) {
  var db = mongodb.connect(url, ["games", "locations", "players", "pools", "teams"]),
      sampleData = JSON.parse(fs.readFileSync(datafile));

  return q.all(Object.keys(sampleData).map(function (key) {

    var data = sampleData[key].map(function(item){
      console.log(item._id);
      item._id = mongodb.ObjectId(item._id);
      return item;
    }),
        deferred = q.defer();

    db[key].remove( function(err, rowCount) {
      if (err) {
        deferred.reject(err);
      }

      db[key].insert(data, function(err, saved) {
        if (err) {
          deferred.reject(err);
        } else {
          console.log(key + ': insert complete. ' + saved.length + ' records added');
          deferred.resolve();
        }
      });
    });
    return deferred.promise;
  }))

  .finally(function(){
    db.close();
  });
};
