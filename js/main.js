$(document).ready(function() {
  var database = firebase.database();
  $('#publish').on('click', function() {
    var time = moment().format('LT');
    var message = $('#post').val();
    console.log(message);
    if ($('#post').val().length > 0) {
      $('.post-user').prepend('<div class="row box-post"><div class="col s12 m12 "><img class="responsive-img circle col s3 l1" src=' + $('.perfil').attr('src') + '><p>' + $('#post').val() + ' <span class="right">' + time + '');
      $('#post').val('');
    }
    database.ref('post').push({
      message: message,
      time: time
    });
    database.ref('jaku').push({
      message: message,
      time: time
    });
  });
  $.each(data, function(i, item) {
    $('.friends').append('<li class="collection-item avatar"><img src="' + data[i].foto + '" class="circle"><span class="title">' + data[i].nombre + '</span><p>' + data[i].edad + ' <br>' + data[i].actividades + '</p></li>');
  });
  $.each(sugerencias, function(i, item) {
    $('.suggestions').append('<li class="collection-item avatar buttons"><img src="' + sugerencias[i].foto + '" class="circle"><span>' + sugerencias[i].nombre + '</span><button class="btn waves-effect waves-light right" id="' + sugerencias[i].id + '" type="submit" name="action">Seguir</button></li>');
    $('#' + sugerencias[i].id + '').on('click', function() {
      $(this).text(function(i, v) {
        return v === 'Seguir' ? 'Siguiendo' : 'Seguir';
      });
    });
  });
});