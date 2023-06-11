import { useState } from "react";


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


//create logic for the handleInputChange function
//create the logic for the formSubmit function
    return (
        <div>
            <form className="form">
                <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                /> 
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;