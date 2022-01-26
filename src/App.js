function App() {
    
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comment = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' }
    ];

    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {Math.random() * 5 + 5}
            <div className="comments">
                <h3>Comments ({comment.length})</h3>
                <ul>
                    {comment.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default App;