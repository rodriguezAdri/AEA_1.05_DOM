//1
// Canvia el del títol
document.getElementById('titol').textContent = 'Títol canviat';

// Afegir un element a la llista
const novaLlista = document.createElement('li');
novaLlista.textContent = 'Element 4';
document.getElementById('llista').appendChild(novaLlista);

// Modificar el text del paràgraf al fer clic al botó
document.getElementById('canviText').addEventListener('click', function() {
  document.getElementById('paragraf').textContent = 'Text modificat!';
});

//2
const myDiv = document.getElementById('myDiv');

// Afegir un event listener per canviar estils en fer clic
myDiv.addEventListener('click', function() {
  myDiv.style.color = 'blue'; 
  myDiv.style.fontSize = '30px'; 
});

//3
const form = document.getElementById('myForm');
const textInput = document.getElementById('textInput');
const resultDiv = document.getElementById('result');

// Afegir un event listener per a l'enviament del formulari
form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const text = textInput.value;

  const newParagraph = document.createElement('p');

  newParagraph.textContent = text;

  resultDiv.appendChild(newParagraph);

  textInput.value = '';
});

//4
const form2 = document.getElementById('suggestionForm');
const suggestionInput = document.getElementById('suggestionInput');
const suggestionList = document.getElementById('suggestionList');

// Afegir un event listener per a l'enviament del formulari
form2.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el comportament per defecte del formulari

  // Obtenir el suggeriment introduït
  const suggestionText = suggestionInput.value;

  // Crear element li per al suggeriment
  const listItem = document.createElement('li');
  listItem.className = 'suggestion';
  
  // Afegir el text al li
  listItem.textContent = suggestionText;

  // Botó per marcar com a fet
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Marcar com a realitzat';
  completeButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  // Botó per eliminar el suggeriment
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.addEventListener('click', function() {
    suggestionList.removeChild(listItem);
  });

  // Afegir els botons al li
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // Afegir el nou suggeriment a la llista
  suggestionList.appendChild(listItem);

  suggestionInput.value = '';
});

