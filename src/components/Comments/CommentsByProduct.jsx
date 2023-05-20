import { useEffect, useState } from "react"

export const CommentsByProduct = () => {

    const [comments, setComments] = useState(["Burgas"]);
    useEffect();




    return (
        <section>
            <comments comments = {comments}/>
        </section>
    )
}