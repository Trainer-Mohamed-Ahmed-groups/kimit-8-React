import { useState } from 'react';

export default function Form() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // function handleFirstNameChange(e) {
    //     setPerson({
    //         ...person,
    //         firstName: e.target.value
    //     })
    // }

    // function handleLastNameChange(e) {
    // setPerson({
    //     ...person,
    //     lastName: e.target.value
    // })
    // }

    // function handleEmailChange(e) {
    // setPerson({
    //     ...person,
    //     email: e.target.value
    // })
    // }

    let handleData = (ev) => {
        ev.target.name === 'firstName'
            ? setPerson({
                ...person,
                firstName: ev.target.value
            })
            : ev.target.name === 'lastName'
                ? setPerson({
                    ...person,
                    lastName: ev.target.value
                })
                : ev.target.name === 'email'
                && setPerson({
                    ...person,
                    email: ev.target.value
                })
    }

    return (
        <>
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleData}
                    name="firstName"
                />
            </label>
            <br />
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleData}
                    name="lastName"
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleData}
                    name="email"
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}
