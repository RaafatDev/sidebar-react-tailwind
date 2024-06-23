// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Layout } from "./components/layout/Layout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

        <Layout>
          <h1 className="m-2 flex justify-end p-4 text-9xl font-bold underline">
            Hello world!
          </h1>
        </Layout>
      </div>
    </>
  );
}

export default App;
