import styles from "./Tile.module.css";
function Tile({ songs, url, follows, album }) {
  let s = [];
  songs.forEach(({ artists }, index) => {
    if (index < 2) {
      s.push(artists);
    }
  });
  let artists = s.flat().join(" ");

  return (
    <div className={styles.wrapper}>
      <div className={styles.album}>
        <img src={url} alt="" />
        <div className={styles.content}>
          <p>{album}</p>

          <p className={styles.artist}>{artists}</p>
        </div>
      </div>
      <span>{follows} Follows</span>
    </div>
  );
}
export default Tile;
