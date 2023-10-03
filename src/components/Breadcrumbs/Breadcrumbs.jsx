export const Breadcrumbs = ({ crumbs }) => {
  return (
    <section>
      <div className="breadcumps">
        {crumbs.map((crumb, index) => {
          return (
            <span key={index}>
              <a href={crumb.url}>{crumb.label}</a>
              {index < crumbs.length - 1 && <span> &gt; </span>}
            </span>
          );
        })}
      </div>
    </section>
  );
};
