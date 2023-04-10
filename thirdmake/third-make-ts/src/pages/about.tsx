import { useState } from 'react';
import { test, test2, funcTest } from './api/interfaceTest';

const About = () => {
    const [number, setNumber] = useState<number>(1);
    function getData<T>(arr: T): T {
        return arr;
    }
    const getDa = <T,>(arr: T): T => {
        return arr;
    };
    const second = <T, U>(para: T[], para2: U): string => {
        return `${para[0]} ${para2}`;
    };
    getDa<number>(111);
    getDa<string>('tlqkf');

    const testType: test = { id: 12, password: '123456789' };
    const testDo: { id: number; password: string } = { id: 12, password: '123456789' };
    const testType2: test2 = { name: '허재원' };
    const testFuncType: funcTest = (_num) => {
        return `${_num} + ${_num}`;
    };
    testFuncType<string>('하이하이');

    interface readTest {
        readonly name: string;
    }
    let myname: readTest = { name: '홍길동' };
    myname.name = '박대기';

    return (
        <>
            <div>하이요</div>
            <div>{number}</div>
            <button onClick={() => setNumber((state: number) => (state = state + 1))}>+</button>
            <button onClick={() => getData(1)}>getData</button>
        </>
    );
};

export default About;
