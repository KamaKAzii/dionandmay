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
      if (data.success) {
        $(".result").html("Sign in successful. Please wait");
        window.location = "/welcome/main";
      } else {
        $(".result").html("Please try again...");
        $(":input, form")
          .not(':button, :submit, :reset, :hidden')
          .val('')
          .removeAttr('checked')
          .removeAttr('selected');
      }
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
  }
};



// Collapse functionality
$(".menu").on("click", function() {
  var myTarget = $(this).attr("id");
  $(".content." + myTarget).stop(true, true).slideToggle(500);
});

// Invite functionality
$(".modaltrigger").unbind().on("click", function() {
  $(".modal").fadeIn();
  $(".modal").on("click", function() {
    $(this).fadeOut();
  });
});

// Gallery function
$(".thumbnail").on("click", function() {
  var source = $(this).attr("id");
  $("<div/>")
    .addClass("fullsize")
    .html("<img src='/assets/large/" + source + ".jpg' />")
    .appendTo($("body"));
  $(".fullsize").fadeIn();
  $(".fullsize").on("click", function() {
    $(this).fadeOut(function() { $(this).remove(); });
  });
});


// Tab functionality
$(".tab").on("click", function() {
  if (!$(this).hasClass("active")) {
    var findThisId = $(this).attr("id");
    // Remove current active part's active class
    $(this).siblings(".part.active").each(function() {
      $(this).removeClass("active");
    });
    // Remove current active tab's active class
    $(this).siblings(".tab.active").each(function() {
      $(this).removeClass("active");
    });
    // Add active class to new tab
    $(this).addClass("active");
    // Add active calss to new tab's part
    $(this).siblings(".part." + findThisId).each(function() {
      $(this).addClass("active");
    });
    $(this).addClass("active");
  }
});


$(document).ready(function() {
  var user = 'mayanddion';
  $.getJSON(
    'http://twitter.com/statuses/user_timeline.json?screen_name=' + user + '&count=1&callback=?',
    function(data) {
      var tweet = data[0].text;
      var theTime = data[0].created_at;
      tweet = tweet.replace(
        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        }
      )
      .replace(/B@([_a-z0-9]+)/ig,
        function(reply) {
          return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
        }
      );
      $("#twitter p").html(tweet + " <br />- " + theTime);
    }
  );
});
  
