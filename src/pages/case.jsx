import Header from "../components/.welcome/header.jsx";
import {useParams} from "react-router-dom";
import CaseStart from "../components/case/caseStart.jsx";
import CaseAbout from "../components/case/caseAbout.jsx";
import CasePreview from "../components/case/casePreview.jsx";
import CaseText from "../components/case/caseText.jsx";
import CasePhotos from "../components/case/casePhotos.jsx";
import CaseDetail from "../components/case/caseDetail.jsx";
import CaseRandom from "../components/case/caseRandom.jsx";
import Footer from "../components/footer.jsx";
import cases from "../assets/caseDatas.js";
import {div} from "three/examples/jsm/nodes/math/OperatorNode.js";

export default function Case() {
    const {caseId} = useParams();
    const caseData = cases[caseId];
    if(!caseData) {
        return (
            <div>
                <Header/>
                <div className={"w-full text-8xl py-20 flex items-center justify-center"}>
                    Кейс не найден
                </div>
            </div>
        );
    }
    return (
        <div className={"bg-[#E9E9E9]"}>
            <Header/>
            <CaseStart title={caseData.title} text={caseData.start_text}/>
            <CaseAbout status={caseData.status} company={caseData.company} platform={caseData.platform} service={caseData.service}/>
            <CasePreview previewImage={caseData.previewImage}/>
            <CaseText text={caseData.text}/>
            <CasePhotos photo1={caseData.photo1} photo2={caseData.photo2} photo3={caseData.photo3} photo4={caseData.photo4} photo5={caseData.photo5}/>
            <CaseText text={caseData.text}/>
            <CasePhotos photo1={caseData.photo1} photo2={caseData.photo2} photo3={caseData.photo3} photo4={caseData.photo4} photo5={caseData.photo5}/>
            <CaseDetail detail_text={caseData.detail_text} detail_photo={caseData.detail_photo}/>
            <CasePhotos photo1={caseData.photo1} photo2={caseData.photo2} photo3={caseData.photo3} photo4={caseData.photo4} photo5={caseData.photo5}/>
            <CaseText text={caseData.text}/>
            <CaseRandom/>
            <Footer/>
        </div>
    );
}