import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Singup.css";

function Singup(){
    const navigate = useNavigate();


    const handleback = (event) => {
        event.preventDefault();
        setTimeout(function () {
            navigate("/Login");
            }, 800);
            navigate("/Loding");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(function (){
            window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
        }, 800);
        navigate("/Loding");
    }
    return(
        <div className="divwq">
            <div className="diff">
                <img src="gambar/Desain tanpa judul copy.png" className="img23" />
                <h2 className="h23">Do you have an acount?</h2>
                <h4 className="h49">You don't have an account yet? <br /> create your account now!</h4>
                <div>
                    <h4>
                        If you want to create a username, you have to click the <br />  button below that says "Next", provided that you have to send it to "Klounbad11@gmail.com",
                    </h4>
                    <img src="gambar/Screenshot 2024-02-14 101808.png" alt="Example" className="wa" />
                    <h4>
                        then you click the Submit button
                    </h4>
                </div>
                        <div className="divbtn">
                            <button className="btnd" type="submit" onClick={handleSubmit}>▶ Next</button>
                            <b className="txt4" type="submit" onClick={(event) => handleback(event)}>Didn't create an account?</b>
                        </div>
                    </div>
            </div>
    )
}

export default Singup;