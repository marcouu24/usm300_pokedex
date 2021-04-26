
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  const pokemones=[]; //definir arreglo
  

  const cargarTabla = () =>{

      //1.obtener referencia tabla
      let tbody = document.querySelector("#tbody-tabla");
      //elimiar contenido tbody
      tbody.innerHTML="";
      //2. recorrer lista pokemones
      for (let i=0; i < pokemones.length; ++i){
        let p = pokemones[i];
        //3 por cada pokemon generar una fila en la tabla (tr)
        let tr = document.createElement("tr")
        //4 por cada atributo generar un td en la tabla
        let tdNro= document.createElement("td");
        let tdNombre= document.createElement("td");
        let tdTipo= document.createElement("td");
        let tdDescripcion= document.createElement("td");
        let tdAcciones= document.createElement("td");

        //Definir lo q va en la tabla
        tdNro.innerText=i+1;
        tdNombre.innerText=p.nombre;
        //TODO: TIPO TIENE Q SER ICONO
        let tipo = document.createElement("i");
        if (p.tipo =="1"){
          //tipo planta 
          tipo.classList.add("fas","fa-leaf", "text-succes","fa-3x");
        }else if (p.tipo=="2"){
          //tipo fuego 
          tipo.classList.add("fas","fa-fire", "text-danger", "fa-3x");
        }else if (p.tipo == "3"){
          //tipoalectrico <i class="fas fa-bolt"></i>
          tipo.classList.add("fas","fa-bolt", "text-warning", "fa-3x");
        }else if (p.tipo =="4"){
          //tipo agua <i class="fas fa-tint></i>
          tipo.classList.add("fas","fa-tint", "text-primary", "fa-3x");
        }else{
          //tipo normal <i class="fas fa-bullseye"></i>
          tipo.classList.add("fas","fa-bullseye", "text-info", "fa-3x");
        }

        tdTipo.classList.add("text-center");
        tdTipo.appendChild(tipo);


        tdDescripcion.innerHTML=p.descripcion;
        //TODO: K hago cn las acciones
        //5 agregar los td al tr 
        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdTipo);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdAcciones);
        //6 agregar tr a la tabla
        tbody.appendChild(tr);
      }
      


  };
  



document.querySelector("#registrar-btn").addEventListener("click",()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo =document.querySelector("#tipo-select").value;
    let legendario = document.querySelector("#legendario-si").checked;
    let descripcion = tinymce.get("descripcion-txt").getContent(); //solo para tiny

    //crea obj
    let pokemon = {};
    //crea atributo
    pokemon.nombre= nombre;
    pokemon.tipo=tipo;
    pokemon.legendario=legendario;
    pokemon.descripcion=descripcion;

    pokemones.push(pokemon);
    cargarTabla();
    Swal.fire("Resultado Existoso!", "Pokemon Registrado", "info");

});