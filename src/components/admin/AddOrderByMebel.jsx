import { useState } from "react"
import { Helmet } from 'react-helmet';
import {Preloader} from '../Preloader'
import {URL, ORDERBYMEBEL, SELECT, ADD, USER, PASSWORD} from '../../cong'
import ReactQuill from "react-quill";
import {refreshToken} from "../../api"
export const AddOrderByMebel = ()=> {

    const [adress, setAdress] = useState(``);
    const [describe, setDescribe] = useState(``);
    const [phone, setPhone] = useState(``);
    const [name, setName] = useState(``);
    const [prepayment, setPrepayment] = useState(0);
    const [totalConsumtion, setTotalConsumtion] = useState(0);
    const [totalSum, setTotalSum] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const addOrderByMebel = async (e)=> {
        e.preventDefault();
        refreshToken();
        setIsLoading(true)
        const dataSend = {
            adress : `${adress}`,
            describe: `${describe}`,
            phone: `${phone}`,
            name: `${name}`,
            prepayment: `${+parseInt(prepayment, 10)}`,
            totalConsumtion: `${+parseInt(totalConsumtion, 10)}`,
            totalSum : `${+parseInt(totalSum, 10)}`
        }
        const jsonData = JSON.stringify(dataSend);

        try {
            
            const response = await fetch(`${URL}${ORDERBYMEBEL}${SELECT}${ADD}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`
                },
                body: jsonData
            });

        if(response.ok) {
            window.location.reload(true);
        } else {
            console.error(`Server responded with ${response.status} ${response.statusText}`);
        }

        } catch (e) {
            console.error(e)
        }


    }



    return (
        <section className="box_post">
                        <div>
                <Helmet>
                    <title>Додати Замовлення на Перетяжку</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
            <form className="form_categories" onSubmit={addOrderByMebel}>
                <div className="preloader_post">
                {isLoading && <Preloader/>}
                </div>
                <div className="form_box">
                    <div className="input_box">
                        <label>Додати адресу</label>
                        <input type="text"
                            name="adress"
                            value={adress}
                            placeholder="Напишиіть адресу"
                            onChange={(e) => setAdress(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                    <label>Додати опис</label>
                    <ReactQuill
                    value={describe}
                    placeholder="Тут можеш написати опис замовлення"
                    theme="snow"
                    bounds={".app"}
                    onChange={setDescribe}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, 3, 4, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["clean"],
                          ],
                    }}  
                    
                    />

                    </div>
                    <div className="input_box">
                        <label>Додати телефон</label>
                        <input type="text"
                            name="phone"
                            value={phone}
                            placeholder="Зафіксувати телефон"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <label>Додати призвіще клієнта</label>
                        <input type="text"
                            name="name"
                            value={name}
                            placeholder="Додати призвіще"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <label>Додати витрати на Замовлення </label>
                        <input type="text"
                            name="totalConsumtion"
                            value={totalConsumtion}
                            placeholder="Витрати на замовлення"
                            onChange={(e) => setTotalConsumtion(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <label>Додати Аванс</label>
                        <input type="text"
                            name="prepayment"
                            value={prepayment}
                            onChange={(e) => setPrepayment(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <label>Добавити Вартість в грн</label>
                        <input type="text"
                            name="totalSum"
                            value={totalSum}
                            placeholder="Написати вартість тканини в грн"
                            onChange={(e) => setTotalSum(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <button type="submit" className="post_button">Додати Замовлення на Перетяжку</button>
                    </div>
                </div>
            </form>
        </section>
    )
}