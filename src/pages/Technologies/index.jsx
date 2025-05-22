import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import { TechnologiesContainer } from "./styles";
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LinearProgress from '@mui/joy/LinearProgress';
import Button from '@mui/joy/Button';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

export function Technologies() {
  const { content } = useContext(LanguageContext);
  return (
    <>
      <TechnologiesContainer id="technologies">
        <div className="main">
          <h1>{content.technologies_titles.principal}</h1>
          <h2>{content.technologies_titles.main}</h2>
          <div className="cards-container">
            {
              content.technologies.main.map((t, i) => (
                <Card
                  key={i}
                  variant="outlined"
                  orientation="horizontal"
                  className="tech-card"
                  sx={{ margin: '0 10px' }}
                >
                  <CardContent className="card-content" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <div>
                      <img src={`src/assets/languages-icons/${t.title}.png`} alt="" style={{ width: '50px', marginRight: '5px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography level="title-lg" id="card-description" sx={{ display: "flex", alignItems: 'center', fontWeight: 600, fontFamily: 'Poppins' }}>
                        {t.title}
                      </Typography>
                      <Typography level="title-sm" id="card-description" sx={{ display: "flex", alignItems: 'center', fontWeight: 400, fontFamily: 'Poppins' }}>
                        {t.subtitle}
                      </Typography>
                      <Typography level="body-md" aria-describedby="card-description" textAlign={'center'}>
                        <Link
                          overlay
                          underline="none"
                          sx={{ color: "#797979" }}
                        >
                          {
                            content.technologies_titles.exp === 'experience' ? `${t.years} experience` : `Experiência de ${t.years}`
                          }

                        </Link>
                      </Typography>
                    </div>

                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
        <hr style={{ width: '100%', opacity: '0.5' }} />
        <div className="secondary">
          <h2>{content.technologies_titles.others}</h2>
          <div className="cards-container">
            {
              content.technologies.secondary.map((t, i) => (
                <Card
                  key={i}
                  variant="outlined"
                  orientation="horizontal"
                  className="tech-card"
                  sx={{ margin: '0 10px' }}
                >
                  <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography level="title-sm" id="card-description" textAlign={'center'} sx={{ fontFamily: 'Poppins', color: "#f8f8f8" }}>
                      {t.title}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
        <hr style={{ width: '100%', opacity: '0.5' }} />
        <div className="secondary" >
          <h2>{content.technologies_titles.design}</h2>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
              ['MVC', 'SOLID', 'TDD', 'DDD'].map((d, i) => (
                <Card
                  key={i}
                  variant="outlined"
                  orientation="horizontal"
                  className="tech-card"
                  sx={{ minWidth: '200px' }}
                >
                  <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography level="title-sm" id="card-description" textAlign={'center'} sx={{ fontFamily: 'Poppins', color: "#f8f8f8" }}>
                      {d}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </TechnologiesContainer>
    </>
  )
}