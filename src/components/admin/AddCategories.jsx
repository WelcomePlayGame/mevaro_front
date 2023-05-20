import { DeleteAllCategories } from './form/DeleteAllCategories'
import { FormAddCategories } from './form/FormAddCategories'
export const AddCategories = () => {


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <FormAddCategories/>
                    </div>
                    <div className="col-md-4">
                    <DeleteAllCategories/>
                    </div>
                </div>
            </div>
        </section>
    )
}