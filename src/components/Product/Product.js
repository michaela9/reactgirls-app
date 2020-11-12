import React from 'react';

import { 
    ProductInfoContainer,
    ProductInfo,
    ProductImg,
    ProductImgContainer,
 } from './Product.elements';

import { 
    Container, 
    ContainerColor, 
    Wrapper, 
    WrapperReverse, 
    TitleCenter ,
    WrapperColumn,
    SubTitleLeft,
    Paragraph
} from '../../components/reusable/styled';
import Button from '../reusable/Button/Button';
import productArr from './productArr';


function Product() {
    return (
        <>
            <ContainerColor>
                <WrapperColumn>
                    <TitleCenter>
                        Co je ReactGirls Prague?
                    </TitleCenter>
                </WrapperColumn>
            </ContainerColor>
            {productArr.map((product) => (
            <Container>
                <Wrapper> 
                    <ProductInfoContainer>
                        <SubTitleLeft>
                            {product.title}
                        </SubTitleLeft>
                        <ProductInfo>
                        {product.info}
                        </ProductInfo>
                        <Button>{product.button}</Button>
                    </ProductInfoContainer>
                    <ProductImgContainer>
                        <ProductImg src={product.img} />
                    </ProductImgContainer>  
                </Wrapper>
            </Container>
            )
        )}
    </>
    )
}

export default Product;
