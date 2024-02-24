import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import users from "../../databases/users";


function Login(){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // console.log({
    //     username: username,
    //     password: password,
    // });

        function handleLogin(event){
            event.preventDefault();
            const data = users.find((data) => data.username === username);
            if(data && data.password === password){
                    localStorage.setItem("login", "success");
                    setTimeout(function () {
                      navigate("/")
                      }, 800);
                      navigate("/Loding");
                }else if(!password || !username){
                    alert("Sorry but the username or password is not entered, so please fill it in!");
                }else {
                    localStorage.setItem("login", "failed");
                    alert("Your username or password is incorrect!");
                }
            }
    

    function handleUsername(username_user){
        setUsername(username_user);
    }

    function handlePassword(password_pass){
        setPassword(password_pass);
    }

        const [hidden, setHidden] = useState(true);
        const q = document.getElementById("q");
        const h41 = document.getElementById("h41");
      
        const handleClick = () => {
            if(q && hidden){
                setHidden(!hidden);
                q.innerHTML = "◉";
                h41.innerText = "Hide Password?";
            } else if(!password){
                setHidden(hidden)
                q.innerHTML = "◎";
                h41.innerText = "Show Password?";
            }
            else {
                setHidden(!hidden);
                q.innerHTML = "◎";
                h41.innerText = "Show Password?";
            }
        };

        const handleup = (event) => {
            event.preventDefault();
            setTimeout(function () {
                navigate("/Signup");
                }, 800);
                navigate("/Loding");
        }

    return(
        <div className="divqq">
            <div className="divAll">
                <div>
                    <img src="gambar/Desain tanpa judul.png" className="img" />
                    <br />
                    <h2 className="h2">Catty</h2>
                    <br />
                    <h4 className="h4">welcome back, please log in <br />your account</h4>
                </div>
                <div className="divinput"> 
                   <div className="divinput">
                        <h4>Username</h4>
                        <input 
                        type="username" 
                        className="input" 
                        placeholder="  Enter User Username" 
                        onChange={(event) => handleUsername(event.target.value)}
                        required
                        autoComplete="username"
                        id="username"/>
                   </div>
                   <div className="divinput">
                        <h4>Password</h4>
                        <div className="divvf">
                            <input 
                            type={hidden ? "password" : "text"} 
                            className="input" 
                            placeholder="  Enter User Password" 
                            onChange={(event) => handlePassword(event.target.value)}
                            required
                            autoComplete="password"
                            id="password"
                            />
                        </div>
                        <div className="btnhs">
                             <b onClick={handleClick} className="b" id="q">◎</b>
                             <h4 className="he" id="h41">Show Password?</h4>
                        </div>
                   </div>
                   <br />
                   <div className="divbn">
                        <button className="btn" type="submit" onClick={(event) => handleLogin(event)}>Sign in ↩</button>
                        <b className="txt2" type="submit" onClick={(event) => handleup(event)}>Do you have an account?</b>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default  Login;