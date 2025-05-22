import { useContext } from "react";
import { HomeContainer } from "./styles";
import { LanguageContext } from "../../Context/LanguageContext";

export function Home() {
  const { content } = useContext(LanguageContext);

  return (
    <HomeContainer>
      <div id="top-div">
        <span id='career'>{content.career}</span>
      </div>
      <div id='presentation'>
        <h1>Portfolio.</h1>
        <h3>{content.meet}</h3>
      </div>
      <nav id="list-menu">
        <ul>
          {content.navMenu.map((n, index) => (
            <li key={index}>
              <a href={n.link}>{n.opt}</a>
            </li>
          ))}
        </ul>
      </nav>
    </HomeContainer>
  );
}
