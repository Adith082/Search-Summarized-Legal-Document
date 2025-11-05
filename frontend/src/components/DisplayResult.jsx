

export default function DisplayResult({result, loading, error}) {
    if (loading) return <p className="loading">Searching for documents...</p>;
    if (error) return <div className="error-message">{error}</div>;
    if (!result) return null;

    if (typeof result === 'string') {
        return <div className="not-found">{result}</div>;
    }

    return (
        <div className="result-card">
      <h2 className="result-title">{result.title}</h2>
      <p className="result-summary">{result.summary}</p>
    </div>
    );
}