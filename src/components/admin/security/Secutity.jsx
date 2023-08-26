import { useState } from "react"
import {LOGIN, REFRESH, URL} from "../../../cong"
export const Secutity = ()=> {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
  

 
const handleLogin = async (e)=> {

e.preventDefault();
const headers = {
    'Content-Type': 'application/json'
};
const body = JSON.stringify({
    login: login,
    password: password
});

try {
    const response = await fetch(`${URL}${LOGIN}`, {
        method: "POST",
        headers: headers,
        body: body,
    });

    if(response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        sessionStorage.setItem('isAuthenticated', true);
        console.log(data)
       window.location.href = "/admin"
    } else {
        console.log(response.status)
    }

} catch (e) {
    console.error(`Error`, e)
}


}


    return (
        <section className="form_sec_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form_admin" onSubmit={handleLogin}>
                            <div className="form_input_admin">
                            <input
                            type="text"
                            name="username"
                            value={login}
                            title="Введи Имя Админа"
                            placeholder="Введи Имя Админа"
                            onChange={(e)=>setLogin(e.target.value)}
                            className="input_admin"
                            />
                            <input
                            type="text"
                            name="password"
                            value={password}
                            placeholder="Введи пароль"
                            onChange={(e)=> setPassword(e.target.value)}
                            className="input_admin"
                            />
                            </div>
                            <div className="form_btn_admin">
                            <button type="submit">Вход</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}