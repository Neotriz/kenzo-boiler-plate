const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.getvotes = function(req, res, next){
  let userName = req.params.userName
  Poll.find({'userName' : userName}, function(err, result){
    if (err){ console.error(err)};
    if (result === null){
      res.status(404).send("Not Found!")
    } else{
      res.send(result)
    }
  })
}
