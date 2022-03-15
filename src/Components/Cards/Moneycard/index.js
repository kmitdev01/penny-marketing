import React from 'react';
import {
    Card,
    ImgWrapper,
    Title,
    SubTitle
} from './styles';
const MoneyCard = ({ src, style, title, subtitle,imgbox ,className}) => {
    return (
        <Card className={className}>
            <ImgWrapper>
                <img src={src} alt="card " style={imgbox} />
                <Title style={style}>
                    {title}
                </Title>
                <SubTitle>{subtitle}</SubTitle>
            </ImgWrapper>
        </Card>
    );
};

export default MoneyCard;