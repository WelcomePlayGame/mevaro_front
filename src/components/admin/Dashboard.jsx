import { Helmet } from 'react-helmet';

export const Dashboard = () => {

    return (

        <section>
            <div>
                <Helmet>
                    <title>Загальна Інформація</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
            <h3>Dashboard</h3>
        </section>

    )
}