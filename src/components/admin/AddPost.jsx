import { FormAddPost } from "./post/FormAddPost"
import { Link } from "react-router-dom";


export const AddPost = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <FormAddPost />
                    </div>
                    <div className="col-md-4">
                        <div className="section_editor_button">
                        <button className="editorPost" >
                         <Link to={"/admin/addpost/editor/{id}"} className="editor_btn">Редагувати Товар</Link>
                         </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}