import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'CWA-portfolio.com',
    href: '#',
  },
  {
    social: 'email',
    link: 'codewitharyan4@gmail.com',
    href: 'mailto:codewitharyan4@gmail.com',
  },
  {
    social: 'github',
    link: 'Dev-Aryan-T',
    href: 'https://github.com/Dev-Aryan-T',
  },
  {
    social: 'linkedin',
    link: 'Aryan Thapaliya',
    href: '#',
  },
  {
    social: 'twitter',
    link: 'Banauna baki xa',
    href: '#',
  },
  {
    social: 'instagram',
    link: 'AT-IITB',
    href: '#',
  },

  
 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
