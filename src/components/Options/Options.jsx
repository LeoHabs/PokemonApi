import React, { useState } from "react";
import { OptionsContainer, OptionShower, OtherOptions , OptionButton} from "./styled-components";
import InvisNet from "../InvisNet";



function Options({handler , list , current}) {
    function outClose() {
        if(isOpen){
            setIsOpen(false);
        };
    };
    
    const [isOpen, setIsOpen] = useState(false);
    return <>
    <InvisNet handler={outClose}></InvisNet>
    <OptionsContainer>
    <OptionShower onClick={()=>setIsOpen(isOpen?false:true)}>{list[current]?.name.charAt(0).toUpperCase()+list[current]?.name.slice(1)}</OptionShower>
    <OtherOptions show={isOpen}>
        {list.map((e,i) => <OptionButton key={i} onClick={()=>handler(i)}>{e?.name.charAt(0).toUpperCase()+e?.name.slice(1)}</OptionButton>)}
    </OtherOptions>
    </OptionsContainer>
    </>
};



export default Options
