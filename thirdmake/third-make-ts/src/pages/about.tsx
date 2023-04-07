import { useState } from "react";

const About = () => {
  const [number, setNumber] = useState<number>(1);
  function getData<T>(arr: T): T {
    return arr;
  }
  const getDa = <T,>(arr: T): T => {
    return arr;
  };

  return (
    <>
      <div>하이요</div>
      <div>{number}</div>
      <button onClick={() => setNumber((state: number) => (state = state + 1))}>
        +
      </button>
      <button onClick={() => getData(1)}>getData</button>
    </>
  );
};

export default About;
