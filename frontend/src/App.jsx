import { useState } from 'react'
import SearchForm from './components/SearchForm.jsx'
import DisplayResult from './components/DisplayResult.jsx'
import { fetchDocumentSummary } from './api_call/Document-summary-retrieve'
import './App.css'

function App() {
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setResult(null);
    try{
      const searchResult = await fetchDocumentSummary(query); 
      setResult(searchResult);
    } catch (err) {
      setError("Failed to fetch document summary");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="container">
            <h1 className="title"> Legal Document Search Portal </h1>
            <SearchForm onSubmit={handleSearch}/>
            <DisplayResult result={result} loading={loading} error={error}/>
      </div>
    </div>
  )
}

export default App
