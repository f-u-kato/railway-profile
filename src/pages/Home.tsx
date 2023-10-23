import { Header } from "../components/Header"
import "./home.scss"

export const Home=()=>{

    return (
        <>
        <Header />
        <div className="main-contents">
            <label htmlFor="name"><h1>名前</h1></label>
        </div>
        
        </>
    )
}