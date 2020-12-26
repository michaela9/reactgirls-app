import React from 'react';

import { 
    ProductInfoContainer,
    ProductInfo,
    ProductImg,
    ProductImgContainer,
 } from './Product.elements';

import { 
    Container, 
    Wrapper,  
    TitleCenter ,
    WrapperColumn,
    SubTitleLeft,
    Button
} from '../../components/reusable/styled';
import productArr from './productArr';

function Product() {
    return (
        <>
            <Container lightBlue >
                <WrapperColumn>
                    <TitleCenter>
                        Co je ReactGirls Prague?
                    </TitleCenter>
                </WrapperColumn>
            </Container>
            {productArr.map((product) => (
            <Container key={product.title} lightBlue={product.lightBlue} id={product.id} >
                <Wrapper imgStart={product.imgStart}> 
                    <ProductInfoContainer>
                        <SubTitleLeft>
                            {product.title}
                        </SubTitleLeft>
                        <ProductImgContainer>
                            <ProductImg src={product.img} />
                        </ProductImgContainer> 
                        <ProductInfo>
                        {product.info}
                        </ProductInfo>
                        {!product.hideButton && 
                            <Button href={product.link}>{product.buttonText}</Button>    
                        } 
                    </ProductInfoContainer>
                </Wrapper>
            </Container>
            )
        )}
    </>
    )
}

export default Product;
