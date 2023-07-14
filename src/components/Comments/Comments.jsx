
import { AddComment } from './AddComment';
import { Comment } from './Comment';

export const Comments = (id) => {
  return (
    <section>
      <>
        <AddComment id={id} />
        <Comment />
      </>
    </section>
  );
};
