import Wilder from "../components/Wilder";

const wildersData = [
  {
    name: "Ringo",
    city: "London",
    skills: [
      { title: "JS", votes: 10 },
      { title: "React", votes: 8 },
    ],
  },
  {
    name: "John",
    city: "Paris",
    skills: [
      { title: "PHP", votes: 9 },
      { title: "Symfony", votes: 9 },
    ],
  },
  {
    name: "George",
    city: "Berlin",
    skills: [
      { title: "Ruby", votes: 10 },
      { title: "JS", votes: 8 },
    ],
  },
  {
    name: "Paul",
    city: "Reims",
    skills: [
      { title: "C++", votes: 10 },
      { title: "Rust", votes: 8 },
    ],
  },
];
const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersData.map((wilder, index) => (
            <Wilder
              key={index}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
