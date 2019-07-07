var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends" , function(req, res){
        res.json(friends);
    })
    app.post("/api/friends", function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDif: Infinity
        }
        var userData = req.body.userData;
        var userScores = userData.scores;

        var totalDiff;

        for(var i=0; i<friends.length; i++){
            var currentFriend = friends[i];
            totalDiff = 0;
            for(var j=0; j<currentFriend.scores.length; j++){
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                totalDiff+= Math.abs(parseInt(currentFriendScore)-parseInt(currentUserScore));

            }
        }

    })
}