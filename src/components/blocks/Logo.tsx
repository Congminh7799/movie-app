import { Link } from 'react-router-dom'

const Logo = () => {
    return(
        <>
            <Link to={'/movie-app'}>
                <p className='text-3xl font-bold text-white'>Logo</p>
            </Link>
        </>
    )
}

export default Logo;