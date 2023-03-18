import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, dataSource }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
    });
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className={styles.showAll} onClick={handleToggle}>
          <h4>{!isShowAll ? "Show All" : "Collapse"}</h4>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {isShowAll ? (
          cards.map((card) => (
            <Card
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              type="album"
            />
          ))
        ) : (
          <Carousel
            data={cards}
            renderComponent={(data) => <Card data={data} type="album" />}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
