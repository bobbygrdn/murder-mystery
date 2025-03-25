import { Suspense } from "react";
import Loading from "./components/loading/Loading";
import React from "react";

const Main = React.lazy(() => import("./pages/Main"));

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}

export default App;
