import { useState } from "react"

const PetList = (props) => {
    return (
        <div>
            <h1>Pet List</h1>
            <div>
                <ul>
                    {props.pets.map((pet) => (
                        <li
                            key={pet._id}
                            onClick={() => props.handleSelect(pet)}
                        >
                            {pet.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'New Pet'}
            </button>
        </div>
    )
}

export default PetList