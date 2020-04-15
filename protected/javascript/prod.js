var UrlI = "http://localhost:3000/protected/api/inst";

const I = {
    get(){
      return $.ajax({
        type: 'GET',
        url: `${UrlI}`,
        dataType: 'json'
      });
    },
  }
  ren = 0;
  I.get().done(function(res){
    if(!res){
      return;
    }
    i = res.docs;
    

   $.each(i, function(ke, en){
        if(en.existencia>0){
        producto1 = en.categoria+" "+en.tipo+" "+en.nombre;
        producto2 = en.descripcion;
        producto3 = en.img;
        //console.log(producto3);
        prod.innerHTML += '<div class="column"><div class="content"><h3>Producto</h3>'+producto1+'<br><br>'+'<h3>Decripción</h3><p>'+producto2+'</p><br><br>' + '<a><img src="'+producto3+'" width="200" height="200" alt="'+en.categoria+'"></a><br><br></div></div>';

       }
    })
});