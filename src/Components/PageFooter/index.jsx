
import { PageFooterContainer } from "./styles";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
export function PageFooter({color}) {
  const { content } = useContext(LanguageContext);
  const year = new Date().getFullYear()

  return (
   <PageFooterContainer color={color}>
    <span>
      BRAZIL
    </span>
    <span>
      {content.career}
    </span>
    <span>
      {year}
    </span>
   </PageFooterContainer>
  );
}
