import { useLocation, useNavigate } from 'react-router-dom'
import './header.scss'
export const Header = () => {
  // const pathName=useLocation().pathname
  const navigate=useNavigate()
  return (
    <header className="header">
      <img src='./logo192.png' alt='プロフィール画像' className='profile-img'/>
      <nav>
        <ul>
          <li><button onClick={()=>{navigate('/')}}>Profile</button></li>
          <li><button onClick={()=>{navigate('/contact')}}>Contact</button></li>
        </ul>
      </nav>
    </header>
  )
}
