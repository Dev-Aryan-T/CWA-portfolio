import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hi I am Aryan Thapaliya, A JEE Aspirant who loves to code but due to this Chemistry rxns I have currently taken break from coding."

      />
      <meta
        name="keywords"
        content="Aryan Thapaliya, Aryan, Thapaliya, web developer portfolio, Aryan web developer, Aryan developer, JEE Aspirant, Aryan Thapaliya portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Aryan Thapaliya's Portfolio" />
      <meta
        property="og:description"
        content="A JEE Aspirant who loves coding but due to Chemistry I have currently taken a break from Coding"
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
