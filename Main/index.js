const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
      table {
        border-collapse: collapse;
      }
      
      table, td, th {
        border: 1px solid black;
      }
      </style>
  <body>
      <table Table Width="800" bgcolor="Yellow">
      <tr> <td><center> <b> <font size="+2"  > The Periodic Table</font> </b> </center> </td> </tr>
      </table>
  
      <table width="100%" align="adjust">
          <tr>
              <td id="H" title="Hydrogen" align="center" bgcolor="#FFA07A" >1 <br> H</td>
             <td id="space" colspan="16"  bgcolor="white" ></td>
             <td id="He" title="Helium" align="center" bgcolor="#DCDCDC" >2 <br> He </td>
         
          </tr>
          <tr>
              <td id="li" title="Lithium" align="center" bgcolor="#DA70D6"> 3 <br> Li </td>
              <td id="be" title="Beryllium" align="center" bgcolor="lightblue" >4 <br> Be </td>
              <td id="space" colspan="10" align="center" ></td>
              <td id="B" title="Boron" align="center" bgcolor="#A0522D" >5 <br> B </td>
              <td id="C" title="Carbon" align="center" bgcolor="#FFA07A" >6 <br> C </td>
              <td id="N" title="Nitrogen" align="center" bgcolor="#FFA07A" >7 <br> N </td>
              <td id="O" title="Oxygen" align="center" bgcolor="#FFA07A" >8 <br> O </td>
              <td id="F" title="Flourine" align="center" bgcolor="#fffdd0" >9 <br> F </td>
              <td id="Ne" title="Neon" align="center" bgcolor="#DCDCDC" >10 <br> Ne </td>
          </tr>
          <tr>
              <td id="Na" title="Na" align="center" bgcolor="#DA70D6" >11 <br> Na </td>
              <td id="Mg" title="Magnesium" align="center" bgcolor="lightblue" >12 <br> Mg </td>
              <td id="space" colspan="10"   align="center" ></td>
              <td id="Ai" title="Aluminium" align="center" bgcolor="lightgreen" >13 <br> Ai </td>
              <td id="Si" title="Silicon" align="center"  bgcolor="#A0522D" >14 <br> Si </td>
              <td id="P" title="Phosphorus" align="center" bgcolor="#FFA07A" >15 <br> P </td>
              <td id="S" title="Sulfur" align="center" bgcolor="#FFA07A" >16 <br> S </td>
              <td id="Ci" title="Chlorine" align="center" bgcolor="#fffdd0" >17 <br> Ci </td>
              <td id="Ar" title="Argon" align="center" bgcolor="#DCDCDC" >18 <br> Ar </td>
          </tr>
          <tr>
              <td id="K" title="Potassium" align="center" bgcolor="#DA70D6" >19 <br> K </td>
              <td id="Ca" title="Calcium" align="center" bgcolor="lightblue" >20 <br> Ca </td>
              <td id="Sc" title="Scandium" align="center" bgcolor="#F9E79F" >21 <br> Sc </td>
              <td id="Ti" title="Titanium" align="center"  bgcolor="#F9E79F" >22 <br> Ti </td>
              <td id="V" title="Vanadium" align="center"  bgcolor="#F9E79F" >23 <br> V </td>
              <td id="Cr" title="Chromium" align="center"  bgcolor="#F9E79F" >24 <br> Cr </td>
              <td id="Mn" title="Maganese" align="center"  bgcolor="#F9E79F" >25 <br> Mn </td>
              <td id="Fe" title="Iron" align="center"  bgcolor="#F9E79F" >26 <br> Fe </td>
              <td id="Co" title="Cobalt" align="center"  bgcolor="#F9E79F" >27 <br> Co </td>
              <td id="Ni" title="Nickel" align="center"  bgcolor="#F9E79F" >28 <br> Ni </td>
              <td id="Cu" title="Copper" align="center" bgcolor="#F9E79F">29 <br> Cu </td>
              <td id="Zn" title="Zinc" align="center"  bgcolor="#F9E79F" >30 <br> Zn </td>
              <td id="Ga" title="GaLium" align="center" bgcolor="lightgreen"   >31 <br> Ga </td>
              <td id="Ge" title="Germanium" align="center" bgcolor="#A0522D"  >32 <br> Ge </td>
              <td id="As" title="Arsenic" align="center"  bgcolor="#A0522D" >33 <br> As </td>
              <td id="Se" title="Selinium" align="center" bgcolor="#FFA07A" >34 <br> Se </td>
              <td id="Br" title="Bromine" align="center" bgcolor="#fffdd0" >35 <br> Br </td>
              <td id="Kr" title="Krypton" align="center" bgcolor="#DCDCDC" >36 <br> Kr </td>
          </tr>
          <tr>
              <td id="Rb" title="Rubidium" align="center" bgcolor="#DA70D6" >37 <br> Rb </td>
              <td id="Sr" title="Strontium" align="center" bgcolor="lightblue" >38 <br> Sr </td>
              <td id="Y" title="Yttrium" align="center"  bgcolor="#F9E79F" >39 <br> Y </td>
              <td id="Zr" title="Zicronium" align="center"  bgcolor="#F9E79F" >40 <br> Zr </td>
              <td id="Nb" title="Niobium" align="center"  bgcolor="#F9E79F" >41 <br> Nb </td>
              <td id="Mo" title="Molybdenum" align="center"  bgcolor="#F9E79F" >42 <br> Mo </td>
              <td id="Tc" title="Technetium" align="center"  bgcolor="#F9E79F" >43 <br> Tc </td>
              <td id="Ru" title="Ruthenium" align="center"  bgcolor="#F9E79F" >44 <br> Ru </td>
              <td id="Rh" title="Rhodium" align="center"  bgcolor="#F9E79F" >45 <br> Rh </td>
              <td id="Pd" title="Palladium" align="center"  bgcolor="#F9E79F" >46 <br> Pd </td>
              <td id="Ag" title="Silver" align="center"  bgcolor="#F9E79F" >47 <br> Ag </td>
              <td id="Cd" title="Cadmium" align="center"  bgcolor="#F9E79F" >48 <br> Cd </td>
              <td id="In" title="Indium" align="center" bgcolor="lightgreen" >49 <br> In </td>
              <td id="Sn" title="Tin" align="center" bgcolor="lightgreen" >50 <br> Sn </td>
              <td id="Sb" title="Antimony" align="center"  bgcolor="#A0522D" >51 <br> Sb </td>
              <td id="Te" title="Tellurium" align="center"  bgcolor="#A0522D" >52 <br> Te </td>
              <td id="I" title="Iodine" align="center" bgcolor="#fffdd0" >53 <br> I </td>
              <td id="Xe" title="Xenson" align="center" bgcolor="#DCDCDC" >54 <br> Xe </td>
          </tr>
          <tr>
              <td id="Cs" title="Cesium" align="center" bgcolor="#DA70D6" >55 <br> Cs </td>
              <td id="Ba" title="Barium" align="center" bgcolor="lightblue" >56 <br> Ba </td>
              <td id="margin"  align="center" bgcolor="white" > 57-71 <br>  </td>
              <td id="Hf" title="hafnium" align="center"  bgcolor="#F9E79F" >72 <br> Hf </td>
              <td id="Ta" title="Tantalum" align="center"  bgcolor="#F9E79F" >73 <br> Ta </td>
              <td id="W" title="Tungsten" align="center"  bgcolor="#F9E79F" >74 <br> W </td>
              <td id="Re" title="Rhenium" align="center"  bgcolor="#F9E79F" >75 <br> Re </td>
              <td id="Os" title="Osmium" align="center"  bgcolor="#F9E79F" >76 <br> Os </td>
              <td id="Ir" title="Irdium" align="center"  bgcolor="#F9E79F" >77 <br> Ir </td>
              <td id="Pt" title="Plantium" align="center"  bgcolor="#F9E79F" >78 <br> Pt </td>
              <td id="Au" title="Gold" align="center"  bgcolor="#F9E79F" >79 <br> Au </td>
              <td id="Hg" title="Mercury" align="center"  bgcolor="#F9E79F" >80 <br> Hg </td>
              <td id="TI" title="Thallium" align="center" bgcolor="lightgreen" >81 <br> TI </td>
              <td id="Pb" title="Lead" align="center" bgcolor="lightgreen" >82 <br> Pb </td>
              <td id="Bi" title="Bismuth" align="center" bgcolor="lightgreen" >83 <br> Bi </td>
              <td id="Po" title="Polonium" align="center"  bgcolor="#A0522D" >84 <br> Po </td>
              <td id="At" title="Astatine" align="center" bgcolor="#fffdd0" >85 <br> At </td>
              <td id="Rn" title="Radon" align="center" bgcolor="#DCDCDC" >86 <br> Rn </td>
          </tr>
          <tr>
              <td id="Fr" title="Francium" align="center" bgcolor="#DA70D6" >87 <br> Fr </td>
              <td id="Ra" title="Radium" align="center" bgcolor="lightblue" >88 <br> Ra </td>
              <td id="margin"  align="center" bgcolor="white" >  89-103 <br>  </td>
              <td id="Rf" title="lieRutherfordium" align="center"  bgcolor="#F9E79F" >104 <br> Rf </td>
              <td id="Db" title="Dubnium" align="center"  bgcolor="#F9E79F" >105 <br> Db </td>
              <td id="Sg" title="Seaborgium" align="center"  bgcolor="#F9E79F" >106 <br> Sg </td>
              <td id="Bh" title="Bohrium" align="center"  bgcolor="#F9E79F" >107 <br> Bh </td>
              <td id="Hs" title="Hassium" align="center" bgcolor="#F9E79F" >108 <br> Hs </td>
              <td id="Mt" title="Meitherium" align="center"  bgcolor="#F9E79F" >109 <br> Mt </td>
              <td id="Ds" title="Dramstaditum" align="center" bgcolor="#F9E79F" >110 <br> Ds </td>
              <td id="Rg" title="Roentgenium" align="center"  bgcolor="#F9E79F" >111 <br> Rg </td>
              <td id="Cn" title="copernicium" align="center" bgcolor="#F9E79F" >112 <br> Cn </td>
              <td id="Nh" title="Nihonium" align="center" bgcolor="#F5FFFA" >113 <br> Nh </td>
              <td id="FI" title="Flerovium" align="center" bgcolor="#F5FFFA" >114 <br> FI </td>
              <td id="Mc" title="Moscovium" align="center" bgcolor="#F5FFFA" >115 <br> Mc </td>
              <td id="Lv" title="Livemorium" align="center" bgcolor="#F5FFFA" >116 <br> Lv </td>
              <td id="Ts" title="Tennessine" align="center" bgcolor="#F5FFFA" >117 <br> Ts </td>
              <td id="Og" title="Oganesson" align="center" bgcolor="#F5FFFA" >118 <br> Og </td>
          </tr>
          <tr>
              <td id="margin" colspan="2" align="center" ></td>
              <td id="La" title="Lanthanum" align="center" bgcolor="#D4E6F1" > 57 <br> La </td>
              <td id="Ce" title="Cerium" align="center" bgcolor="#D4E6F1" >58 <br> Ce </td>
              <td id="Pr" title="Praseodymium" align="center" bgcolor="#D4E6F1" >59 <br> Pr </td>
              <td id="Nd" title="Neodymium" align="center" bgcolor="#D4E6F1" >60 <br> Nd </td>
              <td id="Pm" title="Promethium" align="center" bgcolor="#D4E6F1" >61 <br> Pm </td>
              <td id="Sm" title="Neodymium" align="center" bgcolor="#D4E6F1" >62 <br> Sm </td>
              <td id="Eu" title="Europium" align="center" bgcolor="#D4E6F1" >63 <br> Eu </td>
              <td id="Gd" title="Gadolinium" align="center" bgcolor="#D4E6F1" >64 <br> Gd </td>
              <td id="Tb" title="Terbium" align="center" bgcolor="#D4E6F1" >65 <br> Tb </td>
              <td id="Dy" title="Dysprosium" align="center" bgcolor="#D4E6F1" >66 <br> Dy </td>
              <td id="Ho" title="Holomium" align="center" bgcolor="#D4E6F1" >67 <br> Ho </td>
              <td id="Er" title="Erbium" align="center" bgcolor="#D4E6F1" >68 <br> Er </td>
              <td id="Tm" title="Thulium" align="center" bgcolor="#D4E6F1" >69 <br> Tm </td>
              <td id="Yb" title="Ytterbium" align="center" bgcolor="#D4E6F1" >70 <br> Yb </td>
              <td id="Lu" title="Lutetium" align="center"bgcolor="#D4E6F1" >71 <br> Lu </td>
          </tr>
          <tr>
              <td id="margin" colspan="2" align="center" bgcolor="white" ></td>
              <td id="Ac" title="Actinium" align="center" bgcolor="#D4E6F1" >89 <br> Ac </td>
              <td id="Th" title="Thoium" align="center" bgcolor="#D4E6F1" >99 <br> Th </td>
              <td id="Pa" title="Protactinium" align="center" bgcolor="#D4E6F1" >91 <br> Pa </td>
              <td id="U" title="Uranium" align="center" bgcolor="#D4E6F1" >92 <br> U </td>
              <td id="Np" title="Neptunium" align="center" bgcolor="#D4E6F1" >93 <br> Np </td>
              <td id="Pu" title="Plutonium" align="center" bgcolor="#D4E6F1" >94 <br> Pu </td>
              <td id="Am" title="Americium" align="center" bgcolor="#D4E6F1" >95 <br> Am </td>
              <td id="Cm" title="Curium" align="center" bgcolor="#D4E6F1" >96 <br> Cm </td>
              <td id="Bk" title="Berkelium" align="center" bgcolor="#D4E6F1" >97 <br> Bk </td>
              <td id="Cf" title="Califonium" align="center" bgcolor="#D4E6F1" >98 <br> Cf </td>
              <td id="Es" title="Einsteinium" align="center" bgcolor="#D4E6F1" >99 <br> Es </td>
              <td id="Fm" title="Femium" align="center" bgcolor="#D4E6F1" >100 <br> Fm </td>
              <td id="Md" title="Mendelevium" align="center" bgcolor="#D4E6F1" >101 <br> Md </td>
              <td id="No" title="Nobelium" align="center" bgcolor="#D4E6F1" >102 <br> No </td>
              <td id="Lr" title="Lawrencium" align="center" bgcolor="#D4E6F1" >103 <br> Lr </td>
          </tr>
      </table>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});