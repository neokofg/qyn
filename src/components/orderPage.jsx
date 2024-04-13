import React, {useState} from "react";

export default function OrderPage() {

    function Matebal() {
        const [selectedRadio, setSelectedRadio] = useState('100');
        const items = [
            {key: '100', value: 'Менее 100 тыс'},
            {key: '300', value: '100 - 300 тыс'},
            {key: '500', value: '300 - 500 тыс'},
            {key: '800', value: '500 - 800 тыс'},
            {key: '1m', value: '1 - 2 млн'},
            {key: '2m', value: '2 - 3 млн'},
            {key: '3m', value: 'от 3 млн'}
        ]

        return (
            <div className={"flex flex-wrap gap-2"}>
                {items.map((value) => (
                    <React.Fragment key={value.key}>
                        <input
                            required
                            checked={selectedRadio === '100'}
                            className="hidden radio-custom"
                            type="radio"
                            id={value.key}
                            name="budget[]"
                            onChange={() => setSelectedRadio(value.key)}
                        />
                        <label
                            htmlFor={value.key}
                            className={`border rounded-[36px] py-2 px-3 ${
                                selectedRadio === value.key ? 'bg-[#BEC2BB] text-white' : ''
                            }`}
                        >
                            {/* Отображаемые диапазоны значений */}
                            {value.value}
                        </label>
                    </React.Fragment>
                ))}
            </div>
        );
    }

    return (
        <div className={"container mx-auto pb-40"}>
            <h1 className={"text-8xl py-32"}>Оставьте заявку</h1>
            <div className={"grid grid-cols-2"} style={{gap: "7rem"}}>
                <div className={"col-span-1 w-full bg-[#E9E9E9] h-[280px]"}>

                </div>
                <div className={"col-span-1 w-full"}>
                    <form action="">
                        <div className={"flex flex-col w-[512px]"}>
                            <p className={"text-[24px] mb-5"}>Контактные данные</p>
                            <input type="text" className={"border-b-[1px] py-3"} required placeholder={"Как вас зовут?"}/>
                            <input type="text" className={"border-b-[1px] py-3"} required placeholder={"Почта, телефон или мессенджер"}/>
                            <input type="text" className={"border-b-[1px] py-3"} required placeholder={"Компания"}/>
                        </div>
                        <div className={"w-[512px]"}>
                            <p className={"text-[24px] mt-10 mb-5"}>Услуга</p>
                            <div className={"flex gap-5"}>
                                <select required className={"w-full py-3 !border-b-[#EAEAEA] !border-b"} style={{border: "1px solid white"}}>
                                    <option>Сфера</option>
                                    <option>IT</option>
                                </select>
                                <select required className={"w-full py-3 !border-b-[#EAEAEA] !border-b"} style={{border: "1px solid white"}}>
                                    <option>Направление</option>
                                    <option>Developing</option>
                                </select>
                            </div>
                        </div>
                        <div className={"w-[512px]"}>
                            <p className={"text-[24px] mt-10 mb-5"}>Бюджет</p>
                            <div className={"flex flex-wrap gap-2"}>
                                <Matebal />
                            </div>
                        </div>
                        <div className={"w-[512px]"}>
                            <p className={"text-[24px] mt-10"}>Описание проекта</p>
                            <textarea required className={"mt-5 text-[16px] w-full pt-3 pb-8 border-b border-[#EAEAEA] text-[#BEC2BB]"}>Кратко опишите задачу </textarea>
                        </div>
                        <button className={"bg-[#BEC2BB] text-white w-[133px] h-[54px] text-[18px] mt-10"}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}