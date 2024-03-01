import axios from "axios";
import { useEffect, useState } from "react";

function RegionList () {

    const [seoulApi, setSeoulApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
     
    const textAPI = async () => {
        try {
            setError(null);
            setSeoulApi(null);
            setLoading(true);
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            setSeoulApi(res.data.response.body.items.item);
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
    if (!seoulApi) return null;

    return(
        <div>
            <div>
                <form action="">
                    <select name="region">
                        <option value="서울">서울</option>
                        <option value="대전">대전</option>
                        <option value="광주">광주</option>
                        <option value="대구">대구</option>
                        <option value="부산">부산</option>
                        <option value="울산">울산</option>
                        <option value="인천">인천</option>
                        <option value="제주">제주</option>
                    </select>
                </form>
            </div>
            <div className="mt-20 w-11/12 mx-auto">
                <div className="text-center content-center">
                    <div class="grid grid-cols-4 gap-4">
                        {
                            seoulApi.map((v) => (
                                <div className="p-10 bg-slate-200">
                                    {v.title}
                                    <img src={v.firstimage} />
                                </div>
                            ))
                        }
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default RegionList;