import { FormAddPost } from "./post/FormAddPost"
import { Link } from "react-router-dom";


export const AddPost = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <FormAddPost />
                    </div>
                </div>
            </div>
        </section>
    )
}