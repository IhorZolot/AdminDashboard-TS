import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
  font-family: 'Inter',  sans-serif;
  font-style: normal;
}
p,
h1,
h2,
h3,
h4,h5,h6 {
  padding: 0;
  margin: 0;
}

img {
  display: block;
   width:100%;
}

ul,li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button{&:hover {
    cursor: pointer;
  }}
`;
