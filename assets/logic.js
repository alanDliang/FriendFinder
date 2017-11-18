$(document).ready(function () {
    for (var i = 0; i < 10; i++) {
        $('#q' + i).val('')
    };

    $("#submit").on("click", function () {
        var newFriend = {
            name: $('#name').val().trim(),
            profilePic: $('#photo').val().trim(),
            scores: []
        };

        for (var i = 0; i < 10; i++) {
            var value = $('#q' + i).val();
            newFriend.scores.push(value);
        }

        var currentURL = window.location.origin;

        $.post(currentURL + "/api/myFriends", newFriend, function (data) {
            $("#matchName").text(data.name);
            $("#matchPic").attr("src", data.profilePic);
        });

        $('.modal').modal();

        $('#name').val("");
        $('#photo').val("");

        for (var i = 0; i < 10; i++) {
            $('#q' + i).val('')
        };
    });
});
