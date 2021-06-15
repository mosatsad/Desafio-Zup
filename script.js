const imagem = document.querySelector('img');
const fotoPersonagem = document.querySelector('.foto-personagem');
const nomeDeErrp = document.querySelector('.nome-personagem');

const numeroMaximoDePersonagens = 671;

let nomeDoBoneco;

generateRandomNumber = () => {
  return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = () => {
  
  return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json', 
      "Content-Type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
      image.src = data.image;
      image.alt = 'imagem personagem: ' + data.name;
      nomeDoBoneco = data.name;
  })
}

button.onclick = getCharacter; 
 