import { useState } from "react";

const Create = () => {

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author }
      
      console.log(blog);
   }

   return (
      <div className="create">
         <h2>Add a New Blog</h2>
         <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body</label>
            <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author</label>
            <select
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
            >
               <option value="mario">mario</option>
               <option value="yoshi">yoshi</option>
            </select>
            <button >Add blog</button>
         </form>
      </div>
   )
}

export default Create;