import axios from "axios";
import { useEffect, useState } from "react";

function ListSeoul () {

    const [seoulApi, setSeoulApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
     
    useEffect(() => {
        textAPI();
    }, [page]);

    const textAPI = async () => {
        setError(null);
        setLoading(true);
        try {
            const serviceKey = process.env.REACT_APP_serviceKey;
            const res = await axios.get(`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=30&pageNo=${page}&&MobileOS=ETC&MobileApp=seoul&_type=json&contentTypeId=12&areaCode=1&serviceKey=${serviceKey}`);
            
            console.log(res.data.response.body.items.item); 
            const newData = res.data.response.body.items.item.map((list) => ({
                title: list.title,
                firstimage: list.firstimage,
                contentid: list.contentid
              }));
            setSeoulApi((prevData) => [...prevData, ...newData]);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    // Intersection Observer 설정
    const handleObserver = (entries) => {
        const target = entries[0];
        console.log(entries);

        if (target.isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      };
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
          threshold: 0,
        });

        const observerTarget = document.getElementById("observer");

        if (observerTarget) {
          observer.observe(observerTarget);
        }
    }, []);

    const imgOnError = (e) => {
        e.target.src = `/img_none.png`;
    }

    // if (loading) return <div className="h-screen flex flex-col items-center "><div className="mx-0 my-auto"><img src="/Spinner.gif" width="100%"/></div></div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!seoulApi) return null;

    return(
        <div className="mt-20 w-11/12 mx-auto">
            <div className="text-center content-center">
                <div class="grid grid-cols-4 gap-4">
                    {seoulApi &&
                        seoulApi.map((list) => (
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

export default ListSeoul;