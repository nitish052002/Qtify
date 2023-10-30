import styles from "./Tile.module.css";
function Tile({ songs, url, follows, album, artistsNames, likes }) {
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
            {artists}
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
