var UrlI = "http://localhost:3000/protected/api/inst";
var a;
$(document).on('load', {
   a = $('#pro').val().trim()
  })


const I = {
    get(){
      return $.ajax({
        type: 'GET',
        url: `${UrlI}`,
        dataType: 'json'
      });
    },
  }
  I.get().done(function(res){
    if(!res){
      return;
    }
    i = res.docs;
    if(i._id==a){
      producto1 = i.categoria+" "+i.tipo+" "+i.nombre;
      final.innerHTML += '<div class="column"><div class="content"><h3>Producto</h3>'+producto1+'<br><br>'+'<h3>Decripción</h3><p>'+i.descripcion+'</p><br><br>' + '<a><img src="'+i.img+'" alt="'+i.categoria+'"></a><br><br></div></div>';
    }


  });