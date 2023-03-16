import { useEffectCard } from "@hooks/useEffectCard";
import { CardBody } from "../CardBody";
import { CardButtons } from "../CardButtons";
import { CardImage } from "../CardImage";
import { CardTechnologies } from "../CardTechnologies";
import { Props } from "../types";
import { CardContainer } from "./styles";

const Card = ({data, ...cardProps }: Props): JSX.Element => {

  const {
    touchstart,
    touchend,
    mousedown,
    mouseup,
    mouseleave,
    mouseover,
    mouseout,
    transformStyle
  } = useEffectCard();

  return(
    <div
    onTouchStart={touchstart}
    onTouchEnd={touchend}
    onMouseDown={mousedown}
    onMouseUp={mouseup}
    onMouseLeave={mouseleave}
    onMouseOver={mouseover}
    onMouseOut={mouseout}
    style={transformStyle}
    {...cardProps}
    >
      <CardContainer className="Card">
        <CardImage data={data} />
        <div className="Technologies">
          {data.technologies.map(tech => (
            <CardTechnologies key={tech.name} {...tech} />
          ))}
        </div>
        <CardBody data={data} />
        <CardButtons data={data} />
      </CardContainer>
    </div>
  );
}

export {Card};
