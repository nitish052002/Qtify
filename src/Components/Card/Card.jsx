import React from "react";
import styles from "./card.module.css";
import { Chip } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const CardUI = ({ data }) => {
  const { image, follows, title, songs, likes } = data;
  return (
    <Tooltip
      title={songs ? songs.length + " Songs " : ""}
      placement="top"
      arrow
    >
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt="albums" />
          <div className={styles.banner}>
            <Chip
              label={follows ? `${follows} Follows` : `${likes} Likes`}
              size="small"
              className={styles.chip}
            ></Chip>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p className={styles.footerTitle}>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
};

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "albums": {
        return <CardUI data={data} />;
      }
      case "new": {
        return <CardUI data={data} />;
      }

      case "songs": {
        return <CardUI data={data} />;
      }
      default:
        console.log("default");
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
