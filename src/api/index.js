import axios from 'axios';

const addStudent = (array) => (


    //iterate array and add to database
    array.map( item => (
        // post request axios to add student to database
        axios.post('http://localhost:8080/api/create', item,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    ))
)

export default addStudent;