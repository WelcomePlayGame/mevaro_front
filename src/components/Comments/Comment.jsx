
export const Comment = (props) => {

    const {name, text} = props;

    return (
        <section>
            <p>{name ? "grg" : "efe"}</p>
            <p>{text}</p>
        </section>
    )
}