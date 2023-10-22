import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchSongAlbums, fetchTopAlbums } from "./api/api";
import Section from "./Components/Section/Section";
import AccordionUI from "./Components/Accordian/AccordianUI";
 
export default function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songAlbumsData, setSongAlbumsData] = useState([]);
  const [filterSongAlbumsData, setFilterSongAlbumsData] = useState([]);

  const [label, setLabel] = useState("all");

  const generateTopAlbumsData = async () => {
    try {
      let TOP = await fetchTopAlbums();
      setTopAlbumsData(TOP);
    } catch (err) {
      console.log(err);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      let NEW = await fetchNewAlbums();
      setNewAlbumsData(NEW);
    } catch (err) {
      console.log(err);
    }
  };

  const generateSongAlbumsData = async () => {
    try {
      let SONG = await fetchSongAlbums();
      setSongAlbumsData(SONG);
      setFilterSongAlbumsData(SONG);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLabel = (label) => {
    setLabel(label);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateSongAlbumsData();
    console.log()
  }, []);

  useEffect(() => {
    const filteredSongsByGener = (label) => {
      let filteredData = songAlbumsData.filter(
        ({ genre }) => genre.label.toLowerCase() === label
      );
      if (label === "all") {
        generateSongAlbumsData();
      }
      setFilterSongAlbumsData(filteredData);
      console.log(filteredData)
    };

    filteredSongsByGener(label);
  }, [label]);




  return (
    <div>
      <Navbar data={topAlbumsData}/>
      <Hero />
      <div>
        <Section data={topAlbumsData} type="albums" title="Top Albums" />
        <hr />
        <Section data={newAlbumsData} type="new" title="New Albums" />
        <hr />
        <Section
          updateLabel={updateLabel}
          data={filterSongAlbumsData}
          type="songs"
          title="Songs"
        />
        <hr />
      </div>
      <AccordionUI />
    </div>
  );
}
