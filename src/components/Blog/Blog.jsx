import PropTypes from 'prop-types'
// import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmarks, handleMarkasRead }) => {

    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog

    // const [bookmarkColor, setBookmarkColor] = useState(false)



    return (
        <section className='mb-10'>

            <img className='rounded-lg w-full' src={cover} alt={`Cover-of-${title}`} />

            <section className='flex justify-between items-center mt-8'>

                <section className='flex gap-5'>
                    <img className='h-12' src={author_img} alt="" />

                    <section>
                        <h5 className='text-2xl font-bold'>{ author }</h5>
                        <p className='text-base font-semibold text-[#11111199]'>{ posted_date }</p>
                    </section>
                </section>

                <section className='flex items-center gap-4'>
                    <h5 className='text-xl font-medium text-[#11111199]'>{reading_time} min read
                    </h5>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-black'><FaBookmark></FaBookmark></button>
                </section>

            </section>
            
            <h2 className='text-4xl font-bold mt-4'>{title}</h2>
            
            <section className='flex gap-4 text-xl font-medium text-[#11111199] mt-4'>
                {
                    hashtags.map((hash, idx) => <h5 key={idx}>#{hash}</h5>)
                }
            </section>

            <section>
                <button onClick={() => handleMarkasRead(reading_time)} className='text-[#6047EC] text-xl font-semibold mt-5 mb-8 underline'>Mark as Read</button>
            </section>

            <hr className='w-3/4 mx-auto'/>

        </section>
    );
};

Blog.propTypes = {

    blog: PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleMarkasRead: PropTypes.func

}

export default Blog;