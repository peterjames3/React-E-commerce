import { useSearchParams } from "react-router-dom";

export const useURLID = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    return id;
}
