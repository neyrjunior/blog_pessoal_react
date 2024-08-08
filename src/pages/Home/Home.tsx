import { useNavigate, Link } from 'react-router-dom'


const Home = () => {
    let navigate = useNavigate()
    return (

        <div className='v-96'>
            <h2 className="text-slate-900 text-5xl  m-4">Home</h2>
            <div>
                <button type='submit'
                    className='hover:underline mx-4'
                    onClick={() => { navigate('/login') }}>
                    
                </button>
                <Link to='/login' className='hover:underline mx-4'></Link>
            </div>

        </div>

    )
}

export default Home