import { useState } from "react";
import SiteLayout from "./components/layout/SiteLayout";

const data = [
  {
    id: 1,
    title: "UFOTO | Self-Portait Studio",
    date: "September 30 2022",
    img: "./images/UFOTOThumb.png",
    link: "https://marwyn-ufoto.onrender.com/",
    tools: [
      { programming: { name: "HTML" } },
      { programming: { name: "CSS" } },
      { programming: { name: "JQuery" } },
      { programming: { name: "Javascript" } },
      { programming: { name: "Tailwind" } },
    ],
  },
  {
    id: 2,
    title: "Pokedex",
    date: "October 18 2022",
    img: "./images/PokedexThumb.png",
    link: "https://marwyn02.github.io/PokeDex-React-App",
    tools: [
      { programming: { name: "ReactJS" } },
      { programming: { name: "API" } },
      { programming: { name: "Tailwind" } },
      { programming: { name: "GSAP" } },
    ],
  },
  {
    id: 3,
    title: "Turista",
    date: "July 10 2022",
    img: "./images/TuristaThumb.png",
    link: "https://pure-waters-00186.herokuapp.com/",
    tools: [
      { programming: { name: "Javascript" } },
      { programming: { name: "NodeJS" } },
      { programming: { name: "MongoDB" } },
      { programming: { name: "Tailwind" } },
      { programming: { name: "Bootstrap" } },
    ],
  },
  {
    id: 4,
    title: "Online Palengke",
    date: "January 30 2023",
    img: "./images/OnlinePalengkeThumb.png",
    link: "",
    tools: [
      { programming: { name: "ReactJS" } },
      { programming: { name: "Tailwind" } },
    ],
  },
];

const App = () => {
  const [Website] = useState(data);

  return (
    <div className="App">
      <SiteLayout items={Website} />
    </div>
  );
};

export default App;
