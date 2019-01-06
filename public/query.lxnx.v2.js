document.getElementById('getData').addEventListener('click', getData);
document.getElementById('getPDF').addEventListener('click', getPDF);

async function getData() {
  // Bij deployment op Google App Engine poortnummer verwijderen - Bij testen op localhost toevoegen
  // https://salustest-7df6a.appspot.com/lxnx?search=
  // http://localhost:8080/lxnx?search=
  // Online API kan niet in client worden gebruikt bij test op localhost vanwege CORS
    var api_path = "https://salustest-7df6a.appspot.com/lxnx?search="
    var naam = document.getElementById("Name").value
    var url = api_path + naam
    console.log(naam)
    console.log(url)
    document.getElementById('result').innerHTML = '<div class="alert alert-primary">De data wordt opgehaald. Dit kan ca. 15 seconden duren.</div>'
    document.getElementById("loader").style.display = "inline"
    let response = await fetch('https://salustest-7df6a.appspot.com/lxnx?search=rutte');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;

}

// trigger async function
// log response or catch error of fetch promise
getData()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))
