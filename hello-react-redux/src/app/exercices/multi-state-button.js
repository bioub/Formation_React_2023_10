function MultiStateButton({items = [], value = '', onValueChange = () => {} }) {
  if (!items.length) {
    throw new Error('items can\'t be empty');
  }

  function handleClick() {
    const currentIndex = items.indexOf(value);
    const nextIndex = (currentIndex + 1) % items.length;
    const nextValue = items[nextIndex];
    onValueChange(nextValue);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {value}
    </button>
  );
}

export default MultiStateButton;

// Exercice 2
// Au chargement du composant afficher dans le bouton
// le premier élément du tableau reçu en props
// Au clic du bouton afficher l'élément suivant
// repartir du début du tableau si besoin
// BONUS : comment récupérer la valeur sélectionnée au 
// niveau du composant parent ? (Exercices)