import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  /* cursor: url('https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur'), grab !important; */
  font: 14px 'Roboto', sans-serif;
  background: #ecf1f8;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;
