import { useState } from "react"
import { URL, CATEGORIES, ADD, USER, PASSWORD, SELECT } from '../../../cong'
import { Helmet } from 'react-helmet';
import { Preloader } from "../../Preloader";
import ReactQuill from "react-quill";


export const FormAddCategories = () => {

    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(undefined)
    const [confirm, setConfirm] = useState('Створити Категорію')
    const [isLoading, setIsLoading] = useState(false)
    const credentials = `${USER}:${PASSWORD}`

    const addCategory = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.append('title', title);
        formData.append('url', url);
        formData.append('description', description)
        formData.append('file', file);

        try {
            const response = await fetch(`${URL}${CATEGORIES}${SELECT}${ADD}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${btoa(credentials)}`
                },
                body: formData,
            });

            if (response.ok) {

                window.location.reload(true);
                console.log("Good")
            } else {
                console.error(`Server responded with ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    };



    return (

        <section className="box_categories">
            <div>
                <Helmet>
                    <title>Додати Категорію</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>

            <form onSubmit={addCategory} className="form_categories">
                {isLoading && <Preloader/>}
                <div className="form_box">
                    <div className="input_box">
                        <label from="title">Добавити Категорію</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Enter category title"
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="url">Добавити URL</label>
                        <input
                            type="text"
                            name="url"
                            value={url}
                            placeholder="Ввести url"
                            id="url"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="input_box">
                        <label htmlFor="description">Добавити URL</label>
                        {/* <textarea
                            type="textarea"
                            name="description"
                            value={description}
                            placeholder="Ввести description"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                        /> */}
                    <ReactQuill
                    value={description}
                    placeholder="Тут можеш написати опис категорії"
                    theme="snow"
                    bounds={".app"}
                    onChange={setDescription}
                    modules={{
                        toolbar: [
                            [{ header: [1, 2, 3, 4, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "image"],
                            [{ size: ["small", false, "large", "huge"] }],
                            ["clean"],
                          ],
                    }}  
                    
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