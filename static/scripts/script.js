$(function () {
  $.ajax({
    url:'/posts'
  }).done(function(response){
    console.log('response', response);
    var template = $('#post-template').html();
      response.forEach(function(post){
      var newPost = $(template).clone();
      console.log('>>>posts', post);
      $(newPost).find('.title').html(post[1]);
      $(newPost).find('.author').html(post[0]);
      $(newPost).find('.body').html(post[2]);
      $(newPost).find('.likes').html(post[3]);
      $('#post-list').append(newPost);
      $(newPost).find('.like-button').on('click', function(){
      $.ajax({
          url:'/like/' + post[4]
          }).done(function(){
          $(newPost).find('.likes').html(++post[3])
          });
          window.location.reload();
        });
      $(newPost).find('.delete-post').on('click', function(){
      $.ajax({
        url:'/delete-post/' + post[4]
          }).done(function(){
          $(newPost).find()
          });
          window.location.reload();
      });

      });
    });
  });
