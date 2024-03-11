import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function DetailSeoul () {

    const {idx} = useParams();
    const [seoulApi, setSeoulApi] = useState([]);
    const [seoulApi1, setSeoulApi1] = useState([]);

    const textAPI = async () => {
        try {
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=seoul&_type=json&contentId=${idx}&contentTypeId=12&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&overviewYN=Y&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            const res1 = await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=seoul&_type=json&contentId=${idx}&&contentTypeId=12&serviceKey=${serviceKey}`);
            setSeoulApi(res.data.response.body.items.item);
            setSeoulApi1(res1.data.response.body.items.item);
        } catch (err) {
            console.log(err); 
        }
    }

    useEffect(() => {
        textAPI();
    }, [])

    return (
        <div>
            <h1 className="text-2xl">상세설명</h1>
            {
                seoulApi.map((v) => (
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
                seoulApi1.map((q) => (
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

export default DetailSeoul;