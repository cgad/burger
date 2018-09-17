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

    $(".change-eaten").on("click", function() {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newBurgerState = {
            eaten: newEaten,
            id: id
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("Changed eaten to ", newEaten);
                location.reload();
            }
        );
    });
});