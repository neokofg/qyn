// eslint-disable-next-line react/prop-types
export default function ShowcaseImage({ img,alt }) {
    return (
        <img className={"col-span-1 row-span-1"} src={img} alt={alt}/>
    );
}