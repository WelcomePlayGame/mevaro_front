import {StarRating } from '../rating/StarRating'

export const AddComment = (props) => {

    const {id} = props;



    return (
        <div className="container">
            <div className="row">
            <div className="addComment">
                 <>
                <StarRating/>
                </>
            <form className='addComment_form'>

            <div className="addCommentBox">
            <input
                type="text"
                name="name"
                placeholder="Як Вас звати?"
                className="addCommentBox_input"
            />
            <input
                type="text"
                name="phone"
                placeholder="Ваш мобильний номер?"
                className="addCommentBox_input"
                />
            <textarea
                type="text"
                name="comment"
                placeholder="Що написати?"
                className="addCommentBox_input centeredPlaceholder"
            />
            </div>
            <button className="addCommentBox_btn">Залишити Відгук</button>
        </form>
        <hr className='addComment_hr' />
            </div>
            </div>
        </div>
    )
}