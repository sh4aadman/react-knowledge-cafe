import PropTypes from 'prop-types'
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <section className="w-1/3 bg-[#1111110d] p-8 rounded-lg">
            
            <h3 className='text-2xl font-bold mb-4'>Bookmarks Section: {bookmarks.length} </h3>
            
            <section className='rounded-lg flex flex-col gap-4'>
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