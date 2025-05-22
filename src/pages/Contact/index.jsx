import { useContext } from 'react'
import { ContactContainer } from "./styles";
import { LanguageContext } from '../../Context/LanguageContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/joy/Chip';

export function Contact() {
  const { content } = useContext(LanguageContext);
  console.log(content.contact.contacts)
  return (
    <>
      <ContactContainer id="contact">
        <h2>
          {content.contact.title}
        </h2>
        <div id="card-contacts">

          {
            content.contact.contacts.map((c, i) => (
              <Card className='card' key={i}>
                <CardActionArea
                  href={c.url}
                  target='_blank'
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={new URL(`../../assets/contact-logos/${i}.png`, import.meta.url).href} width={50} alt="" />
                    <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }}>
                      {c.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </div>
      </ContactContainer>
    </>
  )
}