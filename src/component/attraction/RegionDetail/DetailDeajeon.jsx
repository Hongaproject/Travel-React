import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailDeajeon () {

    const {idx} = useParams();
    const [daejeonApi, setDaejeonApi] = useState([]);
    const [daejeonApi1, setDaejeonApi1] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const textAPI = async () => {
            setError(null);
            setDaejeonApi(null);
            setDaejeonApi1(null);
            setLoading(true);
        try {
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=daejeon&_type=json&contentId=${idx}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&serviceKey=${serviceKey}`);
            const res1 = await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=daejeon&_type=json&contentId=${idx}&contentTypeId=12&serviceKey=${serviceKey}`)
            console.log(res.data.response.body.items.item); 
            setDaejeonApi(res.data.response.body.items.item);
            setDaejeonApi1(res1.data.response.body.items.item);
        } catch (err) {
            setError(err); 
        }
        setLoading(false);
    }

    useEffect(() => {
        textAPI();
    }, [])

    if (loading) return <div className="h-screen flex flex-col items-center "><div className="mx-0 my-auto"><img src="/Spinner.gif" width="100%"/></div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!daejeonApi) return null;
    if (!daejeonApi1) return null;
    
    return (
        <div className="my-20 w-11/12 mx-auto">
            <h1 className="text-2xl">상세설명</h1>
            {
                daejeonApi.map((v) => (
                    <div key={v.contentid}>
                            <img src={v.firstimage} className="mb-4 rounded-t-xl w-[300px] h-[180px]"/>
                            <h2 className="mb-4">관광지: {v.title}</h2>
                            <h3 className="mb-4">상세 설명 : {v.overview}</h3>
                            <h3 className="mb-4">주소 : {v.addr1}</h3>
                            <h3 className="mb-4">우편번호 : {v.zipcode}</h3>
                            <h3 className="mb-4">홈페이지 : {v.homepage}</h3>
                    </div>
                ))
            }
            {
                daejeonApi1.map((q) => (
                    <div>
                        <h2 className="mb-4">전화번호: {q.infocenter}</h2>
                        <h2 className="mb-4">주차장: {q.parking}</h2>
                        <h3 className="mb-4">휴일: {q.restdate}</h3>
                        <h3 className="mb-4">개방 시간: {q.usetime}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default DetailDeajeon;