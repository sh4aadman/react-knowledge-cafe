import PropTypes from 'prop-types'

const Timespent = ({ readingTime }) => {
    
    return (
        <div>
            <h3 className="text-2xl font-bold text-[#6047EC] px-10 py-5 bg-[#6047ec1a] rounded-lg">Spent time on read: {readingTime} min</h3>
        </div>
    );
};

Timespent.propTypes = {
    readingTime: PropTypes.number
}

export default Timespent;