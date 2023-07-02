import {useParams} from 'react-router-dom'
import { useState } from "react"
import { URL, CATEGORIES, USER, PASSWORD, UPDATE } from '../../../../cong'
import { Helmet } from 'react-helmet';
import { Preloader } from "../../../Preloader";

export const EditorCategory = () => {
    const {id} = useParams();
   
    const [title, setTitle] = useState('');
    const [category_id] = useState(id)
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(undefined)
    const [confirm] = useState('Завершити Редагування')
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
        formData.append('id', category_id)
        try {
            const response = await fetch(`${URL}${CATEGORIES}${UPDATE}${id}`, {
              method: 'PATCH',
              headers: {
                'Authorization': `Basic ${btoa(credentials)}`
              },
              body: formData,
            });
          
            if (response.ok) {
              window.location.href = '/admin/dashboard';
              console.log("Good");
            } else {
              console.error(`Server responded with ${response.status} ${response.statusText}`);
            }
          } catch (error) {
            console.error(error);
          }
    };



    return (

        <section className="box_editor_categories">
            <div>
                <Helmet>
                    <title>Змінити Категорію</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>

            <form onSubmit={addCategory} className="form_editor_category">
                {isLoading && <Preloader/>}
                <div className="form_editor_box">
                    <div className="input_editor_box">
                        <label from="title">Змінити Категорію</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Enter category title"
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                        />
                    </div>
                    <div className="input_editor_box">
                        <label htmlFor="url">Змінити URL</label>
                        <input
                            type="text"
                            name="url"
                            value={url}
                            placeholder="Ввести url"
                            id="url"
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label htmlFor="description">Змінити URL</label>
                        <textarea
                            type="textarea"
                            name="description"
                            value={description}
                            placeholder="Ввести description"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label htmlFor="photo">Перезати Файл</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="file"
                            id=""
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <div className="input_editor_box">
                        <button type="submit" className="editor_button">{confirm}</button>
                    </div>
                </div>
            </form>
        </section>
    )
    
}