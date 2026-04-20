import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Training from './components/Training';
import { portfolioData } from './data/portfolio';
import './styles/app.css';

function App() {
  const { hero, about, skills, projects, trainings } = portfolioData;

  return (
    <div className="app-shell">
      <Header name={hero.name} githubUrl={hero.githubUrl} />
      <main className="page">
        <Hero {...hero} />
        <About {...about} />
        <Skills items={skills} />
        <Projects items={projects} />
        <Training items={trainings} />
      </main>
    </div>
  );
}

export default App;
