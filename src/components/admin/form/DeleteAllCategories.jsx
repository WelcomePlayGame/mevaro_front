import { DELETEALL, CATEGORIES } from '../../../cong'
import { useState } from 'react';

export const DeleteAllCategories = () => {

    const [message, setMessage] = useState('');

    const handleDeleteAll = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URL}${CATEGORIES}${DELETEALL}`, {
                method: 'DELETE'
            });
            if (response.status === 204) { // HTTP 204 No Content
                console.log('Delete All success!');
                setMessage('Категорії успішно видалені!');
            } else {
                console.log('Delete All failed with status:', response.status);
                setMessage('Не вдалося видалити категорії.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Помилка сервера. Спробуйте пізніше.');
        }
    }

    return (
        <section className="deleteAll">
            <hr />
                        <form onClick={handleDeleteAll} className="form_categories">
                            <button type="submit">Видалити Всі Категорії</button>
                        </form>
                
                    {message && <p>{message}</p>}
        </section>
    )
}
