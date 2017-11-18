var friendList = require('../data/app.js');

module.exports = function (app) {
    app.get('/api/myFriends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/myFriends', function (req, res) {
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var topMatch = 0;


        for (var i = 0; i < friendList.length; i++) {
            var scoresAbsVal = 0;

            for (var j = 0; j < newFriendScores.length; j++) {
                scoresAbsVal += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            scoresArray.push(scoresAbsVal);
        }


        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[topMatch]) {
                topMatch = i;
            }
        }

        var bff = friendList[topMatch];
        res.json(bff);

        friendList.push(req.body);
    });
};
