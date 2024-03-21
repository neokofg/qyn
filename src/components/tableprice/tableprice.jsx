import Price from "./price.jsx";

export default function Tableprice() {
    return (
        <div>
        <div className={"mt-28 container mx-auto"}>
            <h2 className={"italic text-8xl pb-20 w-2/5"}>Мы работаем по часам</h2>
            <div className="radioGroup">
                <input type="radio" name="options" id="option1"/>
                <label form="option1">Дизайн</label>

                <input type="radio" name="options" id="option2"/>
                <label form="option2">Разработка</label>

                <input type="radio" name="options" id="option3"/>
                <label form="option3">Маркетинг</label>
            </div>
        </div>
            <Price title={"Арт-дирекшен"} hourprice={2200} dollars={24} description={"Арт директор занимается руководством команды, ведёт проект и финально защищает"}/>
            <Price title={"UX/UI дизайнер"} hourprice={1200} dollars={14} description={"Дизайнер интерфейсов, разрабатывает"}/>
            <Price title={"Product дизайнер"} hourprice={1500} dollars={16} description={"Арт директор занимается руководством команды, ведёт проект и финальное защищает"}/>
            <Price title={"Графический дизайнер"} hourprice={1700} dollars={18} description={"Арт директор занимается руководством команды, ведёт проект и финально защищает"}/>
            <Price title={"Motion дизайнер"} hourprice={1900} dollars={20} description={"Арт директор занимается руководством команды, ведёт проект и финально защищает"}/>
        </div>
    );
}