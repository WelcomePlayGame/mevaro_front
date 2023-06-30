import { Helmet } from 'react-helmet';
import { TabDashboard } from './TabDashboard';

export const Dashboard = () => {

    return (

        <section>
            <div>
                <Helmet>
                    <title>Загальна Інформація</title>
                    <meta name="description" content="Місце роботи для адміну сайта" />
                </Helmet>
            </div>
            <><TabDashboard/></>
        </section>

    )
}