import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center container mx-auto border-b-2 border-[#11111126] p-5'>
            
            <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
            <img className='w-16' src={Profile} alt="" />

        </header>
    );
};

export default Header;