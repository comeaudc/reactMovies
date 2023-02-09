import {useState, useEffect} from 'react'

export default function Form (props) {
    const [formData, setFormData] = useState({
        searchTerm: '',
    })

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        props.movieSearch(formData.searchTerm)
    }

    return <div>
        <form onSubmit={e => onSubmit(e)}>
            <h2>Movie Title Here</h2>
            <input type='text' name='searchTerm' value={formData.searchTerm} onChange={e => onChange(e)} />
            <input type='submit' value='submit' />
        </form>
    </div>
}