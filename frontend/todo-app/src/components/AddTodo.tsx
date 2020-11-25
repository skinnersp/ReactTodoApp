import React, { useState } from "react";
import {ITodo } from '../models/ITodo'

type Props = {
    saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [formData, setFormData] = useState<ITodo | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleForm} id={'name'}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" onChange={handleForm} id='description'/>
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>Add Todo</button>
        </form>
    )
}

export default AddTodo
