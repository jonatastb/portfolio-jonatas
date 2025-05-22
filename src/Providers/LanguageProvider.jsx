import { useState, useEffect } from 'react';
import { LanguageContext } from "../Context/LanguageContext";
import { PortugueseData } from "../Data/PortugueseData";
import { EnglishData } from "../Data/EnglishData";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const [country, setCountry] = useState('eua')
  const [content, setContent] = useState(EnglishData);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };


  useEffect(() => {
    if (country === 'br') {
      setContent(PortugueseData);
    } else {
      setContent(EnglishData);
    }
    handleOpen()
    setTimeout(() => {
      handleClose()
    }, 500)
  }, [country]);

  return (
    <LanguageContext.Provider value={{ country, setCountry, content }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: 10000,}}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;