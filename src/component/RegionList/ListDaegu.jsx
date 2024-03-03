import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListDaegu () {

    const navigator = useNavigate();

    const [daeguApi, setDaeguApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const textAPI = async () => {
        try {
            setError(null);
            setDaeguApi(null);
            setLoading(true);
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            setDaeguApi(res.data.response.body.items.item);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        textAPI();
    }, [])

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!daeguApi) return null;
    return(
        <div className="mt-20 w-11/12 mx-auto">
            <button onClick={()=> navigator('/RegionList')}>더보기</button>
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {
                        daeguApi.map((v) => (
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

export default ListDaegu;