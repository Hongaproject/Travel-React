import axios from "axios";
import { useEffect, useState } from "react";
import ListSeoul from "./ListSeoul";
import ListDaejeon from "./ListDaejeon";
import ListGwangju from "./ListGwangju";
import ListDaegu from "./ListDaegu";
import ListBusan from "./ListBusan";
import ListUlsan from "./ListUlsan";
import ListIncheon from "./ListIncheon";
import ListJeju from "./ListJeju";

function RegionListMain () {

    // axios로 받아온 데이터 select option에 넣어서 데이터 요청작업 정보 찾는 중
    const selectList = [
        { value: "1", name: "서울" },
        { value: "2", name: "대전" },
        { value: "3", name: "광주" },
        { value: "4", name: "대구" },
        { value: "5", name: "부산" },
        { value: "6", name: "울산" },
        { value: "7", name: "인천" },
        { value: "8", name: "제주" },
      ];
    const [selected, setSelected] = useState("1"); // value가 1이 서울이라 첫 화면서 서울을 나타내기 위해 1로 지정
    
    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

   
    return(
        <div>
            <div>
                <select onChange={handleSelect} value={selected}>
                    {selectList.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            {selected === "1" ? <ListSeoul /> : null}
            {selected === "2" ? <ListDaejeon /> : null}
            {selected === "3" ? <ListGwangju /> : null}
            {selected === "4" ? <ListDaegu /> : null}
            {selected === "5" ? <ListBusan /> : null}
            {selected === "6" ? <ListUlsan /> : null}
            {selected === "7" ? <ListIncheon /> : null}
            {selected === "8" ? <ListJeju /> : null}
            
        </div>
    );
}

export default RegionListMain;