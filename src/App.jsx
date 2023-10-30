import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";
import Section from "./Components/Section/Section";
import AccordionUI from "./Components/Accordian/AccordianUI";
import {
  queAndAns,
  fetchNewAlbums,
  fetchSongAlbums,
  fetchTopAlbums,
} from "./api/api";

export default function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songAlbumsData, setSongAlbumsData] = useState([]);
  const [filterSongAlbumsData, setFilterSongAlbumsData] = useState([]);
  const [faq, setFaq] = useState([]);

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

  const generateFaq = async () => {
    try {
      let data = await queAndAns();
      setFaq(data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateLabel = (label) => {
    setLabel(label);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateSongAlbumsData();
    generateFaq();
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
    };

    filteredSongsByGener(label);
  }, [label]);

  return (
    <div className="app">
      <Navbar data={topAlbumsData} />
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
      <AccordionUI faq={faq} />
    </div>
  );
}
