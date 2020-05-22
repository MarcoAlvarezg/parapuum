var UrlI = "https://lacompudelaesquina.mybluemix.net/protected/api/inst";
//https://lacompudelaesquina.mybluemix.net/protected/api/inst

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
        //console.log(en._id);
        prod.innerHTML += '<div class="card-body"><div class="columnprod"><div class="contentprod"><h3>Producto</h3><img class="card-img-top" src="'+en.img+'" class="imagetable" height="300" width="300" ><div class=overlaytable><div class="texttable">'+producto1+'<br>Costo<br>$<span class="costo">'+en.costo+'</span>.00<br><a href="/protected/protected2.html?value='+en._id+'"><button class="b">Detalles</button></a><br><br><a href="" class="btn btn-block btn-primary agregar-carrito" id="'+en._id+'">Agregar al carrito</a></div></div></div></div></div>';
        //prod.innerHTML += '<div class="column"><div class="content"><h3>Producto</h3>'+producto1+'<br><br>'+'<h3>Decripción</h3><p>'+producto2+'</p><br><br>' + '<a><img src="'+producto3+'" width="200" height="200" alt="'+en.categoria+'"></a><br><br></div></div>';
       }
    })
});