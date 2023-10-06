export const Breadcrumbs = ({ crumbs, breadcrumps_a }) => {
  return (
    <section>
      <div className="breadcumps">
        {crumbs.map((crumb, index) => {
          return (
            <span key={index}>
              <a href={crumb.url} className={breadcrumps_a}>
                {crumb.label}
              </a>
              {index < crumbs.length - 1 && <span> &gt; </span>}
            </span>
          );
        })}
      </div>
    </section>
  );
};
