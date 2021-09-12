import React, { createContext, useContext, useState } from "react";
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps}) {
    const [showFeature, setshowFeature]  = useState(false);
    const [itemFeature, setItemFeature] = useState({});

    return (
      <FeatureContext.Provider value={{ showFeature, setshowFeature, itemFeature, setItemFeature}}>
          <Container {...restProps}>{children}</Container>
      </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({ children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
};
Card.Title = function CardTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Card.Tect = function CardTect({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};
Card.Meta = function CardMeta({ children, ...restProps}) {
    return <Meta {...restProps}>{children}</Meta>;
};
Card.Entities = function CardEntities({ children, ...restProps}) {
    return <Entities {...restProps}>{children}</Entities>;
};
Card.Item = function CardItem({ item, children, ...restProps}) {
    const { setshowFeature, setItemFeature } = useContext(FeatureContext);

    return (
    <Item
        onClick={() => {
            setItemFeature(item);
            setshowFeature(true);
        }}
        {...restProps}
        >
            {children}
    </Item>)
};
 
Card.Image = function CardImage({...restProps}) {
    return <Image {...restProps} />;
};