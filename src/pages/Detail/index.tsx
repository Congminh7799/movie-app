import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    return <>
    {id}
    </>
};

export default Detail;
