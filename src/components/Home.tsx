interface Props {
  color: string;
  name: string;
  city: string;
}

function Home(props: Props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
