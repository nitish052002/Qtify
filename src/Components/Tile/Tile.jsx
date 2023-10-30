import styles from "./Tile.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
function Tile({ songs, url, follows, album, artistsNames, likes }) {  
  const SM__DEVICE = useMediaQuery("(max-width:550px)");
  let ArtistOfAlbums = [];
  songs &&
    songs.forEach(({ artists }, index) => {
      if (index < 2) {
        ArtistOfAlbums.push(artists);
      }
    });
  let artists = artistsNames
    ? artistsNames.join(" ")
    : ArtistOfAlbums.flat().join(" ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.album}>
        <img src={url} alt="" />
        <div className={styles.content}>
          <p>{album}</p>

          <p className={styles.artist}>
            {SM__DEVICE ? artists.slice(0,artists.length-25): artists}
          </p>
        </div>
      </div>
      {likes ? (
        <span className={styles.title}>{likes} Likes</span>
      ) : (
        <span className={styles.title}>{follows} Follows</span>
      )}
    </div>
  );
}
export default Tile;
