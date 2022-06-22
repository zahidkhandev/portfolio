import ProjectsCMD from "../components/ProjectCMD/ProjectsCMD";
import Layout from "../components/Layout/Layout";

export default function Home({ theme, setTheme, toggleTheme }) {
  return (
    <Layout theme={theme} setTheme={setTheme} toggleTheme={toggleTheme}>
      <ProjectsCMD theme={theme} />
    </Layout>
  );
}
