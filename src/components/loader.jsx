// eslint-disable-next-line react/prop-types
export default function Loader({ progress }) {
    return (
        <div className="loader-container">
            <div className="background">
                <div className="number" style={{bottom: `${progress}%`}}>{progress}</div>
                <div className="cover" style={{height: `${progress}%`}}></div>
            </div>
        </div>
    );
}