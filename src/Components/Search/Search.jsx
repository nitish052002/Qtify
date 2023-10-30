import styles from "./search.module.css";
import searchIcon from "../../assets/search-icon.png";
import { Autocomplete, TextField, Paper } from "@mui/material";
import Tile from "../Tile/Tile";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

// ===================== OVERIDING CSS OF MUI INPUT ==============================================

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
            padding: "0 11px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
            padding: "0px",
            backgroundImage: `url(${searchIcon})`,
            backgroundPosition: "right , left top ",
            backgroundRepeat: "no-repeat",
            padding: "12px 20px 12px 40px",
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
      return (
        song.title.toLowerCase().includes(val) ||
        song.artists.join(" ").toLowerCase().includes(val)
      );
    });
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
    console.log(LIST__OF__SONGS);
  };

  useEffect(() => {
    FIND__SONGS();
  }, [val]);

  const SM__DEVICE = useMediaQuery("(max-width:600px)");

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
            margin: "0 auto",
            width: `${SM__DEVICE ? "100%" : "502px"}`,
            backgroundColor: "white",
          }}
          ListboxProps={{ className: "autoComplete" }}
          PaperComponent={({ children }) => (
            <Paper className={styles.paper}>{children}</Paper>
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
      </div>
    </>
  );
}

export default Search;
