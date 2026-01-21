export function About() {
  return (
    <section>
      <h2>Om appen</h2>
      <h3>I denne app har vi brugt følgende libraries og API'er:</h3>
      <ul>
        <li>
          <p>
            <strong>React</strong>: UI‑bibliotek til komponenter og virtual DOM.{' '}
            <a href="https://reactjs.org/">https://reactjs.org/</a>
          </p>
        </li>
        <li>
          <p>
            <strong>react-router-dom</strong>: Browserside routing (Routes, NavLink, Outlet).{' '}
            <a href="https://reactrouter.com/en/main">https://reactrouter.com/en/main</a>
          </p>
        </li>
        <li>
          <p>
            <strong>SCSS(Sass)</strong>: Avanceret CSS-syntax (variabler, nesting, mixins).{' '}
            <a href="https://sass-lang.com/">https://sass-lang.com/</a>
          </p>
        </li>
        <li>
          <p>
            <strong>react-icons</strong>: Samling af ikonkomponenter (bruges til vejrikoner mv.).{' '}
            <a href="https://react-icons.github.io/react-icons/">https://react-icons.github.io/react-icons/</a>
          </p>
        </li>
        <li>
          <p>
            <strong>TypeScript</strong>: Statisk typesystem for mere sikker JS/React‑udvikling.{' '}
            <a href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a>
          </p>
        </li>
        <li>
          <p>
            <strong>OpenMeteo</strong>: API som vi henter vores meteorologiske data fra.{' '}
            <a href="https://open-meteo.com/">https://open-meteo.com/</a>
          </p>
        </li>
      </ul>
    </section>
  );
}
