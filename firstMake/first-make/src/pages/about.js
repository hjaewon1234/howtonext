import { useState } from "react";
import TestComponent from "@/components/TestComponent";
import Head from "next/head";
import Seo from "@/components/Seo";
import NavBar from "@/components/NavBar";

const potato = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Seo title={"About"} />
      <h1>hi {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <TestComponent />
    </div>
  );
};

export default potato;
