import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "./contact.scss"

export const Contact=()=>{

    return (
        <>
        <Header />
        <div className="main-contents">
            <img src="./logo192.png" alt="プロフィール画像" className="profile-img"/>
            <label htmlFor="email"><h1>メールアドレス</h1></label>
            <br/>
            <p id="email" className="contact-content">sample@gmail.com</p>
            <br/> 
            <label htmlFor="phone"><h1>電話番号</h1></label><br/>
            <p id="phone" className="contact-content">0x0-xxxx-xxxx</p>
            <br/>
        </div>
        <Footer/>
        
        </>
    )
}