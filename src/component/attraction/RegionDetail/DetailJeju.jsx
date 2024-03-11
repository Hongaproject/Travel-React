import { useParams } from "react-router-dom";

function DetailJeju () {
    const {idx} = useParams();

    return (
        <div>
            {idx}
        </div>
    );
}

export default DetailJeju;