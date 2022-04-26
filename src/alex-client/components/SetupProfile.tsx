import { useRouter } from "next/router";
import { getIsCSOProfileCreated } from "../lib/firebase";

const SetupProfile = () => {
    debugger;
    const router = useRouter()
    getIsCSOProfileCreated()
        .then((data) => { if (!data) return router.push('init/'); })
        .catch((e) => { console.error(e) })
    return (null)
}

export default SetupProfile