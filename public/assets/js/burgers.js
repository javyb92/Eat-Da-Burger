// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBurger").on("click", function(event) {
      var id = $(this).data("id");
      var burgerDevoured = $(this).data("burgerDevoured");
      var burgerStatus = {
        devoured: burgerDevoured
      };


      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerStatus
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burgerAdd").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers/", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".deleteBurger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

  });