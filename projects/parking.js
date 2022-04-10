function getParkingJSON() {
    var table = document.getElementById("jsonCode");
    var date = document.getElementById("date");
    fetch("https://maxomnia.github.io/data.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        date.innerHTML = "Fetched on <b>"+data['date']+"</b>"
        data['data'].forEach(element => {
            tr = table.insertRow()
            tr.innerHTML = '<td>' + element['name'] + '</td> <td>' + element['occupied']  + '</td> <td>' + element['total']  + '</td>'
            if(element['occupied'] == -1){
                tr.className="invalid"
            }
        });
      }).catch(function() {
        console.log("Booo");
      });
}