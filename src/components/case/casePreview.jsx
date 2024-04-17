// eslint-disable-next-line react/prop-types
export default function CasePreview({previewImage}) {
    return (
        <div className={"w-full h-[720px] flex justify-center items-center"}>
            <img className={"max-h-[490px]"} src={previewImage} alt=""/>
        </div>
    );
}