import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import NavigationTab from "../NavigationTab/NavigationTab";

function Section({ type, data, title, updateLabel }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.boundary}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      <div>
        {type === "songs" ? <NavigationTab updateLabel={updateLabel} /> : <></>}
      </div>
      {data.length === 0 ? (
        <div className={styles.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.title} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(item) => (
                <Card key={item.title} data={item} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Section;
