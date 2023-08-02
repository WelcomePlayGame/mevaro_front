
import { useState } from "react"
import {URL, ARTICLE, SELECT, ADD, USER, PASSWORD} from "../../../cong"
import {Preloader} from "../../Preloader"
import ReactQuill from "react-quill";
import { Helmet } from 'react-helmet';
 export const FormAddArticle = ()=> {
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [describe, setDescribe] = useState('')
    const [seo_title, setSeoTitle] = useState(``)
    const [seo_describe, setSeoDescribe] = useState(``)
    const [file, setFile] = useState(undefined)
    const credentials = `${USER}:${PASSWORD}`
    const [confirm] = useState('Створити Статью')
    const addarticle = async (e)=> {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.append(`title`, title);
        formData.append(`seo_title`, seo_title)
        formData.append(`describe`, describe);
        formData.append(`seo_describe`, seo_describe)
        formData.append(`file`, file)
        

        try {
            const response = await fetch(`${URL}${ARTICLE}${SELECT}${ADD}`, {
                method: `POSt`,
                headers: {
                    'Authorization': `Basic ${btoa(credentials)}`
                },
                body: formData
            });
            if(response.ok) {
                window.location.reload(true);
                console.log("Good")
            } else {
                console.error(`Server responded with ${response.status} ${response.statusText}`);
            }
        
        } catch (e) {
            console.error(e)
            throw new Error(`Not working dude`)
        }

    }


    return (

    <section className="box_categories">
                    <div>
                <Helmet>
                    <title>Додати Статью</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
        <form onSubmit={addarticle} className="form_categories">
        {isLoading && <Preloader/>}
        <div className="form_box">
             <div className="input_box">
                <label from="title">Добавити Назву Статті</label>
                <input
                type="text"
                name="title"
                value={title}
                placeholder="Тут назва Статті"
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                />
            </div>
            <div className="input_box">
            <label from="title">Опис</label>
            <ReactQuill
                    value={describe}
                    placeholder="Тут можеш написати опис статті"
                    theme="snow"
                    bounds={".app"}
                    onChange={setDescribe}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, 3, 4, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "image"],
                            [{ size: ["small", false, "large", "huge"] }],
                            [{ align: ["left", "center", "right"] }]
                            ["clean"],
                          ],
                    }}  
                    
                    />  
            </div>
            <div className="input_box">
                <label from="title">Додати Title для SEO</label>
                <input
                type="text"
                name="seo_title"
                value={seo_title}
                placeholder="Тут Title SEO"
                onChange={(e) => setSeoTitle(e.target.value)}
                id="seo_title"
                />
            </div>
            <div className="input_box">
                <label from="title">Додати Describe для SEO</label>
                <input
                type="text"
                name="seo_describe"
                value={seo_describe}
                placeholder="Тут Describe SEO"
                onChange={(e) => setSeoDescribe(e.target.value)}
                id="seo_title"
                />
            </div>
            <div className="input_box">
                        <label htmlFor="photo">Завантажати Файл</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="file"
                            id=""
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <div className="input_box">
                        <button type="submit" className="post_button">{confirm}</button>
                    </div>
        </div>
        </form>
    </section>
    )
}