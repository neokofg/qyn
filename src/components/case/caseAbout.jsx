// eslint-disable-next-line react/prop-types
export default function CaseAbout({status, company, platform, service}) {

    function Status() {
        if(window.outerWidth > 768) {
            return (
                <div>
                    <p className={"text-base opacity-30"}>Статус</p>
                    <p className={"text-xl"}>{status}</p>
                </div>
            );
        }
    }

    return (
        <div className={"w-full bg-white flex justify-between items-center pt-10 md:pt-24 pb-10 md:pb-32 px-5 md:px-24"}>
        <Status />
        <div className={"flex flex-wrap gap-x-24 md:gap-x-0 gap-y-10 md:gap-y-0 md:justify-between items-center"}>
                <div className={"md:mr-[6.7rem]"}>
                    <p className={"text-base opacity-30"}>Компания</p>
                    <p className={"text-xl"}>{company}</p>
                </div>
                <div className={"md:mr-[6.7rem]"}>
                    <p className={"text-base opacity-30"}>Платформа</p>
                    <p className={"text-xl"}>{platform}</p>
                </div>
                <div className={"md:mr-[6.6rem]"}>
                    <p className={"text-base opacity-30"}>Услуга</p>
                    <p className={"text-xl"}>{service}</p>
                </div>
            </div>
        </div>
    );
}