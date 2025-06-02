import styled from "styled-components";

export const HomeContainer = styled.div`
color: white;
height: 90vh;
padding: 5rem 15rem;
background-color: #1a1a1a;

#top-div {
  color: white;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;

  #career {
    color: white;
    display: flex;
    margin-right: 1rem;
    padding: 3px 12px;
    letter-spacing: 2px;
    font-weight: 200;
    font-family: "Poppins";
    border: 1px #797979 solid;
    background-color: transparent;
    box-shadow: 5px 5px 1px #f8f8f8 !important;
    align-items: center;

    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
      box-shadow: 10px 10px 1px #f8f8f8 !important;
    }
  }

  .select-div:hover {
    background-color: #f8f8f8 !important;
    color: #1a1a1a !important;
  }

  .select-div {
    font-weight: 200 !important;
    font-family: "Poppins", sans-serif;
    border: 1px rgba(248, 248, 248, 0.5) solid;
    background-color: #1a1a1a !important;
    text-align: center;
    padding: 0.5rem;
  }

  button {
    font-weight: 200 !important;
    letter-spacing: 2px;
  }

  span {
    display: none;
  }
}

#presentation {
  margin: 5rem 0;


  h1 {
    font-size: 7rem;
  }

  h3 {
    font-size: 2rem;
  }

  h1, h3 {
    margin: 0;
  }
}

#list-menu {
  ul {
    width: min-content;
    font-family: "Poppins";
    padding: 0;
    list-style: none;
    border: none;
  }
  li, li a {
    color: #f8f8f8;
    text-decoration: none;
    width: calc(100% + 1rem);
    line-height: 30px;
    font-weight: 200 !important;
    background-color: #1a1a1a;
    letter-spacing: 1px;
  }
  a:hover {
    cursor: pointer;
    background-color: #f8f8f8;
    color: #1a1a1a;
    font-weight: 300 !important;
    padding: 0 5px;
  }
}

/* Responsividade */


@media (max-width: 1200px) {
min-height: 100vh;
height: auto;

  #presentation h1 {
    font-size: 4rem;
  }
  #presentation h3 {
    font-size: 1.5rem;
  }

 
}
@media (max-width: 768px) {

  padding: 3rem 5rem;
  padding-top: 4rem;
  height: 90vh;
  #top-div {
    flex-direction: column;
    align-items: start;
  }
  
  #presentation h1 {
    font-size: 5.5rem;
  }
  #presentation h3 {
    font-size: 2rem;
  }
  #list-menu ul {
    margin-left: 1rem;

    li {
      font-size: 1.5rem;
      line-height: 100px;
    }
  }
}

@media (max-width: 480px) {
  padding: 2rem;
  padding-top: 4rem;
  height: 90vh;
  #presentation h1 {
    font-size: 3rem;
    margin: 1rem
    }
  #presentation h3 {
    margin: 1rem ;
    font-size: 1.4rem;
  }
  #career {
    font-size: .876rem;
  }
  #list-menu ul {
    margin-left: 1rem;

    li {
      font-size: 1.2rem;
      line-height: 70px;
    }
  }
}

`;
