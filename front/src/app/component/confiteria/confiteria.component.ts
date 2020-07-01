import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confiteria',
  templateUrl: './confiteria.component.html',
  styleUrls: ['./confiteria.component.css']
})
export class ConfiteriaComponent implements OnInit {

  imagen1 = [ 'assets/img/Confiteria/pasta.gif'] ;
  imagen2 = [ 'assets/img/Confiteria/carruselConfi.png'] ;
  imagen3 = [ 'assets/img/Confiteria/chocolate.png'] ;
  imagen4 = [ 'assets/img/Confiteria/coctel.png'] ;
  imagen5 = [ 'assets/img/Confiteria/combo1.png'] ;
  imagen6 = [ 'assets/img/Confiteria/combo2.png'] ;
  imagen7 = [ 'assets/img/Confiteria/combo3.png'] ;
  imagen8 = [ 'assets/img/Confiteria/cuervo.png'] ;
  imagen9 = [ 'assets/img/Confiteria/cupcake.png'] ;
  imagen10 = [ 'assets/img/Confiteria/deditos.png'] ;
  imagen11 = [ 'assets/img/Confiteria/gaseosa.png'] ;
  imagen12 = [ 'assets/img/Confiteria/burguer.png'] ;
  imagen13 = [ 'assets/img/Confiteria/malteadas.png'] ;
  imagen14 = [ 'assets/img/Confiteria/manzanas.png'] ;
  imagen15 = [ 'assets/img/Confiteria/momias.png'] ;
  imagen16 = [ 'assets/img/Confiteria/nachos.png'] ;
  imagen17 = [ 'assets/img/Confiteria/palomitas.png'] ;
  imagen18 = [ 'assets/img/Confiteria/perro.png'] ;
  imagen19 = [ 'assets/img/Confiteria/sushi.png'] ;
  imagen20 = [ 'assets/img/Confiteria/tortas.png'] ;
  imagen21 = [ 'assets/img/Confiteria/combos.png'] ;

 

  producto = {
    producto1: 'SPAGUETTY DE OJOS',
    producto3: 'CEMENTERIO ACHOCOLATADO',
    producto4: 'COCTELES VENENOSOS',
    producto5: 'COMBO ZOMBIE',
    producto6: 'COMBO VAMPIRO',
    producto7: 'COMBO ADDAMS',
    producto8: 'SANDWICH DE CUERVO',
    producto9: 'CUPCAKE HANSEL Y GRETEL',
    producto10: 'DEDOS DE BRUJA',
    producto11: 'OJOS EN CONSERVA',
    producto12: 'HAMBURGUESA DE SESOS',
    producto13: 'MALTEADAS DEL INFIERNO',
    producto14: 'MANZANA DE LA MUERTE',
    producto15: 'MOMIAS',
    producto16: 'PANTEON DE NACHOS',
    producto17: 'PALOMITAS SANGRIENTAS',
    producto18: 'ESCENA DEL CRIMEN',
    producto19: 'SUSHI CANIVAL',
    producto20: 'PASTEL HUMANO'
  }

  frase = {
    frase1: '¿No alcanzaste a almorzar? No importa, ven y almuerzas con nosotros',
    frase3: 'Para que te revuelques en tu tumba',
    frase4: 'Solo un trago te llevara al mas alla',
    frase5: 'Para los adictos a comer cerebros',
    frase6: 'Si eres un chupasangre este combo es para ti',
    frase7: 'Este es solo para los que estamos locos',
    frase8: 'Vas a volar como ave de mal agüero con esta delicia',
    frase9: 'Preparados cuidadosamente por la bruja del bosque de los niños perdidos',
    frase10: 'Si los comes los tuyos tambien se caeran',
    frase11: 'Cada burbuja estalla las celulas de tu cuerpo',
    frase12: 'Esta para perder la cabeza',
    frase13: 'Como lava volcanica bajando por tu garganta',
    frase14: 'Ni blanca nieves se podra resistir a darle un mordisco',
    frase15: 'Corre que te alcanzan!!',
    frase16: 'Nunca sabras a quien pertenecio cada parte',
    frase17: 'Salpicadas por un crimen',
    frase18: 'El delito mas provocativo',
    frase19: '¡Este sushi esta de muerte!',
    frase20: 'Ni se te ocurra irte sin probar nuestras tortas'
  }

