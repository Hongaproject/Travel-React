import { useParams } from "react-router-dom";

function DetailInchoen () {
    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailInchoen;