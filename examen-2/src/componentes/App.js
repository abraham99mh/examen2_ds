
import { useState, useEffect } from 'react';
import Input from './Input';
import InputDiv from './InputDiv';
import Output from './Output';
import Title from './Titulo';

const App = () => {

    const divisas = ["MXN", "USD", "EUR", "BTC", "ETH", "DOGE"];

    const [uno, changeUno] = useState(divisas[0]);
    const [dos, changeDos] = useState(divisas[0]);

    const [num, changeNum] = useState(0);
    const [result, changeResult] = useState(0);

    useEffect(() => {
        console.log("Cambio");
        if (uno === "MXN") {
            if (dos === "MXN") {
                changeResult(num);
            } else if (dos === "USD") {
                changeResult(num * 0.05);
            } else if (dos === "EUR") {
                changeResult(num * 0.051);
            } else if (dos === "BTC") {
                changeResult(num * 0.0000026);
            } else if (dos === "ETH") {
                changeResult(num * 0.000037);
            } else if (dos === "DOGE") {
                changeResult(num * 0.85);
            }
        }
        else if (uno === "USD") {
            if (dos === "MXN") {
                changeResult(num * 19.93);
            } else if (dos === "USD") {
                changeResult(num);
            } else if (dos === "EUR") {
                changeResult(num * 1.01);
            } else if (dos === "BTC") {
                changeResult(num * 0.000052);
            } else if (dos === "ETH") {
                changeResult(num * 0.00074);
            } else if (dos === "DOGE") {
                changeResult(num * 16.88);
            }
        }
    });

    return (
        <div className='container mt-3'>
            <Title></Title>
            <div className='card text-bg-dark p-4'>
                <InputDiv type={"first"} divisas={divisas} inp={uno} inp2={dos} change={changeUno} num={num} changeResult={changeResult} />
                <InputDiv type={"second"} divisas={divisas} inp={dos} inp2={uno} change={changeDos} num={num} changeResult={changeResult} />
                <div className='row'>
                    <div className='col-6'>
                        <Input num={num} changeNum={changeNum} changeResult={changeResult} />
                    </div>
                    <div className='col-6'>
                        <Output result={result} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;