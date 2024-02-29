import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegionList from "../RegionList/RegionList";

function RegionHome () {

    const navigator = useNavigate();

    const [seoulApi, setSeoulApi] = useState([]);
    
    const textAPI = async () => {
        try {
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            setSeoulApi(res.data.response.body.items.item);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        textAPI();
    }, [])

    return(
        <div className="mt-20 w-11/12 mx-auto">
            <button onClick={()=> navigator('/RegionList')}>더보기</button>
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {
                        seoulApi.slice(0,8).map((v) => (
                            <div className="p-10 bg-slate-200">
                                {v.title}
                                <img src={v.firstimage} />
                            </div>
                        ))
                    }
                </div>
            </div>  
        </div>
    );
}

export default RegionHome;