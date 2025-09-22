import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  // Correction 1: Tri par ordre décroissant (plus récent en premier)
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  
  const nextCard = () => {
    // Correction 2: Correction de la logique de boucle
    setTimeout(
      () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
      5000
    );
  };

  // Fonction pour gérer le clic sur les boutons radio
  const handleRadioClick = (radioIdx) => {
    setIndex(radioIdx);
  };
  
  useEffect(() => {
    nextCard();
  });
  
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Correction 5: Les boutons radio OUTSIDE de la boucle des événements */}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((eventItem, radioIdx) => (
            <input
              key={`radio-${eventItem.title}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              onChange={() => handleRadioClick(radioIdx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;