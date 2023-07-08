import {useParams} from 'react-router-dom'
import { useState } from "react"
import { Helmet } from 'react-helmet';
import { Preloader } from "../../../Preloader";
import { URL, PRODUCTS, UPDATE, USER, PASSWORD } from '../../../../cong'
import {CategorySelect} from '../CategorySelect'
export const EditorProduct = () => {

    const {id} = useParams();


    const [product_id] = useState(id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(undefined);
    const [width, setWidth] = useState('');
    const [compoud, setCompoud] = useState('');
    const [density, setDensity] = useState('');
    const [video, setVideo] = useState(undefined);
    const [category_id, setCategory_id] = useState('');
    const [price, setPrice] = useState('');
    const [test_mater, setTest_mater] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const credentials = `${USER}:${PASSWORD}`

    const addPost = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const formData = new FormData();
        formData.append("title", title);
        formData.append('description', description);
        formData.append('id', product_id)
        formData.append('photo', photo);
        formData.append('video', video)
        formData.append('width', width);
        formData.append('compoud', compoud);
        formData.append('density', density);
        formData.append('test_mater', test_mater);
        const money = +parseInt(price, 10);
        formData.append('category_id', category_id);
        formData.append('money', money);

        const response = await fetch(`${URL}${PRODUCTS}${UPDATE}${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Basic ${btoa(credentials)}`
            },
            body: formData,
        })
        if (response.ok) {
            window.location.reload(true);
        } else {
            console.error(`Server responded with ${response.status} ${response.statusText}`);
        }
    }


    return (
        <section className="box_editor_categories">
            <div>
                <Helmet>
                    <title>Редагувати Товар</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
            <form className="form_editor_category" onSubmit={addPost}>
                <div className="preloader_post">
                {isLoading && <Preloader/>}
                </div>
                <div className="form_editor_box">
                    <div className="input_editor_box">
                        <label>Редагувати назву Товару</label>
                        <input type="text"
                            name="title"
                            value={title}
                            placeholder="Напишиіть назву товару"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Редагувати опис</label>
                        <textarea type="text"
                            name="description"
                            value={description}
                            placeholder="Додати опис"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Замінти Фото</label>
                        <input type="file"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Редагувати ширину тканини</label>
                        <input type="text"
                            name="width"
                            value={width}
                            placeholder="Написати ширину тканини"
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Редагувати зміст</label>
                        <input type="text"
                            name="compoud"
                            value={compoud}
                            placeholder="Добавити Состав"
                            onChange={(e) => setCompoud(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Редагувати щільність</label>
                        <input type="text"
                            name="density"
                            value={density}
                            placeholder="Написати щільність"
                            onChange={(e) => setDensity(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Редагувати Тест Мантердейла</label>
                        <input type="text"
                            name="test_mater"
                            value={test_mater}
                            placeholder="Написати Тест Мантирдейла"
                            onChange={(e) => setTest_mater(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <label>Замінти Відео</label>
                        <input type="file"
                            accept="video/*"
                            name="video"
                            onChange={(e) => setVideo(e.target.files[0])}
                        />

                    </div>
                    <div className="input_editor_box">
                        <label>Змінити Категорію</label>
                        <CategorySelect onChange={(e) => setCategory_id(e.target.value)} name="id" />

                    </div>
                    <div className="input_editor_box">
                        <label>Змінити Вартість в $</label>
                        <input type="text"
                            name="price"
                            value={price}
                            placeholder="Написати вартість тканини в $"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="input_editor_box">
                        <button type="submit" className="editor_button">Закінчити Редагування</button>
                    </div>
                </div>
            </form>
            
        </section>
    )
}