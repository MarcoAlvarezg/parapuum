var UrlI = "https://lacompudelaesquina.mybluemix.net/protected/api/inst";

{
  var parameters = location.search.substring(1).split("=");
  var a = parameters[1];
}

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
    
    $.each(i, function(ke, en){
    if(en._id==a){
      producto1 = en.categoria+" "+en.tipo+" "+en.nombre;
      prod.innerHTML += '<div class="content"><h3>Producto</h3>'+producto1+'<br><br><h3>Producto</h3>$ '+en.costo+'.00<br><br>'+'<h3>Decripción</h3><p>'+en.descripcion+'</p><br><br>' + '<a><img src="'+en.img+'" alt="'+en.categoria+'" height="300" width="300"></a><br><br><br></div></div>';
      if(en.img1){
      prod.innerHTML += '<a><img src="'+en.img1+'" height="300" width="300"></a><br>';
      } 
      if(en.img2){
      prod.innerHTML += '<a><img src="'+en.img2+'" height="300" width="300"></a><br>';
      }
      if(en.img3){
      prod.innerHTML += '<a><img src="'+en.img3+'" height="300" width="300"></a>';
      }
    }

 })
  });