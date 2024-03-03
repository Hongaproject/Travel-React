import axios from "axios";
import { useEffect, useState } from "react";
import ListSeoul from "./ListSeoul";

function RegionListMain () {

    // axios로 받아온 데이터 select option에 넣어서 데이터 요청작업 정보 찾는 중
    // const [selected, setSelected] = useState("기본 값");
   

    // const selectList = [
    //     { value: "default", name: "기본 값" },
    //     { value: "skill", name: "기술" },
    //     { value: "career", name: "커리어" },
    //   ];
    
    // const handleSelect = (e) => {
    //     setSelected(e.target.value);
    // };

    const [index, setIndex] = useState("0");
    const onSelect = (event) => {
        setIndex(event.target.value);
    };

    return(
        <div>
            {/* <div>
                <select onChange={handleSelect} value={selected}>
                    {selectList.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div> */}
            <select value={index} onChange={onSelect}>
                <option value="0">기본 값</option>
                <option value="1">서울</option>
                <option value="2">대전</option>
            </select>
            {index === "1" ? <ListSeoul /> : null}
        </div>
    );
}

export default RegionListMain;