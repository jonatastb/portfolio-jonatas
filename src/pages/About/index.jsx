import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import {AboutContainer} from './styles'

export function About(){
  const { content } = useContext(LanguageContext);

  return (
    <>
      <AboutContainer id='about'>
        <div className='image'>
          <img src="src\assets\images\about-image.png" alt="Jonatas Bueno" />
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