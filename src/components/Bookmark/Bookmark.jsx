import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    return (
        <section>
            <h1 className='text-lg font-semibold bg-white p-5 rounded-lg'>{ bookmark.title }</h1>
        </section>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;