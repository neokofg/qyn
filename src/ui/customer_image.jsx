// eslint-disable-next-line react/prop-types
export default function CustomerImage({ img,alt }) {
    return (
        <img className={"max-w-[220px] h-[62px] mr-10"} src={img} alt={alt}/>
    );
}