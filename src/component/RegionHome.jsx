import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegionHome () {

    const navigator = useNavigate();

    useEffect(() => {
        const textAPI = async () => {
            try {
                const res = await axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=Y5E8uig3nGWrvqNxqonJjqsiPsg1LID7ECIX3Xbg70a7BSYoRJq5O2VITp8IhRjCQr6mvfXjWuyegkTT0X7YkA%3D%3D');
                console.log(res.data);
                console.log(res.data.response.body.items.item); 

            } catch (err) {
                console.log(err);
            }
        }

        textAPI();
    }, [])

    useEffect(() => {
        axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=Y5E8uig3nGWrvqNxqonJjqsiPsg1LID7ECIX3Xbg70a7BSYoRJq5O2VITp8IhRjCQr6mvfXjWuyegkTT0X7YkA%3D%3D')
        .then((res) => {
            console.log(res.data.response.body.items.item); 

        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return(
        <div className="mt-40 w-11/12 mx-auto">
            <button onClick={()=> navigator('/region-list')}>더보기</button>
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    <div className="p-10 bg-slate-200">01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div className="p-10 bg-slate-200">05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                    <div className="p-10 bg-slate-200">09</div>
                </div>
            </div>
            <div>
    
            </div>
        </div>
    );
}

export default RegionHome;