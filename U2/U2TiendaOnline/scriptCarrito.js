var usuario1 = new Usuario(productos);
usuario1.calcularImporte();
usuario1.mostrarCompra();
if(navigator.cookieEnabled == false){
  alert("Las cookies no estan habilitadas");
}


function eliminar(){

  usuario1.eliminarCompra();
  usuario1.calcularImporte();
  usuario1.mostrarCompra();


}
function hacerPedido(){
  if(usuario1.compra.length != 0){

    var respuesta = confirm("¿Esta de acuerdo con las condiciones y quiere finalizar el pedido?");
    if(respuesta) {
        location.assign("pedidoOK.html","pedido",)
    } else {
        alert("Siga con su compra");
    }

  }
}
function condCompraOnline(){
  var cond = window.open("","condiciones","width=500 height=400");
  cond.document.write("<body><h1>Condiciones de compra</h1> Los precios y condiciones de venta tienen un carácter meramente informativo y pueden ser modificados en atención a las fluctuaciones del mercado. No obstante, la realización del pedido mediante la cumplimentación del formulario de compra, implica la conformidad con el precio ofertado y con las condiciones generales de venta vigentes en ese concreto momento. Una vez formalizado el pedido, se entenderá perfeccionada la compra de pleno derecho, con todas las garantías legales que amparan al consumidor adquirente y, desde ese instante, los precios y condiciones tendrán carácter contractual y no podrán ser modificados sin el expreso acuerdo de ambos contratantes. El castellano será la lengua utilizada para formalizar el contrato. El documento electrónico en que se formalice el contrato se archivará y el usuario tendrá acceso a él en su zona de cliente<br><button onclick='window.close()'>Cerrar la ventana </button><br></body>");

}
function inicio(){
  location.assign("home.html");
}
function imprimir(){
  window.print();
}
