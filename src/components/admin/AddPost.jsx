import { FormAddPost } from "./post/FormAddPost"


export const AddPost = () => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <FormAddPost />
                    </div>
                    <div className="col-md-4">
                        <div className="delete_by_id">
                            <h5>Тут повинна бути конпка</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}