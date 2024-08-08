import { useNavigate, Link } from 'react-router-dom'


const Login = () => {
    let navigate = useNavigate()
    return (
        <div className='h-96'>
            <h2 className="text-slate-900 text-5xl   m-4">Login</h2>
            <div>
                <button type='submit'
                    onClick={() => { navigate('/home') }}
                    className='hover:underline mx-4'>
                    
                </button>
                <Link to='/home' className='hover:underline  mx-4'></Link>
            </div>

        </div>
    )
}

export default Login