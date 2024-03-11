import { useParams } from "react-router-dom";

function DetailGwangju () {
    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailGwangju;