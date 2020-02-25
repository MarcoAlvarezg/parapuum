/**
 * Web application
 */
const apiUrl = 'https://873a8b89.us-south.apigw.appdomain.cloud/forgit';
const guestbook = {
  // retrieve the existing guestbook entries
  //leer los comentarios existentes
  //inicia
  get() {
    return $.ajax({
      type: 'GET',
      url: `${apiUrl}/entries`,
      dataType: 'json'
    });
  },
  //termina

  // add a single guestbook entry
  //agregar un comentario nuevo
  //inicia
  add(nombre, correo, comentario) {
    console.log('Sending', nombre, correo, comentario)
    return $.ajax({
      type: 'POST',
      url: `${apiUrl}/entries`,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        nombre,
        correo,
        comentario,
      }),
      dataType: 'json',
    });
  }
  //termina
};

(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  function loadEntries() {
    //console.log('Loading entries...');
    $('#entries').html('Loading entries...');
    guestbook.get().done(function(result) {
      if (!result.entries) {
        return;
      }

      const context = {
        entries: result.entries
      }
      $('#entries').html(entriesTemplate(context));
    }).error(function(error) {
      $('#entries').html('No entries');
      console.log(error);
    });
  }

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addEntry', function(e) {
    e.preventDefault();

    guestbook.add(
      $('#nombre').val().trim(),
      $('#correo').val().trim(),
      $('#comentario').val().trim()
    ).done(function(result) {
      // reload entries
      loadEntries();
    }).error(function(error) {
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    loadEntries();
  });
})();
