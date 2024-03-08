import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListBusan () {

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
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=8&pageNo=1&MobileOS=ETC&MobileApp=%EC%84%9C%EC%9A%B8&_type=json&contentTypeId=12&areaCode=1&serviceKey=${serviceKey}`);
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

    const imgOnError = (e) => {
        e.target.src = `/img_none.png`;
    }

    // if (loading) return <div className="h-screen flex flex-col items-center "><div className="mx-0 my-auto"><img src="/Spinner.gif" width="100%"/></div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!busanApi) return null;
    return(
        <div className="mt-20 w-11/12 mx-auto">
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {busanApi &&
                        busanApi.map((list) => (
                        <div key={list.contentid} >
                            <p className="mb-4">{list.title}</p>
                            <img src={list.firstimage} className="rounded-t-xl w-[700px] h-[250px] object-cover" onError={imgOnError}/>
                        </div>
                    ))}
                    <div id="observer" className="h-3"></div>
                </div>
                    {loading && 
                        <div className="h-screen flex flex-col justify-center items-center ">
                            <div className="mx-0 my-auto">
                                <img src="/Spinner.gif" width="100%" />
                            </div>
                        </div>
                    }
            </div>  
        </div>
    );
}

export default ListBusan;