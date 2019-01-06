document.getElementById('getData').addEventListener('click', retResults);

async function getData(url) {
  // Bij deployment op Google App Engine poortnummer verwijderen - Bij testen op localhost toevoegen
  // https://salustest-7df6a.appspot.com/lxnx?search=
  // http://localhost:8080/lxnx?search=
  // Online API kan niet in client worden gebruikt bij test op localhost vanwege CORS
    document.getElementById('result').innerHTML = '<div class="alert alert-primary">De data wordt opgehaald. Dit kan ca. 15 seconden duren.</div>'
    document.getElementById("loader").style.display = "inline"
    let response = await fetch(url);
    // only proceed once promise is resolved
    let data = await response.json();
    
    // only proceed once second promise is resolved
    data = data.Hit
    return data

}

function retResults() {
  var api_path = "https://salustest-7df6a.appspot.com/lxnx?search="
    var naam =   "rutte" //document.getElementById("Name").value
    var url = api_path + naam
    console.log(naam)
    console.log(url)
    document.getElementById('result').innerHTML = "Yello"
    // let data = await getData(url)
    // console.log(data)
}


