import { OuterCard, StatDisplayer, StatOuterBox, StatSpecs, TypeDiv, MainStats, BottomSpecs } from "./styled-components";

function getColor(type) {
    const themes = {
        WATER: "linear-gradient(180deg,rgba(51, 135, 187, 1) 0%,rgba(47, 217, 194, 1) 100%);",
        GRASS: "linear-gradient(180deg,rgba(14, 164, 9, 1) 0%,rgba(118, 255, 162, 1) 100%);",
        FIRE: "linear-gradient(180deg,rgba(164, 9, 9, 1) 0%,rgba(255, 220, 118, 1) 100%);",
        NORMAL: "linear-gradient(180deg,rgba(91, 87, 84, 1) 0%,rgba(255, 255, 255, 1) 100%);",
        ELECTRIC: "background: linear-gradient(180deg, rgba(254,240,0,1) 59%, rgba(255,255,255,1) 100%);",
        GROUND: "linear-gradient(0deg, rgba(91,69,25,1) 0%, rgba(222,158,22,1) 100%);",
        POISON: "linear-gradient(0deg, rgba(154,41,158,1) 0%, rgba(215,22,222,1) 32%);",
        BUG: "linear-gradient(180deg, rgba(50,255,0,1) 0%, rgba(27,134,101,1) 100%)"
    }
    return themes[type]
}

function PokeCard({ pokemon }) {
    const {name, type , sprite , hp , ability , attack , defense , specability , specattack , specdefense , speed , height , weight} = pokemon;
    return <>
        <OuterCard bgColor={getColor(type)}>
            <img src={sprite} alt="Pokemon sprite"></img>
            <TypeDiv>{type}</TypeDiv>
            <StatOuterBox>
                <h3>{name.toUpperCase()}</h3>
                <MainStats>
                    <StatDisplayer textSide="right">
                        <b><p>HP:</p></b>
                        <b><p>ATTACK:</p></b>
                        <b><p>DEFENSE:</p></b>
                        <b><p>SPECIAL ATTACK:</p></b>
                        <b><p>SPECIAL DEFENSE:</p></b>
                        <b><p>SPEED:</p></b>
                        <b><p>HEIGHT:</p></b>
                        <b><p>WEIGHT:</p></b>
                    </StatDisplayer>
                    <StatDisplayer textSide="left">
                        <p>{hp}</p>
                        <p>{attack}</p>
                        <p>{defense}</p>
                        <p>{specattack}</p>
                        <p>{specdefense}</p>
                        <p>{speed} m/s</p>
                        <p>{height} feet</p>
                        <p>{weight} pounds</p>
                    </StatDisplayer>
                </MainStats>
                <BottomSpecs>
                    <StatSpecs>
                        <b><p>Ability:</p></b>
                        <p>{ability.charAt(0).toUpperCase()+ability.slice(1)}</p>
                    </StatSpecs>
                    <StatSpecs>
                       <b><p>Hidden Ability:</p></b>
                        <p>{specability.charAt(0).toUpperCase()+specability.slice(1)}</p>
                    </StatSpecs>
                </BottomSpecs>
            </StatOuterBox>
        </OuterCard>
    </>
}

export default PokeCard;