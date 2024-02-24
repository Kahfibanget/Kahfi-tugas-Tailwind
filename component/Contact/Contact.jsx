import "./Contact.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact (){
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("login");

   useEffect(() => {
    if(authenticated !== "success"){
        navigate("/Login");
    }
   }, []);


    function handleLogOut(event){
        event.preventDefault();
          localStorage.setItem("login", "failed");
          setTimeout(function () {
            navigate("/Login");
            }, 800);
            navigate("/Loding");
       }
       function HandleHome(event){
        event.preventDefault();
          setTimeout(function () {
            navigate("/");
            }, 800);
            navigate("/Loding");
       }

    return(
        <div className="divwq">
            <div>
                <header className="headdde">
                    <img src="gambar/Desain tanpa judul copy.png" alt="" />
                    <h1 className="h11">SocialMedia</h1>
                    <h4 className="hq" onClick={(event) => HandleHome(event)}>Home</h4>
                    <button className="btnlg" onClick={(event) => handleLogOut(event)}>↪ Log Out</button>
                </header>
                <div className="dsi">
                    <div className="s">
                    <img src="gambar/download.png" className="imghh" />
                    <h4>GitHub</h4>
                    </div>
                    <h1>GitHub : Kahfibanget</h1>
                </div>
                <div className="dsi">
                <div className="s">
                    <img src="gambar/download (1).png" className="imghh" />
                    <h4>YouTube</h4>
                    </div>
                    <h1>Youtube : @Koix11680</h1>
                </div>
                <div className="dsi">
                <div className="s">
                    <img src="gambar/download (2).png" className="imghh" />
                    <h4>Gmail</h4>
                    </div>
                    <h1>Gmail : Klounbad11@gmail.com</h1>
                </div>
                <footer className="foot">
                <h3>© 2024 Muhammad Kahfi, All Rights reserved</h3>
            </footer>
            </div>
        </div>
    )
}

export default Contact;