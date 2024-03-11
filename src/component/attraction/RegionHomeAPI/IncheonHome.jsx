import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function IncheonHome () {

    const navigator = useNavigate();

    const [incheonApi, setIncheonApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const textAPI = async () => {
        try {
            setError(null);
            setIncheonApi(null);
            setLoading(true);
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=incheon&_type=json&contentTypeId=12&areaCode=2&serviceKey=${serviceKey}`);
            // console.log(res.data.response.body.items.item); 
            setIncheonApi(res.data.response.body.items.item);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        textAPI();
    }, [])
    
    const imgOnError = (e) => {
        e.target.src = `/img_none.png`;
    }

    if (loading) return <div className="h-screen flex flex-col items-center "><div className="mx-0 my-auto"><img src="/Spinner.gif" width="100%"/></div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!incheonApi) return null;

    return(
        <div className="mt-20 w-11/12 mx-auto">
            <button onClick={()=> navigator('/RegionList')}>더보기</button>
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {
                        incheonApi.slice(0,8).map((v) => (
                            <Link to={`/DetailInchoen/${v.contentid}`} >
                                <h2 className="mb-4">{v.title}</h2>
                                <img src={v.firstimage} className="mb-4 rounded-t-xl w-[300px] h-[180px]" onError={imgOnError}/>
                                <h3>{v.addr1}</h3>
                                id: {v.contentid}
                            </Link>
                        ))
                    }
                </div>
            </div>  
        </div>
    );
}

export default IncheonHome;