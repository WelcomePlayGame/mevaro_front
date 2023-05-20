import { Link } from "react-router-dom"

export const CategoriesItem = (props) => {


    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card_image">
                    <img src={props.photoUrl} alt={props.title} className="categories_img" />
                    <h2><span>{props.title}</span></h2>
                    <h4>{props.description.slice(0,110)} ...</h4>
                </div>
                <div className="card_action">
                    <Link to={`/categories/${props.url}`} className="btn_categories">Детальніше</Link>
                </div>
            </div>
        </div>


    )
}