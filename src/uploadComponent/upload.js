import React,{ useState, useEffect } from 'react';
import addStudent from '../api';

export default function Upload() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [headers, setHeaders] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        
        const csvHeaderPrepare = string.slice(0, string.indexOf("\n")).split(";");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
        const csvHeader = csvHeaderPrepare.map(val => val.replace(/\r$/, ''));

        console.log(csvHeader);
        const array = csvRows.map(i => {
            const values = i.replace('\r', "").split(";");
            const obj = csvHeader.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
            }, {});
            return obj;
        });
            setHeaders(csvHeader);
            setArray(array);
        };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (file) {
            fileReader.onload = function (event) {
            const text = event.target.result;
            csvFileToArray(text);
            };
    
            fileReader.readAsText(file);
        }
       
        };

const headerKeys = Object.keys(Object.assign({}, ...array));

useEffect(() => {
    if (array.length > 0) {
        console.log(array);
        addStudent(array);
    } 
}, [array]);

return(
    <div style={{ textAlign: "center" }}>
    <h1>REACTJS CSV IMPORT EXAMPLE </h1>
    <form>
        <input
        type={"file"}
        id={"csvFileInput"}
        accept={".csv"}
        onChange={handleOnChange}
        />

        <button
        onClick={(e) => {
            handleOnSubmit(e);
        }}
        >
        IMPORT CSV
        </button>
    </form>

    <br />

    <table>
        <thead>
        <tr key={"header"}>
            {headerKeys.map((key) => (
            <th>{key}</th>
            ))}
        </tr>
        </thead>

        <tbody>
        {array.map((item) => (
            <tr key={item}>
            {Object.values(item).map((val) => (
                <td>{val}</td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
    </div>    
    )
}


