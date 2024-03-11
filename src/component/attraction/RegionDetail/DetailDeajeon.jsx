import { useParams } from "react-router-dom";

function DetailDeajeon () {

    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailDeajeon;