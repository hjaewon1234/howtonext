import { useState } from "react";
import TestComponent from "@/components/TestComponent";
import Head from "next/head";

const potato = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Head>
        <title>about입니다제발되라</title>
      </Head>
      <h1>hi {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <TestComponent />
    </div>
  );
};

export default potato;
