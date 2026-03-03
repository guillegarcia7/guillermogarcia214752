var D = [
  {id:1,marca:"Toyota",modelo:"Corolla",anio:2025,precio:23500,km:0,cero:true,tipo:"Sedan",trans:"Automatico",comb:"Bencina",color:"Blanco",motor:"1.8L",pot:"140 HP",puertas:4,asientos:5,
   desc:"0 km directo de concesionario. El sedan mas confiable del mercado con garantia de fabrica. Equipado con control de crucero, pantalla tactil, Bluetooth y 6 airbags. Ideal para uso diario con bajo consumo de combustible.",
   hl:["Garantia de fabrica","Control de crucero","6 airbags","Pantalla tactil","Bluetooth"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2021_Toyota_Corolla_LE_%28facelift%2C_white%29%2C_front_8.21.21.jpg/800px-2021_Toyota_Corolla_LE_%28facelift%2C_white%29%2C_front_8.21.21.jpg"},
  {id:2,marca:"Hyundai",modelo:"Tucson",anio:2020,precio:22000,km:41000,cero:false,tipo:"SUV",trans:"Automatico",comb:"Bencina",color:"Gris",motor:"2.0L",pot:"150 HP",puertas:4,asientos:5,
   desc:"SUV comodo y espacioso ideal para familia. Pantalla tactil de 8 pulgadas, camara de retroceso, sensores de estacionamiento y tapiz en muy buen estado. Revision tecnica al dia.",
   hl:["Pantalla 8 pulgadas","Camara retroceso","Sensores parking","Un dueno","RT al dia"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/2019_Hyundai_Tucson_%28TL%2C_facelift%29_Elite_2WD%2C_front_8.15.19.jpg/800px-2019_Hyundai_Tucson_%28TL%2C_facelift%29_Elite_2WD%2C_front_8.15.19.jpg"},
  {id:3,marca:"Ford",modelo:"Ranger XLT",anio:2019,precio:19800,km:65000,cero:false,tipo:"Pickup",trans:"Manual",comb:"Diesel",color:"Negro",motor:"3.2L",pot:"200 HP",puertas:4,asientos:5,
   desc:"Pickup robusta y versatil para trabajo y aventura. Traccion 4x4 con bloqueo diferencial, suspension reforzada y caja de carga con proteccion. Motor TDCi de bajo consumo y alta torque.",
   hl:["Traccion 4x4","Bloqueo diferencial","Suspension reforzada","Motor TDCi","Caja protegida"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2019_Ford_Ranger_XLT_SuperCrew%2C_front_8.6.19.jpg/800px-2019_Ford_Ranger_XLT_SuperCrew%2C_front_8.6.19.jpg"},
  {id:4,marca:"Chevrolet",modelo:"Spark",anio:2022,precio:9500,km:14000,cero:false,tipo:"Hatchback",trans:"Manual",comb:"Bencina",color:"Rojo",motor:"1.2L",pot:"80 HP",puertas:5,asientos:5,
   desc:"Perfecto para la ciudad. Muy bajo consumo de combustible, facil de estacionar y con excelente maniobrabilidad. Ideal como primer auto o para uso urbano diario.",
   hl:["17 km por litro","Facil de estacionar","Bajo costo mantenc.","Casi nuevo","Documentos al dia"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chevrolet_Spark_activ_2022.jpg/800px-Chevrolet_Spark_activ_2022.jpg"},
  {id:5,marca:"Kia",modelo:"Sportage",anio:2021,precio:24500,km:33000,cero:false,tipo:"SUV",trans:"Automatico",comb:"Bencina",color:"Azul",motor:"2.0L",pot:"155 HP",puertas:4,asientos:5,
   desc:"SUV moderno con tecnologia avanzada. Apple CarPlay y Android Auto, sensores de estacionamiento delanteros y traseros, control de estabilidad y asistente de arranque en pendiente.",
   hl:["Apple CarPlay","Android Auto","Sensores 360","Control estabilidad","Arranque pendiente"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2021_Kia_Sportage_GT-Line_S_AWD_%28facelift%2C_blue%29%2C_front_8.8.21.jpg/800px-2021_Kia_Sportage_GT-Line_S_AWD_%28facelift%2C_blue%29%2C_front_8.8.21.jpg"},
  {id:6,marca:"Toyota",modelo:"Hilux 4x4",anio:2020,precio:28000,km:72000,cero:false,tipo:"Pickup",trans:"Manual",comb:"Diesel",color:"Gris",motor:"2.8L",pot:"204 HP",puertas:4,asientos:5,
   desc:"La pickup mas vendida de Chile. Motor diesel de 204 HP con 500 Nm de torque. Traccion 4x4 con reductora. Historial de mantenciones en Toyota. Listo para trabajo pesado.",
   hl:["500 Nm torque","Traccion 4x4 reductora","Historial Toyota","Apto trabajo pesado","GPS incluido"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2020_Toyota_Hilux_SR5_Plus_4x4_%28Australia%29_front_8.15.20.jpg/800px-2020_Toyota_Hilux_SR5_Plus_4x4_%28Australia%29_front_8.15.20.jpg"},
  {id:7,marca:"Suzuki",modelo:"Swift",anio:2023,precio:12000,km:8000,cero:false,tipo:"Hatchback",trans:"Automatico",comb:"Bencina",color:"Blanco",motor:"1.2L",pot:"90 HP",puertas:5,asientos:5,
   desc:"Como nuevo con solo 8.000 km. Liviano y agil, perfecto para ciudad. Sistema de frenado automatico de emergencia, alerta de salida de carril y camara trasera incluidos.",
   hl:["Solo 8.000 km","Frenado autom. emerg.","Alerta salida carril","Camara trasera","Garantia vigente"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2024_Suzuki_Swift_Mild_Hybrid_%28ZC33%2C_white%29%2C_front_11.2.24.jpg/800px-2024_Suzuki_Swift_Mild_Hybrid_%28ZC33%2C_white%29%2C_front_11.2.24.jpg"},
  {id:8,marca:"Nissan",modelo:"Kicks",anio:2022,precio:17500,km:22000,cero:false,tipo:"SUV",trans:"Automatico",comb:"Bencina",color:"Naranja",motor:"1.6L",pot:"114 HP",puertas:4,asientos:5,
   desc:"Crossover moderno con gran espacio interior. Pantalla de 8 pulgadas con Apple CarPlay, camara 360, control crucero e inteligente sistema de distribucion de frenado.",
   hl:["Camara 360","Apple CarPlay","Control crucero","Amplio maletero","Bajo consumo"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2021_Nissan_Kicks_SR_%28Mexico%29%2C_front_8.18.21.jpg/800px-2021_Nissan_Kicks_SR_%28Mexico%29%2C_front_8.18.21.jpg"},
  {id:9,marca:"Hyundai",modelo:"Accent",anio:2019,precio:11000,km:58000,cero:false,tipo:"Sedan",trans:"Manual",comb:"Bencina",color:"Plata",motor:"1.4L",pot:"100 HP",puertas:4,asientos:5,
   desc:"Sedan coreano confiable con bajo costo de mantencion. Ideal como primer auto o para conductores que buscan economia. Tapiz interior impecable y carroceria sin golpes.",
   hl:["Sin golpes","Tapiz impecable","Bajo costo mantenc.","Economico","Documentos al dia"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/2018_Hyundai_Accent_SE_%28facelift%2C_silver%29%2C_front_3.14.19.jpg/800px-2018_Hyundai_Accent_SE_%28facelift%2C_silver%29%2C_front_3.14.19.jpg"},
  {id:10,marca:"Ford",modelo:"Explorer",anio:2021,precio:35000,km:29000,cero:false,tipo:"SUV",trans:"Automatico",comb:"Bencina",color:"Negro",motor:"2.3L",pot:"300 HP",puertas:4,asientos:7,
   desc:"SUV premium de 7 plazas con equipamiento de lujo. Techo panoramico, asientos de cuero, sistema de sonido premium, pantalla de 10 pulgadas y 10 airbags. El mas completo del stock.",
   hl:["7 plazas","Techo panoramico","Asientos cuero","Sonido premium","10 airbags"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2021_Ford_Explorer_XLT_%28facelift%29%2C_front_8.10.21.jpg/800px-2021_Ford_Explorer_XLT_%28facelift%29%2C_front_8.10.21.jpg"},
  {id:11,marca:"Kia",modelo:"Picanto",anio:2025,precio:13500,km:0,cero:true,tipo:"Hatchback",trans:"Manual",comb:"Bencina",color:"Azul",motor:"1.0L",pot:"67 HP",puertas:5,asientos:5,
   desc:"0 km recien llegado. El compacto perfecto para moverse por la ciudad. Garantia de fabrica de 5 anos o 100.000 km. Pantalla tactil, Bluetooth y camara de retroceso incluidos.",
   hl:["Garantia 5 anos","0 km","Pantalla tactil","Camara retroceso","Bluetooth"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Kia_Picanto_GT-Line_%28JA%2C_facelift%29%2C_front_8.22.22.jpg/800px-Kia_Picanto_GT-Line_%28JA%2C_facelift%29%2C_front_8.22.22.jpg"},
  {id:12,marca:"Toyota",modelo:"RAV4 Hibrido",anio:2023,precio:39000,km:5000,cero:false,tipo:"SUV",trans:"Automatico",comb:"Hibrido",color:"Verde",motor:"2.5L",pot:"222 HP",puertas:4,asientos:5,
   desc:"SUV hibrido de ultima generacion. Sistema TNGA con traccion total electrica trasera. Consume aprox. 5.5L cada 100km en ciudad. Garantia Toyota vigente y revisiones al dia.",
   hl:["5.5L por 100km","Traccion total electrica","Garantia Toyota","Sistema TNGA","Revisiones al dia"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2021_Toyota_RAV4_Hybrid_XLE_Premium_AWD_%28facelift%2C_green%29%2C_front_3.12.22.jpg/800px-2021_Toyota_RAV4_Hybrid_XLE_Premium_AWD_%28facelift%2C_green%29%2C_front_3.12.22.jpg"},
  {id:13,marca:"Chevrolet",modelo:"Tracker",anio:2025,precio:26000,km:0,cero:true,tipo:"SUV",trans:"Automatico",comb:"Bencina",color:"Rojo",motor:"1.2T",pot:"133 HP",puertas:4,asientos:5,
   desc:"0 km con garantia de 3 anos o 100.000 km. Motor turbo de bajo consumo con inyeccion directa. Pantalla de 8 pulgadas, camara 360, frenado autonomo y 6 airbags.",
   hl:["Garantia 3 anos","Camara 360","Frenado autonomo","Motor turbo","6 airbags"],
   foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2021_Chevrolet_Tracker_1.2T_RS_%28China%29%2C_front_2.28.21.jpg/800px-2021_Chevrolet_Tracker_1.2T_RS_%28China%29%2C_front_2.28.21.jpg"}
];

var actual = null;

function fmt(n){ return "USD " + n.toLocaleString("es-CL"); }

function crearImg(url, alt, cls, phCls) {
  if (!url) return '<div class="' + phCls + '">🚗</div>';
  var img = document.createElement("img");
  img.className = cls;
  img.alt = alt;
  img.loading = "lazy";
  img.addEventListener("error", function() {
    var ph = document.createElement("div");
    ph.className = phCls;
    ph.textContent = "🚗";
    this.parentNode.replaceChild(ph, this);
  });
  img.src = url;
  return img;
}

function tarjeta(a) {
  var div = document.createElement("div");
  div.className = "card";

  var fwrap = document.createElement("div");
  fwrap.className = "foto-wrap";
  var img = crearImg(a.foto, a.marca + " " + a.modelo, "foto-img", "foto-ph");
  if (typeof img === "string") { fwrap.innerHTML = img; } else { fwrap.appendChild(img); }
  div.appendChild(fwrap);

  if (a.cero) {
    var b = document.createElement("span");
    b.className = "badge badge-v"; b.textContent = "0 km"; div.appendChild(b);
  } else if (a.anio >= 2023) {
    var bd = document.createElement("span");
    bd.className = "badge badge-d"; bd.textContent = "Reciente"; div.appendChild(bd);
  }

  var kmtxt = a.cero ? '<span style="color:var(--verde);font-weight:500">0 km</span>' : a.km.toLocaleString("es-CL") + " km";
  var body = document.createElement("div");
  body.className = "cbody";
  body.innerHTML =
    '<div class="cmarca">' + a.marca + '</div>' +
    '<div class="cnombre">' + a.modelo + ' ' + a.anio + '</div>' +
    '<div class="cspecs">' +
      '<span class="cspec">⚙️ ' + a.trans + '</span>' +
      '<span class="cspec">⛽ ' + a.comb + '</span>' +
      '<span class="cspec">🗂 ' + a.tipo + '</span>' +
      '<span class="cspec">📍 ' + kmtxt + '</span>' +
    '</div>' +
    '<div class="cfooter">' +
      '<div><div class="cprecio">' + fmt(a.precio) + '</div><div class="cprecio-sub">precio de lista</div></div>' +
      '<button class="btn-ver">Ver detalle</button>' +
    '</div>';
  div.appendChild(body);

  div.querySelector(".btn-ver").addEventListener("click", function(e) {
    e.stopPropagation(); abrirModal(a.id);
  });
  return div;
}

function render(id, lista) {
  var g = document.getElementById(id);
  g.innerHTML = "";
  if (!lista.length) {
    g.innerHTML = '<div class="empty"><div style="font-size:2.8rem">🔍</div><h3>Sin resultados</h3><p>Proba con otros filtros.</p></div>';
    return;
  }
  lista.forEach(function(a) { g.appendChild(tarjeta(a)); });
}

function filtrar() {
  var marca = document.getElementById("f-marca").value;
  var tipo  = document.getElementById("f-tipo").value;
  var trans = document.getElementById("f-trans").value;
  var comb  = document.getElementById("f-comb").value;
  var cero  = document.getElementById("f-cero").checked;
  var amin  = parseInt(document.getElementById("f-amin").value)  || 0;
  var amax  = parseInt(document.getElementById("f-amax").value)  || 9999;
  var pmin  = parseInt(document.getElementById("f-pmin").value)  || 0;
  var pmax  = parseInt(document.getElementById("f-pmax").value)  || Infinity;
  var kmmax = cero ? 0 : (parseInt(document.getElementById("f-km").value) || Infinity);
  var txt   = document.getElementById("f-txt").value.toLowerCase().trim();

  var r = D.filter(function(a) {
    if (marca && a.marca !== marca) return false;
    if (tipo  && a.tipo  !== tipo)  return false;
    if (trans && a.trans !== trans) return false;
    if (comb  && a.comb  !== comb)  return false;
    if (cero  && !a.cero)           return false;
    if (a.anio < amin || a.anio > amax) return false;
    if (a.precio < pmin || a.precio > pmax) return false;
    if (!cero && a.km > kmmax) return false;
    if (txt && a.marca.toLowerCase().indexOf(txt) < 0 && a.modelo.toLowerCase().indexOf(txt) < 0) return false;
    return true;
  });

  document.getElementById("conteo").innerHTML = "<strong>" + r.length + "</strong> vehiculo" + (r.length !== 1 ? "s" : "") + " encontrado" + (r.length !== 1 ? "s" : "");
  render("g-buscar", r);
  document.getElementById("g-buscar").scrollIntoView({behavior:"smooth", block:"start"});
}

function limpiar() {
  ["f-marca","f-tipo","f-trans","f-comb"].forEach(function(id) { document.getElementById(id).value = ""; });
  ["f-amin","f-amax","f-pmin","f-pmax","f-km","f-txt"].forEach(function(id) { document.getElementById(id).value = ""; });
  document.getElementById("f-cero").checked = false;
  document.getElementById("km-wrap").classList.remove("off");
  document.getElementById("conteo").textContent = "";
  render("g-buscar", D);
}

function abrirModal(id) {
  var a = null;
  for (var i = 0; i < D.length; i++) { if (D[i].id === id) { a = D[i]; break; } }
  if (!a) return;
  actual = a;

  var fw = document.getElementById("mfoto-wrap");
  fw.innerHTML = "";
  var mimg = crearImg(a.foto, a.marca + " " + a.modelo, "mfoto", "mfoto-ph");
  if (typeof mimg === "string") { fw.innerHTML = mimg; } else { fw.appendChild(mimg); }

  document.getElementById("mtitulo").textContent = a.modelo + " " + a.anio;
  document.getElementById("msub").textContent    = a.marca + " · " + a.tipo + " · " + a.color;
  document.getElementById("mprecio").textContent = fmt(a.precio);
  document.getElementById("mbadge").innerHTML    = a.cero ? '<span class="mbadge0">0 km — Nuevo</span>' : "";
  document.getElementById("mdesc").textContent   = a.desc;

  var specs = [
    ["Año", String(a.anio)],
    ["Kilómetros", a.cero ? "0 km" : a.km.toLocaleString("es-CL") + " km"],
    ["Transmisión", a.trans],
    ["Combustible", a.comb],
    ["Motor", a.motor],
    ["Potencia", a.pot],
    ["Puertas", String(a.puertas)],
    ["Asientos", String(a.asientos)]
  ];
  document.getElementById("mspecs").innerHTML = specs.map(function(s) {
    return '<div class="msitem"><div class="mslabel">' + s[0] + '</div><div class="msvalor">' + s[1] + '</div></div>';
  }).join("");

  document.getElementById("mhls").innerHTML = (a.hl || []).map(function(h) {
    return '<span class="mhl">&#10003; ' + h + '</span>';
  }).join("");

  document.getElementById("mfondo").classList.add("open");
  document.body.style.overflow = "hidden";
}

function cerrar() {
  document.getElementById("mfondo").classList.remove("open");
  document.body.style.overflow = "";
}

window.addEventListener("load", function() {
  render("g-catalogo", D);
  render("g-buscar", D);
  document.getElementById("conteo").innerHTML = "<strong>" + D.length + "</strong> vehiculos en stock";

  document.getElementById("btn-buscar").addEventListener("click", filtrar);
  document.getElementById("btn-limpiar").addEventListener("click", limpiar);
  document.getElementById("f-txt").addEventListener("keydown", function(e) { if (e.key === "Enter") filtrar(); });

  document.getElementById("f-cero").addEventListener("change", function() {
    var w = document.getElementById("km-wrap");
    if (this.checked) { w.classList.add("off"); document.getElementById("f-km").value = ""; }
    else { w.classList.remove("off"); }
  });

  document.getElementById("mcerrar").addEventListener("click", cerrar);
  document.getElementById("mcerrar2").addEventListener("click", cerrar);
  document.getElementById("mfondo").addEventListener("click", function(e) { if (e.target === this) cerrar(); });
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") cerrar(); });

  document.getElementById("mconsultar").addEventListener("click", function() {
    cerrar();
    if (actual) {
      var c = document.querySelector("[name=mensaje]");
      if (c) c.value = "Hola, me interesa el " + actual.marca + " " + actual.modelo + " " + actual.anio + " (" + fmt(actual.precio) + "). Podria darme mas informacion?";
    }
    document.getElementById("contacto").scrollIntoView({behavior:"smooth"});
  });

  document.getElementById("form-c").addEventListener("submit", function(e) {
    e.preventDefault();
    var btn = this.querySelector("button[type=submit]"), form = this;
    btn.textContent = "Enviando..."; btn.disabled = true;
    setTimeout(function() {
      form.reset(); btn.textContent = "Enviar mensaje"; btn.disabled = false;
      var ok = document.getElementById("form-ok");
      ok.style.display = "block";
      setTimeout(function() { ok.style.display = "none"; }, 5000);
    }, 1200);
  });
});