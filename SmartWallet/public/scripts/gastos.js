$('button').click(function(){
    //$('button').toggleClass('active');
    $('.title').toggleClass('active');
    $('nav').toggleClass('active');
  });

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("table");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if(cityName=="diario"){
      document.getElementById("tiempoD").innerHTML="Diario";
      document.getElementById("totalTiempo").innerHTML="$800";
      document.getElementById("addGasto").style.display = 'block';
    }
    if(cityName=="semanal"){
      document.getElementById("tiempoD").innerHTML="Semanal";
      document.getElementById("totalTiempo").innerHTML="$1300";
    }
    if(cityName=="mensual"){
      document.getElementById("tiempoD").innerHTML="Mensual";
      document.getElementById("totalTiempo").innerHTML="$3000";
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*
  function genera_tablaD() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("a")[0];
   
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
      var Hora=9;
   
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var cantidad=200;
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      Hora++;
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    //tabla.setAttribute("border", "2");
  }
  */