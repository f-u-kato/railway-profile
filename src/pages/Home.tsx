import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "./home.scss"

export const Home=()=>{

    return (
        <>
        <Header />
        <div className="main-contents">
            <img src="./logo192.png" alt="プロフィール画像" className="profile-img"/>
            <label htmlFor="name"><h1>名前</h1></label>
            <br/>
            <p id="name" className="profile-content">加藤拓也</p>
            <br/> 
            <label htmlFor="school"><h1>所属学校</h1></label><br/>
            <p id="school" className="profile-content">福井大学大学院</p>
            <br/>
            <label htmlFor="grade"><h1>学年</h1></label>
            <br/>
            <p id="grade" className="profile-content">修士1年</p>
            <br/>
            <label htmlFor="lab"><h1>所属研究室</h1></label>
            <br/>
            <p id="lab" className="profile-content">長谷川研究室</p>

        </div>
        <Footer/>
        
        </>
    )
}