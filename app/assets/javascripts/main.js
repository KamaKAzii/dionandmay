// AJAX Calls

$("#sign_in").submit(function() {
  $self = $(this);
  var user_data = {};
  user_data.username = $self.find("#user_username").val();
  user_data.password = $self.find("#user_password").val();
  if ($self.find("#user_remember_me").attr("checked")) {
    user_data.remember_me = 1;
  }
  var data = {
    remote: true,
    commit: "Sign in",
    utf8: "✓",
    user: user_data
  }
  $.ajax({
    type: "POST",
    url: "/users/sign_in",
    data: data,
    success: function(data) {
      console.log(data);
    }
  });
  return false;
});

$("#sign_out").submit(function() {
  $.ajax({
    type: "DELETE",
    url: "/users/sign_out",
    success: function(data) {
      console.log(data);
    }
  });
  return false;
});

// Utility functions

utilities = {
  resizeSection:
    function ($targetSection, $targetWidth, $targetHeight) {
      $targetSection.animate(
        { height: $targetHeight, width: $targetWidth },
        { duration: 800 }
      );
    },
  callNewContent: function(controller, action, width, height) {
    var targetPath = "/" + controller + "/" + action;
    $.get(targetPath, function(data) {
      console.log(data);
    })
    .error(function() { console.log("Get request was not successful :<"); });
  }
};
