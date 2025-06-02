import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { SpeedDialContainer } from "./styles";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import br from '../../assets/flags/br.png'
import us from '../../assets/flags/us.png'

import TranslateIcon from '@mui/icons-material/Translate';const actions = [
  { icon: br, name: 'Português (Brasil)', value: 'br' },
  { icon: us, name: 'English (US)', value: 'en' },
];

export default function BasicSpeedDial() {
  const { setCountry } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SpeedDialContainer>
      <Box sx={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 9999, }}>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className='speed-dial'
        >
          
        </Button>
      )}
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: 'absolute', bottom: 16, right: 16, borderRadius: '10px' }}
          icon={<TranslateIcon />}
          className='speed-dial'
        >
          {actions.map((action) => (
            <SpeedDialAction
              className='button'
              key={action.name}
              icon={<img src={action.icon}  style={{ width: 24, height: 24 }} />}
              tooltipTitle={action.name}
              onClick={() => setCountry(action.value)}
            />
          ))}
        </SpeedDial>
      </Box>
    </SpeedDialContainer>
  );
}
