import { useState } from "react";
import "./App.css";

function App({ handleAdd, handleDelete, handleUpdate }) {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [id, setId] = useState();

  return (
    <div className="App">
      <form className="add" onSubmit={(e) => handleAdd(e, title, author)}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">A a new book</button>
      </form>

      <form className="delete" onSubmit={(e) => handleDelete(e, id)}>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          name="id"
          required
          onChange={(e) => setId(e.target.value)}
        />

        <button type="submit">Delete a book</button>
      </form>

      {/* Update document form */}
      <form className="update" onSubmit={(e) => handleUpdate(e, id, title)}>
        <label htmlFor="id">Document Id:</label>
        <input
          type="text"
          name="id"
          required
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update book</button>
      </form>
    </div>
  );
}

export default App;
