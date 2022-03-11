import { useState } from "react";
import "./App.css";

function App({ handleAdd, handleDelete, handleUpdate, handleSignup }) {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

      {/* Authentication */}
      <h2>Firebase Auth</h2>

      <form
        className="signup"
        onSubmit={(e) => handleSignup(e, email, password)}
      >
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
}

export default App;
