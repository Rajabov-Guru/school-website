import React, {FC} from 'react';
import {ISection} from "./Start";
import styled, {css} from "styled-components";
import AdvantageCard from "../../../components/partials/cards/AdvantageCard";
import {Container} from "@mui/material";
import {IAdvantage} from "../../../types/mainTypes";

const AdvantageSection = styled.div<ISection>`
  padding: 50px 0px;
  background-image: ${props=>`url(${props.url})`};
  background-size: cover;
  color: white;
  text-align: center;

  &>div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    row-gap: 20px;
    column-gap: 15px;
  }
  
  ${props=>props.repeat && css`
    background-size: auto auto;
    background-repeat: repeat;
  `};
  
  @media(max-width:950px){
    &>div{
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
    }
  }

  @media(max-width:732px){
    &>div{
      grid-template-columns: 1fr;
    }
  }
`

interface IAdvantagesSection extends ISection{
    advantages:IAdvantage[];
}

const Advantages:FC<IAdvantagesSection> = (props) => {
    return (
        <AdvantageSection {...props}>
            <p className={'about_title'} style={{color:'black'}}>Наши преимущества</p>
            <Container>
                {props.advantages.map(adv=>
                    <AdvantageCard key={adv.id} advantage={adv}/>
                )}
            </Container>
        </AdvantageSection>
    );
};

export default Advantages;