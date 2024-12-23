import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='https://fav.farm/👨‍💻' />
				<title>Sanjeev Sharma - Frontend Engineer</title>
				<meta name='title' content='Sanjeev Sharma - Frontend Engineer' />
				<meta
					name='description'
					content='Sanjeev Sharma is a frontend engineer with 5+ years of experience who specializes in JavaScript and React.'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
