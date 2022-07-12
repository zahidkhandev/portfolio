import ProjectsCMD from "../components/ProjectCMD/ProjectsCMD";
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";
import Greeting from "../components/About/Greeting";
import About from "../components/About/About";

export default function Home({ theme, setTheme, toggleTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme} toggleTheme={toggleTheme}>
      <Greeting theme={theme} />
      <About theme={theme} />
      <ProjectsCMD theme={theme} />
      <Contact theme={theme} />
    </Layout>
  );
}
