import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))

    } , [])

    return (
        <section className="w-2/3">
            
            <h3>Blogs: { blogs.length }</h3>

        </section>
    );
};

export default Blogs;