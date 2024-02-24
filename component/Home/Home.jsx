import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("login");

   useEffect(() => {
    if(authenticated !== "success"){
        navigate("/Login");
    }
   }, []);

   function handleLogout(event){
    event.preventDefault();
      localStorage.setItem("login", "failed");
      setTimeout(function () {
        navigate("/Login");
        }, 800);
        navigate("/Loding");
   }
   function handleContact(event){
    event.preventDefault();
      setTimeout(function () {
        navigate("/Contact");
        }, 800);
        navigate("/Loding");
   }

    return(
        <>
        <div className="divwq">
            <header className="headdde">
                <img src="gambar/logo CATTY.gif" className="imgg" />
                <h1 className="h11">Home</h1>
                <h4 className="h4q" onClick={(event) => handleContact(event)}>SocialMedia</h4>
                <button onClick={(event) => handleLogout(event)} className="btnlg">↪ Log Out</button>
            </header>
            <div className="div0">
                <h1>About Catty</h1>
                <p>
                    Catty is a website for learning React (actually this is an assignment website🤓),
                    <br />
                    This website was specially designed by a CSS SEPUH named Muhammad Kahfi who is a very CSS SEPUH (just kidding!!),
                    <br />
                    So this is just a task website ordered by Ust Razak Adli Tama or SEPUH Razak,
                    <br />
                    so this is just the home page.
                </p>
            </div>
            <div className="dih1">
                <img src="gambar/Foto Kahfi Yang Ganteng.JPG" alt="orang ganteng"  className="mh"/>
                <h1>Muhammad Kahfi</h1>
                <p>      
                    Muhammad Kahfi is a santri or student at BQ City IBS
                    <br />
                    Kahfi is someone who easily gets along with anyone, including students and religious teachers
                    <br />
                    Kahfi was born on November 30 2010 in the city of Jakarta, he now lives in the city of Depok
                    <br />
                    Kahfi has a VERY GOOD attitude, he's the type of person who doesn't like anyone 
                    <br />
                    <br />
                    that's all my introduction
                    <br />
                    Thanks`
                </p>
            </div>
            <div className="dih1">
                <img src="gambar/Gedung-Bina-Qurani-Islamic-Boarding-School-2048x1536.jpg" alt="BQ"  className="mh1"/>
                <h1>BQ City Islamic Boarding School</h1>
                <p>
                    BQ Islamic Boarding School is a formal educational institution located in the city of Bogor with a program
                    <br />
                    superior Information Technology, Tahfiz Al-Quran with Sanad, Internalization of Adab, and language.
                    <br />
                    With experienced and professional teaching staff, the output of BQ Islamic Boarding School
                    <br />
                    are expected to be human beings with integrity, have a correct understanding of Islam, and are deeply capable
                    <br />
                    mastery of world languages, and proficient in the field of information technology.
                    <br />
                    <br />
                    Link to My School → <a href="https://binaqurani.sch.id/">BQ City</a>
                </p>
            </div>
            <br />  
            <footer className="foot">
                <h3>© 2024 Muhammad Kahfi, All Rights reserved</h3>
            </footer>
        </div>
        </>
    )
}

export default Home;