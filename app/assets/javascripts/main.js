/*
$("#sign_in").submit(function() {
  var email = $('#user_email').val();
  var password = $('#user_password').val();
  var data = {remote: true, commit: "Sign in", utf8: "✓",
    user: {remember_me: 1, password: password, email: email}};

  $.post('/users/sign_in', data, function(resp) {
    if (resp.success){
      console.log(resp);
    } else {
      console.log("fail");
    }
  });
  return false;
});
*/

$("#sign_in").submit(function() {
  $self = $(this);
  var user_data = {};
  user_data.email = $self.find("#user_email").val();
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
