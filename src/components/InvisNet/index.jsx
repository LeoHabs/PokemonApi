import { InvisibleNet } from "./styled-components"

function InvisNet({ handler }) {
    return <InvisibleNet onClick={() => {
        handler()
    }
    }></InvisibleNet>
}

export default InvisNet