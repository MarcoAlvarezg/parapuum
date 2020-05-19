/*
 * Web application
 */
var Url = "https://873a8b89.us-south.apigw.appdomain.cloud/favoritos";

/* "http://localhost:3000/protected/api/idPayload"; 
   "https://developerchain.mybluemix.net/protected/api/idPayload"*/
var UrlI = "https://lacompudelaesquina.mybluemix.net/protected/api/inst";
/* "http://localhost:3000/protected/api/inst"; 
   "https://developerchain.mybluemix.net/protected/api/inst"*/
//fs file open


// crear variables de ambiente que almacenas el HOST_BACKEND
// y la consumes con processs.env.HOST_BACKEND
// puedes usar IBMcloudenv o el https://www.npmjs.com/package/dotenv
//retrieve the existing universities entries
const INST = {
  get(){
    return $.ajax({
      type: 'GET',
      url: `${UrlI}`,
      dataType: 'json'
    });
  },
}

const cloudantConnection = {
  // retrieve the existing activitis entries
  get() {
    return $.ajax({
      type: 'GET',
      url: `${Url}/entries`,
      dataType: 'json'
    });
  },
  // add a single activity entry
  add(ins, raiting, comment) {
    
    console.log('Sending', ins, raiting, comment)
    return fetch(`${Url}/entries`,{
        method: "POST",
        body: JSON.stringify({
            ins,
            raiting: raiting,
            comment
          }),
          headers: {
            'Content-Type': 'application/json'
          }
     })
  }
};
var x;
var i;
var h=0;
var eh;
var n=0;
(function() {

  let entriesTemplate;

  function prepareTemplates() {
    entriesTemplate = Handlebars.compile($('#entries-template').html());
  }

  // retrieve entries and update the UI
  /* function loadEntries() {
    USER.get().done(function(rest){
      if(!rest){
        return
      }
      x = rest.email;
      });*/
    INST.get().done(function(res){
      if(!res){
        return;
        console.log("houston")
      }
      i = res;
    });
    console.log(i);
    var i2 = i.cateotia+" "+i.nombre;
   var arr;
    cloudantConnection.get().done(function(result) {
      if (!result.entries) {
        return;
      }
      arr = result.entries;
      console.log(arr);
      })

    
      $.each(arr, function(key, entry){
        function checkU(entry){
          return entry.ins;
        }
        h = arr.filter(checkU);
        })
        
        var totalH = h.reduce((sum, value) => (typeof value.raiting == "number" ? sum + value.hours : sum), 0);
        //$("#horasReg").html(totalH);
        $.each(i2, function(key, entry){
          $.each(arr, function(k,e){
            function checkI(e){
              return e.institucion==entry;
            }
            eh = arr.filter(checkI);
          })
          console.log(eh);
        var totalEH = eh.reduce((sum, value) => (typeof value.hours == "number" ? sum + value.hours : sum), 0);
        //$("#"+entry._id).html(totalEH+" / 100");   
        console.log(totalEH);
       /* var k =document.getElementById(entry._rev);
        n=(totalEH/40)*180;
        k.style.background="linear-gradient("+n+"deg, rgb(0, 0, 255) 50%, rgba(0, 0, 0, 0.2) 50%)";
        })
      }
      );*/
    })

  // intercept the click on the submit button, add the guestbook entry and
  // reload entries on success
  $(document).on('submit', '#addActivity', function(e) {
    e.preventDefault();
    cloudantConnection.add(
      $('#ins').val().trim(),
      $('#rat').val().trim(),
      $('#comment').val().trim()
    ).then(function(result) {
      // reload entries
      document.getElementById("addActivity").reset();
      alert("Favorito registradio correctamente");
      prepareTemplates();
      //loadEntries();
    }).catch(function(error) {
      alert("Verifique datos ingresados");
      console.log(error);
    });
  });

  $(document).ready(function() {
    prepareTemplates();
    //loadEntries();
  });
})();
