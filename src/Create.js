import { useState } from "react";

const Create = () => {

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('');
   const [isPending, setIsPending] = useState(false)

   const options = [
      { value: 'mario', label: 'mario' },
      { value: 'yoshi', label: 'yoshi' },
   ]

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author }

      setIsPending(true)
      
      setTimeout(() => {
         fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
         }).then(() => {
            console.log('new blog added')
            setIsPending(false)
         })
      }, 1000);
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
               defaultValue="mario"
            >
               <option value="mario">mario</option>
               <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button >Add blog</button>}
            {isPending && <button disabled>Adding blog...</button>}
         </form>
      </div>
   )
}

export default Create;