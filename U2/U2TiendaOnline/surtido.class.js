'use strict'
function Surtido(productos){
  this.productos = productos;
  this.ordenPorPrecioMas = function(){
    this.productos.sort(function(p1,p2){
      return p1.precio - p2.precio;
    });
  }
  this.ordenPorPrecioMenos= function(){
    this.productos.sort(function(p1,p2){
      return p2.precio - p1.precio;
    });
  }

  function veganos(p){
    return p.vegano;
  }
  this.filtrarVegano = function(){
    var v = this.productos.filter(veganos);
    console.log(v);
    return v;
  }

  this.dibujarSurtido= function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if (produ == undefined) {
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto+ "' alt = '"
        str += this.productos[i].nombre + "'>";
        str += "<p>Producto: "+this.productos[i].nombre + "</p>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>"+this.productos[i].precio + "</b></p>";
        str += "</div>";

      }

    }else{
      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" +produ[i].foto+ "' alt = '"
        str += produ[i].nombre + "'>";
        str += "<p>Producto: "+produ[i].nombre + "</p>";
        str += "<p>" +produ[i].descripcion + "</p>";
        str += "<p><b>"+produ[i].precio+"</b></p>";
        str += "</div>";

      }
    }
    cuerpo.innerHTML = str;
  }
}
