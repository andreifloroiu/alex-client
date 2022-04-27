import { useRouter } from "next/router";
import { getIsCSOProfileCreated } from "../lib/firebase";

const SetupProfileRedirect = () => {
    const router = useRouter()
    getIsCSOProfileCreated()
        .then((data) => { if (!data) return router.push('init/') })
        .catch((e) => { 
            console.error(JSON.stringify(e, null, 2))
            if (e.code == 'permission-denied') {
                return router.push('enter/')
            }
        })
    return (null)
}

export default SetupProfileRedirect