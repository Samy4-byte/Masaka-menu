import H from "./home.module.css"
import React from "react"
import Column from "../../components/images/JPG/masaka-column.jpg"
import Nav from "../../components/nav/index"
import Logo from "../../components/images/JPG/Masaka-logo-white-red.png"


const Home = () => {
    return(
        <div className={H.container}>
            {/* <div className={H.logo}>
                <img className={H.column} src={Column} alt="#" />
            </div> */}
            <div className={H.box}>
            <img className={H.logo_img} src={Logo} alt="" />
            <h2 className="font_medium">ДОБРО ПОЖАЛОВАТЬ В MASAKA SUSHI!</h2>
            <p className="font_small">ЯПОНСКАЯ КУХНЯ, КАК И КУЛЬТУРА, СИЛЬНО ОТЛИЧАЕТСЯ ОТ ПРИВЫЧНОЙ БЛАГОДАРЯ ПОПУЛЯРИЗАЦИИ СУШИ И РОЛЛОВ НАМ СТАЛА ИЗВЕСТНА БОГАТАЯ ВКУСОВАЯ ГАММА ДЕЛИКАТЕСОВ СТРАНЫ ВОСХОДЯЩЕГО СОЛНЦА</p>
            <p className="font_small">MASAKA - ЭТО О КУЛЬТУРЕ ЕДЫ, ФИЛОСОФИИ МИНИМАЛИЗМА И ВЫСОКОМ МАСТЕРСТВЕ.</p>
            <p className="font_small">НАШИ ПОВАРА ГОТОВЯТ ИСКЛЮЧИТЕЛЬНО НА ОТКРЫТОЙ КУХНЕ.
            ЭТО НЕ ТОЛЬКО ГАРАНТИЯ КАЧЕСТВЕННОЙ РАБОТЫ, НО И ВОЗМОЖНОСТЬ УВИДЕТЬ ПРОЦЕСС СОЗДАНИЯ ВАШИХ БЛЮД.</p>
            <p className="font_small">ПЕРВЫЙ СУШИ КАЙТЕН В БИШКЕКЕ.</p>
            <p className="font_small">ЗНАКОМЬТЕСЬ С ОДНИМ ИЗ ОСОБЫХ ВИДОВ ЯПОНСКИХ РЕСТОРАНОВІ
            КАЙТЕН - ЭТО ЛЕНТОЧНЫЙ КОНВЕЙЕР, НА КОТОРОМ ПРЕДОСТАВЛЕНЫ ТАРЕЛКИ С РАЗНЫМИ СУШИ И РОЛЛАМИ.
            ВЫ ВСЕГДА МОЖЕТЕ ВЗЯТЬ УЖЕ ГОТОВОЕ БЛЮДО.</p>
            <p className="font_small">МЫ ПОСТАРАЛИСЬ ВОССОЗДАТЬ ВЕСЬ ДУХ ЯПОНСКОЙ КУЛЬТУРЫ, ВСЕ ЛАКОМСТВА И АРОМАТЫ С НОТКАМИ ИСТОРИЙ</p>
            <p className="font_small">• СЫДЫКОВА, 156/ ТОГОЛОК МОЛДО 9 10 МИКРОРАЙОН, 33</p>  
            <div className={H.line}>
            <Nav />
            </div>
            </div>
            </div>

    )
}
export default Home