const AboutPage = () => {
  return (
    <>
      <h3>A little about me.</h3>
      <h4>Hi! I am Aryan Thapaliya, a 18 year old JEE Aspirant. Did my primary schooling from TCCED School, Gothatar. Then I completed my +2 from ST.XAVIER'S COLLEGE, MAITIGHAR. Started this coding journey during lockdown and currently due to JEE I have left it behind but don't worry when my JEE ADV clears then I am gonna resume my this journey in top institutes like IIT Bombay. For this, just wait for 365 days more! See Ya! </h4>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
