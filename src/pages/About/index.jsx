import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import {AboutContainer} from './styles'
import aboutImage from './assets/images/about-image.png';

export function About(){
  const { content } = useContext(LanguageContext);

  return (
    <>
      <AboutContainer id='about'>
        <div className='image'>
          <img src={aboutImage} alt="Jonatas Bueno" />
        </div>
        <div className='informations'>
          <h2>
            {content.about.title}
          </h2>
          {content.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </AboutContainer>
    </>
  )
}