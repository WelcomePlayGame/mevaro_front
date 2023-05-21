
import { AddComment } from './AddComment';
import { Comment } from './Comment';

export const Comments = ({ comments = [] }, props) => {
  return (
    <section>
      <>
        <AddComment id={props.id} />
        <Comment />
      </>
    </section>
  );
};
