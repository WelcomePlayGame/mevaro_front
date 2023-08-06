import { useState } from "react"

export const Secutity = ()=> {
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``)

    const serverUsername = `mevaro`
    const serverpassword = `mevaro`
 
    const handleSubmit =  (e)=> {
        e.preventDefault();

        try {
            if(username === serverUsername && password === serverpassword) {
                sessionStorage.setItem(`isAuthenticated`, `true`)
                window.location.href = '/admin'
            }
            else {
                alert(`Error`)
            }

        } catch (e) {
            console.error(e)
        }



    }


    return (
        <section className="form_sec_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form_admin" onSubmit={handleSubmit}>
                            <div className="form_input_admin">
                            <input
                            type="text"
                            name="username"
                            value={username}
                            title="Введи Имя Админа"
                            placeholder="Введи Имя Админа"
                            onChange={(e)=>setUsername(e.target.value)}
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