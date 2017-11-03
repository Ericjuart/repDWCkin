var p = new Surtido(productos);
// var miCompra = [productos[0],productos[3]];
p.dibujarSurtido();
function recarga(){
location.reload();
}

function verPorPrecioMas(p){
  p.ordenPorPrecioMas();
  p.dibujarSurtido();
}
function verPorPrecioMenos(p){
  p.ordenPorPrecioMenos();
  p.dibujarSurtido();
}
function verVegano(){
  p.dibujarSurtido(p.filtrarVegano());
}
function condCompraOnline(){
  var cond = window.open("","condiciones","width=500 height=400");
  cond.document.write("<body><h1>Condiciones de compra</h1> Los precios y condiciones de venta tienen un carácter meramente informativo y pueden ser modificados en atención a las fluctuaciones del mercado. No obstante, la realización del pedido mediante la cumplimentación del formulario de compra, implica la conformidad con el precio ofertado y con las condiciones generales de venta vigentes en ese concreto momento. Una vez formalizado el pedido, se entenderá perfeccionada la compra de pleno derecho, con todas las garantías legales que amparan al consumidor adquirente y, desde ese instante, los precios y condiciones tendrán carácter contractual y no podrán ser modificados sin el expreso acuerdo de ambos contratantes. El castellano será la lengua utilizada para formalizar el contrato. El documento electrónico en que se formalice el contrato se archivará y el usuario tendrá acceso a él en su zona de cliente<br><button onclick='window.close()'>Cerrar la ventana </button><br></body>");

}
function navegarCarrito(){
  location.assign("carrito.html");

}
