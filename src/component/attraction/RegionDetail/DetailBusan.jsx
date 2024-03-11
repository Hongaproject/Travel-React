import { useParams } from "react-router-dom";

function DetailBusan () {
    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailBusan;