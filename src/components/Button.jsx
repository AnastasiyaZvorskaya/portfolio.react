
import React from 'react';
import '../components/style.css';
import { useState } from 'react';
import Image from "../components/Image"



function Button() {
    const [arr, setArr] = useState([]);
    const [value, setValue] = useState('');

    const handlerText = (e) => {
        setArr([...arr, value])
        new Date().toLocaleString()
        setValue('')
    }

    let addPost = arr.map((element) => {

        return (<div className='newPost'>
            <div className=''>
                <div className='img_user'>
                    <Image className='img_user' src={require('../Image/user.png')} />
                </div>
                <div>{new Date().toISOString().slice(0, 10)}
                </div>
            </div>
            <div className='text_new'>
                {element}
            </div>
        </div>);

    });


    return (<div>
            <textarea className='textarea' value={value} onChange={event => setValue(event.target.value)} />
            <button className='footer_btn' onClick={handlerText}>Send message</button>
        <div>
            {addPost}
        </div>
    </div>);

}

export default Button;


