import * as React from 'react';
import { useContext}  from "react";
import { LanguageContext } from "../../Context/LanguageContext";
// import {PageFooter} from '../../Components/PageFooter'
import {ProjectsContainer} from './styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/joy/Chip';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Projects(){
  const { content } = useContext(LanguageContext);

  return (
    <>
      <ProjectsContainer id='projects'>
          <h2>
            {content.projects.title}
          </h2>
          <div className="cards-projects">
            {
              content.projects.list.map((n,i) => (
                <div key={i} className="cards">
                  <Tooltip title={
                    n.link ?
                    <React.Fragment>
                      <span style={{display: 'flex', alignItems: 'center', fontFamily: 'Poppins, sans-serif'}}>
                        <GitHubIcon sx={{mr: 1}}/>
                        {content.projects.linkTitle}
                      </span>
                    </React.Fragment> : ''
                  } TransitionComponent={Zoom} placement="right" arrow>
                    <Card className='card'>
                      <CardActionArea href={n.link} target='_blank'>
                        <CardMedia
                          component="img"
                          height="100"
                          image={new URL(`../../assets/card-banners/${n.cover}`, import.meta.url).href}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {n.title}{' '}
                            {
                              !n.link ? 
                              <Typography variant='caption' color={'GrayText'}>
                              ({content.projects.pending})
                              </Typography> : ''
                            }
                            
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                              {
                                n.descriptionOne
                              }
                              <span className={`stack ${n.type}`}>{n.type}</span>{' '}
                              {
                                n.descriptionTwo
                              }
                          </Typography>
                          <div className="tags">
                              {
                                n.tags.map((l,i) => (
                                  <Chip
                                    className='tag'
                                    key={i}
                                    color={'neutral'}
                                    size={'sm'}
                                    variant={'outlined'}
                                    sx={{
                                      borderColor: l.color,
                                      color: l.color,
                                    }}
                                  >
                                    {l.tag}
                                  </Chip>
                                ))
                              }
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Tooltip>
                </div>
              ))
            }
          </div>
      </ProjectsContainer>
    </>
  )
}