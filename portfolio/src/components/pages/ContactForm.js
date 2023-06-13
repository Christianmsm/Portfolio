import { useState } from "react";
// import '../styles/ContactForm.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
        setMessage(inputValue);
    }
}
//create logic for the handleInputChange function

const handleFormSubmit = (e) => {
    e.preventDefault();
//Add validation functionality
    setName('');
    setEmail('');
    setMessage('');
};

    return (
        <div>
            <form className="w-80 form">
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