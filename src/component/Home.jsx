import { useState } from "react";
import RegionHome from "./RegionHomeAPI/RegionHome";
import DaejeonHome from "./RegionHomeAPI/DaejeonHome";
import GwangjuHome from "./RegionHomeAPI/GwangjuHome";
import DaeguHome from "./RegionHomeAPI/DaeguHome";
import BusanHome from "./RegionHomeAPI/BusanHome";
import UlsanHome from "./RegionHomeAPI/UlsanHome";
import IncheonHome from "./RegionHomeAPI/IncheonHome";
import JejuHome from "./RegionHomeAPI/JejuHome";



function Home () {
    // 메인 화면이 보여지는 부분
    // justify-around를 활용하여 네비 바처럼 지역 이름 나타내고
    // 서울을 메인으로 보여주며 밑에 가볼만한곳 8곳을 그리드형태도 나타내려고 합니다.
    
    const region = [
        {title: '서울', id: 0},
        {title: '대전', id: 1},
        {title: '광주', id: 2},
        {title: '대구', id: 3},
        {title: '부산', id: 4},
        {title: '울산', id: 5},
        {title: '인천', id: 6},
        {title: '제주', id: 7},
    ];
    
    const [regionList, setRegionList] = useState();

    const handleClickRegion = (e) => {
        const {title} = e.target;
        setRegionList(title);   
    }

    const selectRegionCP = {
        서울: <RegionHome />,
        대전: <DaejeonHome />,
        광주: <GwangjuHome />,
        대구: <DaeguHome />,
        부산: <BusanHome />,
        울산: <UlsanHome />,
        인천: <IncheonHome />,
        제주: <JejuHome />,
    }

    // 이후 HomeGird 컴포넌트 생성하여 지역 이름 마다 idx를 넘겨주어 지역 이름을 클릭시 밑에 8개의 그리드 화면을 보여주려고 함. 
    
    return(
        <div className="mt-20">
            <div className="flex justify-around">
                {
                    region.map((rlist) => (
                            <div className="bg-orange-400 border p-7 rounded-full">
                                <button onClick={handleClickRegion} title={rlist.title} key={rlist.id}>
                                    {rlist.title}
                                </button>
                            </div>
                    ))
                }
            </div>
            {regionList ? <div>{selectRegionCP[regionList]}</div> : <RegionHome />}
        </div>
    );
}

export default Home;