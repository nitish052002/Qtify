import styles from "./search.module.css";
import searchIcon from "../../assets/search-icon.png";
import { Autocomplete, TextField, Paper } from "@mui/material";
import Tile from "../Tile/Tile";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

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

function Search({ placeholder, data }) {
  const outer = useTheme();
  const [val, setVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [timeOut, updateTimeOut] = useState();

  const LIST__OF__SONGS = data.map((song) => song.songs).flat();

  const FIND__SONGS = () => {
    let songs = LIST__OF__SONGS.filter((song) => {
     return song.title.toLowerCase().includes(val) || song.artists.join(" ").toLowerCase().includes(val)

    }
    );

    !val ? setFilteredData([]) : setFilteredData(songs);
  };

  const DEBOUNCE__SEARCH = (value, t) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    let time = setTimeout(() => {
      setVal(value);
    }, t);
    updateTimeOut(time);
  };

  const inputChangeHandler = (e) => {
    DEBOUNCE__SEARCH(e.target.value, 300);
    console.log(LIST__OF__SONGS)
  };

  useEffect(() => {
    FIND__SONGS();
  }, [val]);


  const matches = useMediaQuery('(max-width:576px)');
  return (
    <>
      <div className={styles.wrapper}>
        <Autocomplete
          sx={{
            "& .MuiAutocomplete-option": {
              color: "var(--color-black)",
            },
            "& .Mui-focused": {
              color: "var(--color-black)",
            },
            width: `${matches ? "380px" : "502px"}`,
            // width: `${matches ? "100px" : "502px"}`,
            backgroundColor: "white",
             
          }}
          ListboxProps={{className : "autoComplete"}}
          PaperComponent={({ children }) => (
            <Paper
              style={{                 
                border: "1px solid var(--color-primary)",
                position: "relative",
                right: "100%",
                width: "800px",                 
                background: "var(--color-black)",
                top: "4px",
                borderRadius: "0 0 4px 4px",
              }}
              className={styles.paper}
            >
              {children}
            </Paper>
          )}
          className={styles.search}
          freeSolo
          disableClearable
          options={filteredData.length ? filteredData : data}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => {
            return (
              <Tile
                key={option.id}
                album={option.title}
                follows={option.follows}
                likes={option.likes}
                url={option.image}
                songs={option.songs}
                artistsNames={option.artists}
              />
            );
          }}
          renderInput={(params) => (
            <ThemeProvider theme={customTheme(outer)}>
              <TextField
                {...params}
                placeholder={placeholder}
                onChange={inputChangeHandler}
              />
            </ThemeProvider>
          )}
        />

        <button className={styles.searchButton}>
          <img src={searchIcon} alt="search-bar" />
        </button>
      </div>
    </>
  );
}

export default Search;
