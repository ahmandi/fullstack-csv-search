import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
	box-sizing: border-box;
	font-family: 'Roboto',sans-serif !important;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

body {
	display: flex;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    font-size: 1em!important;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(247, 246, 243, 1);
    justify-content: center;
    flex-direction: column;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
	cursor: pointer;
	border: 0;

	border-radius: 2rem;

	background: #307347;
	color: white;
}

input {
	border: 0;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: black;
}

::-webkit-scrollbar {
  width: 3px; 
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(200, 200, 200, 0.8); 
  border-radius: 3px; 
}

::-webkit-scrollbar-track {
  background: transparent;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(200, 200, 200, 0.8) transparent;
}

`;

export default GlobalStyle;
