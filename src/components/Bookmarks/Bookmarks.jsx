import PropTypes from 'prop-types'
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <section className="bg-[#1111110d] rounded-lg p-8 mt-6">
            
            <h3 className='text-2xl font-bold mb-4'>Bookmarked Blogs: {bookmarks.length} </h3>
            
            <section className='space-y-4'>
                {

                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)

                }
            </section>

        </section>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}

export default Bookmarks;