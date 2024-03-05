import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BusanHome () {

    const navigator = useNavigate();

    const [busanApi, setBusanApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const textAPI = async () => {
        try {
            setError(null);
            setBusanApi(null);
            setLoading(true);
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=busan&_type=json&contentTypeId=12&areaCode=6&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            setBusanApi(res.data.response.body.items.item);
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
    if (!busanApi) return null;
    return(
        <div className="mt-20 w-11/12 mx-auto">
            <button onClick={()=> navigator('/RegionList')}>더보기</button>
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {
                        busanApi.slice(0,8).map((v) => (
                            <div className="p-10 bg-slate-200">
                                <h2 className="mb-4">{v.title}</h2>
                                <img src={v.firstimage} className="mb-4"/>
                                <h3>{v.addr1}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>  
        </div>
    );
}

export default BusanHome;