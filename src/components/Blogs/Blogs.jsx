import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmarks }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))

    }, [])
    
    return (
        <section className="w-2/3">
            
            <section>

                {
                
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks}></Blog>)
                    
                }

            </section>

        </section>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func
}

export default Blogs;