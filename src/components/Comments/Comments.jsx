import {Comment} from './Comment'
export const Comments = ({comments = []})=> {






    return (

        <section>
            {
                comments.map((el) => (
                    <Comment id={el.id} {...el} />
                ))
            }
        </section>
    )
}