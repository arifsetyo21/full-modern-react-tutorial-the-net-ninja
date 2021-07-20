const Home = () => {
   const handleClick = (e) => {
      console.log('hello, ninjas!', e)
   }

   const handleClickAgain = (name, e) => {
      console.log('hello ' + name, e.target);
   }
   
   return (
      <div className="home">
         <h2>Home page</h2>
         <button onClick={handleClick}>Click Me</button>
         {/* For not invoke function direcly, so we can use anonymouse functino */}
         <button onClick={(e) => {
            handleClickAgain('mario', e)
         }}>Click me again</button>
      </div>
   )
}

export default Home