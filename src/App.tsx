
import Card from "./components/card";
import img1 from "./images/pexels-hasibullah-zhowandai-819530.jpg"
import img2 from "./images/pexels-andrea-piacquadio-845457.jpg"
import img3 from "./images/pexels-andrea-piacquadio-3781731.jpg"

/*a array of objects*/
function App() {
  const blogs = [{ 
    background: img1,
    name: "John Doe",
    about: "I'm a frontend developer, i love react and yarn, let's learn together!"
  },{
    background:img2,
    name: "Andres Piacquadio",
    about: "I'm a photographer and i love taking pictures of mountains"
  },{
    background:img3,
    name: "Rachel Sky",
    about: "I'm a Graphic Designer and i love creating something out of nothing!"
  }]

  return (
    <>
      {blogs.map((blog)=>{
        return (<div key={blog.name}>
          <Card background = {blog.background} name = {blog.name} about = {blog.about}></Card>
          </div>)
      })}
    </>
  );
}

export default App;
