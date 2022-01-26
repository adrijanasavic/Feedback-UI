function App() {

    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comment = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' }
    ];

    const loading = false;
    const showComment = true;

    if (loading) return <h1>Loading...</h1>

    const commentBlock = (<div className="comments">
        <h3>Comments ({comment.length})</h3>
        <ul>
            {comment.map((comment, index) => (
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>)


    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComment && commentBlock}

        </div>
    )
}
export default App;