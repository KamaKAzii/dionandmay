$("form").submit(function() {
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
