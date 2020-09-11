$(function() {
    $(".burger-ready").on("click", function(event) {
        event.preventDefault()
        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            method: "PUT",
        }).then(
            function() {
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("[name=burger_name]").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});