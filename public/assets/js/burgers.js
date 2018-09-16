$(function() {
    $(".submit").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#new-burger").val().trim(),
            eaten: false
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new burger");
                // reload page to get updated list
                location.reload();
            }
        );
    });
});