//referenciamos os elementos do DOM

const inputBuscar = document.getElementById('buscar');
const celdas = document.getElementsByTagName('td');

//trazemos os dados da api
let uri = 'https://jsonplaceholder.typicode.com/users';
fetch(uri)
  .then( response => response.json())
  .then( json => mostrarDados(json))
  .catch( e => console.log(e) )

const mostrarDados = (data) => {
  console.log(data)
  let body = ''
  for(let i=0; i<data.length; i++){
    body += `<tr><td>${data[i].name}</td></tr>`
  }
  document.querySelector('.dados').innerHTML = body
}

  //pesquisa
  inputBuscar.addEventListener('keyup' , (e)=>{
      let texto = e.target.value
      //console.log(texto)
      let er = new RegExp(texto, "i")
      for(let i=0; i<celdas.length; i++) {
      let valor = celdas [i]
      //console.log(valor)
      if(er.test(valor.innerText)){
          valor.classList.remove("ocultar")

  }else{
      console.log(valor)
      valor.classList.add("ocultar")
      
  }
}

})
