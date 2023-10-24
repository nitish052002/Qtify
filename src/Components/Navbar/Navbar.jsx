import React from "react";
import Button from "../Buttons/Buttons";
import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Navbar({data}) {
  return (
    <nav className={styles.navbar}>
      <Logo/>  
      <Search data={data} placeholder="Searach for a Album , Songs, Artists"/>
      <Button children={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
