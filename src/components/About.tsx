import Links from './Links';

interface Props {
  bio?: string;
  github: string;
  linkedin: string;
}

function About(props: Props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { props.bio? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;