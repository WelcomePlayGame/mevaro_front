import { Body } from '../components/Body'
import { Point } from '../components/Point'
import { OurWorks } from '../components/OurWorks'
import { Comment } from '../components/Comment'
import { Slider } from '../components/Slider/Slider'
import { Helmet }from 'react-helmet';


export const Main = () => {



    return (
        <>
            <div>
                <Helmet>
                    <title>【Перетяжка м'яких меблів №1️⃣】-Безкоштовна Доставка Київ</title>
                    <meta name="description" content="1̲0̲0̲%̲ ̲Якість! ᐈ Перетяжка м'яких меблів⭐️.Безкоштовна доставка по місту Київ. Широкий вибір меблевої тканини в нашому каталозі." />
                    <link rel="canonical" href="https://mevaro.kiev.ua/" /> 
                </Helmet>
            </div>
            <Body />
            <Point />
            <OurWorks />
            <Comment />
            <Slider />
        </>
    )
}