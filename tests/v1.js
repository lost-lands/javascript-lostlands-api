var v1 = new lostlandsAPI.v1();

$(function() {
    console.log("v1.js loaded");
    v1.player('DoubleCheck', function(err, player) {
        if (err) {
            console.error(err);
        } else {
            //player is an array of all documented player data
            console.log(player);
        }
    });
});