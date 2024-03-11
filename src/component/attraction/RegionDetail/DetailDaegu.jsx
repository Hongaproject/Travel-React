import { useParams } from "react-router-dom";

function DetailDaegu () {
    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailDaegu;