import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  .site__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  .half__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }

  :root {
    --cream: #E5E2D5;
    --sage: #C9CBA7;
    --grey: #333333; 
    --mist: #ECF2E6;
    --blue: #C6D3CD; 
  }


  html, button {
    font-family: Lausanne-500, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    text-transform: none;
    background: var(--cream);
  }

  h1, h2, h3, h4, h5, p, button, .btn, .btn-pill {
    color: var(--grey)
  }

  h1 {
    font-family: Editorial-New, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 66px;
    color: var(--grey)
  }

  h2 {
    font-family: Lausanne-500;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
  }

  h3 {
    font-family: Lausanne-500;
    font-style: normal;
    font-size: 24px;
    line-height: 27px;
    font-weight: normal;
  }

  h4, button {
    font-family: Lausanne-800;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-weight: normal;
  }

  h5 {
    font-family: Editorial-New, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
  }

  p, li {
    font-family: Lausanne-500;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
  }


  a {
    color: var(--black);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
  }  

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none; 
     scrollbar-width: none; 
  } 

  *::-webkit-scrollbar {
  display: none;
}


  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
  }

  .btn-pill {
    padding: 20px 60px 18px 60px;
    border: 1px solid var(--grey);
    border-radius: 100px;
    transition: all 0.25s ease-in-out;
  }
  .cream {
    background-color: var(--cream)
  }
  .cream:hover {
    background-color: var(--mist)
  }
  .mist {
    background-color: var(--mist)
  }
  .blue {
    background-color: var(--blue)
  }
  .sage {
    background-color: var(--sage)
  }
  .mist:hover, .blue:hover, .sage:hover {
    background-color: var(--cream)
  }

  .arrow {
    position: relative;
    left: 0;
    transition: all 0.25s ease-in-out;
  }

  .arrow-down {
    position: relative;
    top: 0;
    transition: all 0.25s ease-in-out;
  }

  .arrow-back {
    position: relative;
    right: 0;
    transition: all 0.25s ease-in-out;
  }

  .btn:hover .arrow-back {
    right: 4px;
  }

  .btn-pill:hover .arrow-down {
    top: 2px;
  } 

  .btn-pill:hover .arrow, .btn:hover .arrow {
    left: 4px;
  }


  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    h1, h2, h3, h4, h5, p {
      padding-bottom: 20px;
    }
  }


  .underline {
  display: inline-block;
  position: relative;
}

  .underline::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--grey);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .underline:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } 

    /* Carousel */


  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: auto;
  }

  .indicators {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  .indicators > button {
    margin: 5px;
  }

   .active-number {
    text-decoration: underline solid 2px;
  } 

  .arrow-ind {
    font-size: 23px;
    font-weight: normal;
    font-family: Lausanne-500, Arial, Helvetica, sans-serif;
  }

  .number {
  padding: 5px 5px 0 5px;
  }

  /* Mobile Global Styles */

  @media only screen and (max-width: 1100px) {

    .gatsby-image-wrapper {
      position: relative;
      z-index: 0;  
    }


    h1 {
      font-size: 33px;
      line-height: 36px;
    }

    h2 {
      font-size: 23px;
      line-height: 26px;
    }

    h3 {
      font-size: 18px;
      line-height: 20px;
    }

  h4, button {
      font-size: 14px;
      line-height: 16px;
  }

  h5 {
      font-size: 24px;
      line-height: 28px;
  }

  p, li {
      font-size: 16px;
      line-height: 20px;
  }

  .btn-pill {
    padding: 15px 25px 12px 25px
  }

    }

`;

export default GlobalStyles;