  descripcion = {
    descripcion1: '- Spaguetty a la boloñesa con ojos de queso, acompañado de pan fresco.',
    descripcion31: '- Murcielagos de chocolatina con galleta oreo.',
    descripcion32: '- Tumbas de fudge de chocolate, galleta de mantequilla y tierra achocolatada.',
    descripcion4: '- Coctel Hada verde: hierbabuena, limon y ron blanco.',
    descripcion41: '- Coctel Cianuro: Triple sec, limon y ginger.',
    descripcion42: '- Coctel laguna de la muerte: Curazao azul, vodka, estracto de moras azules.',
    descripcion5: '- Hamburguesa de Sesos: Carne artesanal, pan brioche, salsa de queso, cebollas caramelizadas.  - Malteada venenosa: Malteada de Oreo o de Naranja cremosa.  - Ojos: Gomitas en forma de ojo.',
    descripcion51: '- Malteada venenosa: Malteada de Oreo o de Naranja cremosa.',
    descripcion52: '- Ojos: Gomitas en forma de ojo.',
    descripcion6: '- Palomitas sangrientas: Palomitas con mantequilla o caramelo rojo.',
    descripcion61: '- Malteada sangrienta: Malteada de vainilla con salsa de cereza.',
    descripcion62: '- Murcielagos: Chocolatina con galleta oreo.',
    descripcion63: '- Momia: Salchicha envuelta en hojaldre con deliciosa salsa.',
    descripcion7: '- 2 Palomitas sangrientas: Palomitas con mantequilla o caramelo rojo.',
    descripcion71: '- 2 Malteadas monster: Malteada de caramelo con variedad de gomitas.',
    descripcion72: '- 4 Dedos de bruja: Hojaldre relleno con queso y salsa de mora o arequipe.',
    descripcion73: '- Sandwich de cuervo: Pollo mellado con aderezo ranch, queso y verduras.',
    descripcion74: '- Hamburguesa de sesos: Carne artesanal, pan brioche, salsa de queso, cebollas caramelizadas.',
    descripcion8: '- Pan de semillas, pollo desmechado con aderezo ranch, queso y verduras a elección en julianas',
    descripcion9: '- Variedad de pastelitos rellenos de cremas de sabores a eleccion',
    descripcion10: '- Deditos de queso en hojaldre rellenos con salsa de mora o de arequipe',
    descripcion11: '- Gaseosa a elección decorada con gomitas en forma de ojo',
    descripcion12: '- Carne artesanal, pan brioche, salsa de queso, cebollas caramelizadas, acompañada de papitas en casco',
    descripcion13: '- Variedad de malteadas de sabores y toppings a eleccion',
    descripcion14: '- Manzana bañana en suave salsa de chocolate blanco con salsa de caramelo roja.',
    descripcion15: '- Hojaldre relleno de salchicha americana acompañado de deliciosa salsa, tamaño pequeño y mediano',
    descripcion16: '- Chili, deditos de salchicha cubiertos de queso, ojos de queso y nachos',
    descripcion17: '- Palomitas de maiz bañadas en mantequilla roja o caramelo rojo, tamaño mediano',
    descripcion18: '- Perro caliente: Salchicha americana, queso, papitas y salsas a eleccion.  - Pizza: Sabor a elección.' ,
    descripcion181: '- Pizza: Sabor a elección.' ,
    descripcion19: '- Variedad de sabores de sushi a eleccion acompañados de teriyaki y salsa soya unidad por 10 bocados.',
    descripcion20: '- Torta RH+: Delicioso bizcochuelo de mora, cubierto en chocolate blanco y salsa de cerezas.',
    descripcion201: '- Torta cerebral: Torta 3 leches, cubierta de crema blanca y salsa de cerezas.'

  }

  precio = {
    precio1: '$10.000',
    precio3: '$5.000 c/u',
    precio4: '$12.000 c/u',
    precio5: '$21.000',
    precio6: '$25.000',
    precio7: '$40.000',
    precio8: '$9.000',
    precio9: '$4.000 c/u',
    precio10: '$1.700 c/u',
    precio11: '$5.000 ',
    precio12: '$14.000 ',
    precio13: '$7.000 c/u',
    precio14: '$3.500 c/u',
    precio15: '$3.000,  $5.000',
    precio16: '$10.000',
    precio17: '$8.000',
    precio18: '$8.000,  $5.000',
    precio19: '$15.000',
    precio20: '$3.000 porción'
  }






  constructor() { }

  ngOnInit(): void {
  }

}
