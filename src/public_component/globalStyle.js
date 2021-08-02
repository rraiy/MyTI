import styled, { createGlobalStyle } from 'styled-components';

export const primary = 'rgb(168,73,237)';
export const secondary = 'rgb(34,14,49)';
export const fontGrey = 'rgb(173,173,173)';
export const fontWhite = '#fff';
export const fontWaring = 'red';
export const fontYellow = 'rgb(255,227,70)';

const innerH = window.innerHeight;

export const ResetStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    }
    address, caption, cite, code, dfn, em, strong, th, var, b {
    font-weight: normal;
    font-style: normal;
    }
    abbr, acronym {
    border: 0;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
    }
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }
    html {
    text-size-adjust: 100%;
    box-sizing: border-box;
    }
    body {
        line-height: 1;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote {
    &:before,   &:after {
        content: '';
        content: none;
    }
    }
    q {
    &:before,   &:after {
        content: '';
        content: none;
    }
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    caption, th {
    text-align: left;
    }
    textarea {
    resize: none;
    }
    a {
    text-decoration: none;
    cursor: pointer;
        :link, :visited{
            color:inherit;
        }
    }
    button {
    padding: 0;
    border: none;
    background: none;
    cursor:pointer;
    }
`;

export const GlobalStyle = createGlobalStyle`
    p {
        font-size: 16px;
    }

    background:rgb(58,45,96);
`;

export const Wrap = styled.div`
  min-width: 1200px;
  min-height: calc(${innerH}px - 56px);
  color: ${fontGrey};
  background: transparent
    linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%)
    0% 0% no-repeat padding-box;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 100px;

  @media (max-width: 1199px) {
    min-width: 700px;
  }

  @media (max-width: 699px) and (min-width: 360px) {
    min-width: 360px;
  }
`;
