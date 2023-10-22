import react from "react";
import styles from "./search.module.css";
import searchIcon from "../../assets/search-icon.png";
import { useState } from "react";
import { Autocomplete, TextField, Paper } from "@mui/material";
import Tile from "../Tile/Tile";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "transparent",
            "--TextField-brandBorderHoverColor": "transparent",
            "--TextField-brandBorderFocusedColor": "transparent",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
            padding: "0px",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
              
            },
            
            
          },
        },
      },
    },
  });

export default function Search({ placeholder, data }) {
  const outer = useTheme();
  const [val, setVal] = useState();

  const changeHandler = (e) => {
    setVal(e.target.value);
    const res = data.filter((item) => item.title.includes(e.target.value));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Autocomplete
          sx={{
            "& .MuiAutocomplete-option": {
              color: "var(--color-black)",
              padding: "0px",
            },
            "& .Mui-focused": {
              color: "var(--color-black)",
            },
            width: "502px ",
            backgroundColor: "white",
          }}
          PaperComponent={({ children }) => (
            <Paper
              style={{
                overflow: "hidden",
                border: "1px solid var(--color-primary)",
                position: "relative",
                right: "25%",
                width: "800px",
                background: "var(--color-black)",
                top: "4px",
                borderRadius: "0 0 4px 4px",
              }}
            >
              {children}
            </Paper>
          )}
          className={styles.search}           
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data}
          renderOption={(props, option) => {
            return (
              <Tile
                album={option.title}
                follows={option.follows}
                url={option.image}
                songs={option.songs}
              />
            );
          }}
          renderInput={(params) => (
            <ThemeProvider theme={customTheme(outer)}>
              <TextField
                {...params}
                label={placeholder}
                inputProps={{
                  ...params.inputProps,
                  type: "search",
                }}
                onChange={changeHandler}
              />
            </ThemeProvider>
          )}
        />
        <button className={styles.searchButton}>
          <img src={searchIcon} alt="search-bar" />
          {/* <SearchIcon/> */}
        </button>
        {val ? <></> : null}
      </div>
    </>
  );
}
