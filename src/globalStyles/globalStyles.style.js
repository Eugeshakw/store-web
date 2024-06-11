import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}
	body {
	
		margin: 0;
		font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
		min-height: 100vh;
		font-size: ${p => p.theme.fontSizes.medium};
		font-style: normal;
		background-color: ${p => p.theme.colors.white};
		color: ${p => p.theme.colors.primaryDark};
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}
	ul,
	ol {
		list-style: none;
		padding-left: 0;
		margin: 0;
	}
	button {
		padding: 0;
		border: none;
		font: inherit;
		color: inherit;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
			monospace;
	}
	[class="container"] {
		min-width: 280px;
		
		padding: 0 20px;
		margin: 0 auto;
        outline: red;
	}
	@media screen and (min-width: 768px) {
		[class="container"] {
			/* max-width: 704px; */
			padding: 0 32px;
            outline: red;
		}
	}
	@media screen and (min-width: 1440px) {
		[class="container"] {
			/* max-width: 1375px; */
			padding: 0 100px;
		}
	}
`;