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
    // console.log(i);
    /* let datos = JSON.parse(i);

    let prod = document.querySelector(prod);
    prod.innerHTML = '';

    for(let item of datos){
        prod.innerHTML += `
        <tr>
        <td>${item.producto1}</td>
        <td>${item.producto2}</td>
        </tr>;`
    } */

   $.each(i, function(ke, en){
        if(en.existencia>0){
        producto1 = en.categoria+" "+en.tipo+" "+en.nombre;
        producto2 = en.descripcion;
        producto3 = en.img;
        //console.log(producto3);
        prod.innerHTML +='<h3>Producto</h3>'+producto1+'<br><br>';
        prod.innerHTML +='<h3>Decripción</h3>'+producto2+'<br><br>';
        prod.innerHTML +='<a><img src="'+producto3+'" width="200" height="200"></a>';
    
       }
    })
});