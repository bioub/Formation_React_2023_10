import { useState } from "react";

function Helloworld() {
  const [name, setName] = useState('Romain');

  function handleInput(event) {
    setName(event.target.value)
  }

  return (
    <div className="Helloworld">
      <div>
        Name : <input value={name} onChange={handleInput} />
      </div>
      <p>
        Hello <span>{name}</span> !
      </p>
    </div>
  );
}

export default Helloworld;

// Exercice 1
// Créer une propriété name sur le state avec une valeur par défaut
// L'afficher dans la balise span
// A la saisi dans le champ (methode handleInput)
// modifier la valeur de name du state
// (pour récupérer la valeur du champ utiliser event.currentTarget.value)
// Le composant se raffraichira tout seul