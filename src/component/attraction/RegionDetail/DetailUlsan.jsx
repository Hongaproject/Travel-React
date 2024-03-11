import { useParams } from "react-router-dom";

function DetailUlsan () {

    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailUlsan;