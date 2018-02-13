/** Make sure we wait to attach our handlers until the DOM is fully loaded. */
$(function () {



  /** Upon clicking the submit button */
  /** Perform form evaluations */
  $(".create-burger-form").on("submit", function (event) {
    event.preventDefault();
    /** Create a new burger object */
    var newBurger = {
      /** Take in the name of the burger from the input with corresponding I.D. */
      burger_name: $("#burger").val().trim()
    };
    /** Send a POST request along with the new burger object in the body */
    /** Handles sending the object to the backend to place in database */
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        /** Reload the page to get the updated list */
        location.reload();
      }
      );
  });



  /** When clicking the devour button */
  $(".devour").on("click", function () {
    /** Grab the id associated with the button */
    var id = $(this).data("id");
    /** Create object with the data to send */
    var newDevouredState = {
      /** Set the state to true */
      devoured: true
    };


    
    /** Send the an update request along with id as params */
    /** And the object to update in the body */
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
      );
  });



  /** When clicking to delete burger */
  $(".delete-burger").on("click", function (event) {
    /** Grab id associated with burger to delete */
    var id = $(this).data("id");
    /** Send a delete request along with id as params */
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function (data) {
      /** Reload page to see changes */
      location.reload();
    });
  });
});