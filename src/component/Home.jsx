import { useState } from "react";
import RegionHome from "./RegionHome";

function Home () {
    // 메인 화면이 보여지는 부분
    // justify-around를 활용하여 네비 바처럼 지역 이름 나타내고
    // 서울을 메인으로 보여주며 밑에 가볼만한곳 8곳을 그리드형태도 나타내려고 합니다.

    const region = ['서울', '대전', '광주', '대구', '부산', '울산', '인천', '제주']

    // 이후 HomeGird 컴포넌트 생성하여 지역 이름 마다 idx를 넘겨주어 지역 이름을 클릭시 밑에 8개의 그리드 화면을 보여주려고 함. 
 
    const [click, setClick] = useState(false);

    return(
        <div className="mt-20">
            <div className="flex justify-around">
                {
                    region.map((list, idx) => (
                        <div className="bg-orange-400 border p-7 rounded-full">
                            <button onClick={()=>setClick(!click)}>
                                {list}
                            </button>
                        </div>
                    ))
                }
            </div>
            {!click && <RegionHome />}
        </div>
    );
}

export default Home;