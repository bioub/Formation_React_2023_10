// import { useState } from "react";

import { useEffect, useState } from "react";

// function useNow() {
//   const [now, setNow] = useState(new Date());

//   setTimeout(() => {
//     setNow(new Date());
//   }, 1000);

//   return now;
// }

// function Clock() {
//   const now = useNow();

//   return (
//     <div className="Clock">
//       {now.toLocaleTimeString()}
//     </div>
//   )
// }

// export default Clock;


function Clock() {
  const [now, setNow] = useState(new Date());


  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);

    // si on retourne une fonction
    // elle est appelée à l'opposé de l'effet
    // quand le composant disparait ou avant chaque
    // mise à jour
    // return () => {}
  }, []);

  // 3 cas possibles sur le 2e param
  // [] : effet va s'exécuter une fois au moment
  // où le composant apparait (après la 1ere mise à jour du DOM)
  // rien : effet va s'exécuter une fois au moment
  // où le composant apparait puis à chaque fois
  // que le composant est mis à jour (après la mise à jour
  // du DOM)
  // [value] : effet va s'exécuter une fois au moment
  // où le composant apparait puis à chaque fois
  // que la où les valeurs du tableau sont mise à jour (après la mise à jour
  // du DOM)

  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
    </div>
  )
}

export default Clock;