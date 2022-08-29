
import React from 'react';
import '../components/style.css';
import { useState } from 'react';


function Button() {
    const [arr, setArr] = useState([]);
    const [value, setValue] = useState('');

    const result = arr.map((element, index) => {
        return <div className='text_btn' key={index}>{element}</div>;
    });

    return (<div>
        <textarea className='textarea' value={value} onChange={event => setValue(event.target.value)} />
        <button className='footer_btn' onClick={event => setArr([...arr, value])}>Send message</button>
        {result}
    </div>);
}

export default Button;