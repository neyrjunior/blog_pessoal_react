import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className='w-full bg-green-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>
            <Link to="./Home">Blog Pessoal</Link>
          </div>

          <div className='flex gap-4'>
            <div className="hover:underline">
            <Link to="/Login">Login</Link>

            </div>
            <div className="hover:underline">
              <Link to="/postagens">Postagens</Link>
            </div>
            <div className='hover:underline'>
              <Link to="/temas">Temas</Link>
            </div>
            <div className='hover:underline'>
              <Link to="/cadastrar-tema">Cadastrar tema</Link>
            </div>
            <div className='hover:underline'>
              <Link to="/perfil">Perfil</Link>
            </div>
            <div className='hover:underline'>
              <Link to="/sair">Sair</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;