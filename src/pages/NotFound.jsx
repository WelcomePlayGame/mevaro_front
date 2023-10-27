import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export const NotFound = () => {
  const navigate = useNavigate();

  // Установка кода состояния 404 и отображение сообщения
  navigate("/", { state: { notFound: true } });
  return (
    <>
      <section className="not_found">
        <div>
          <Helmet>
            <title>Сторінка не знайдена</title>
            <meta
              name="description"
              content="Сторінка не знайдена. Похибка 404"
            />
            <meta name="robots" content="noindex" />
            <link rel="canonical" href="https://mevaro.kiev.ua/404" />
          </Helmet>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="box_404">
                <h2 className="box_404_h2">
                  Упс...Сторінка не знайдена. Помилка 404
                </h2>
                <h3 className="box_404_h3">
                  Ви маєте можливість відвідати наступні посилання
                </h3>
                <nav className="box_404_menu">
                  <ul className="box_404_ul">
                    <li className="box_404_li">
                      <Link to="/" className="box_404_a">
                        Перетяжка меблів
                      </Link>
                    </li>
                    <li className="box_404_li">
                      <Link to="/categories" className="box_404_a">
                        Каталог Тканин
                      </Link>
                    </li>
                    <li className="box_404_li"></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
