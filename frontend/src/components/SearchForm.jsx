import {useState} from 'react';

export default function SearchForm({onSubmit}) {

    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }

    return (

        <form className="search-form" onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Enter legal document title'
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            className="search-input"
            required
            />
            <button type='submit' className="search-button">Find Document</button>
        </form>

    );
}