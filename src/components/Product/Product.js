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
    WrapperReverse, 
    TitleCenter ,
    WrapperColumn,
    SubTitleLeft,
    Paragraph
} from '../../components/reusable/styled';
import Button from '../reusable/Button/Button';
import productArr from './productArr';


function Product({ lightblue, imgstart, hidebutton }) {
    return (
        <>
            <Container lightblue >
                <WrapperColumn>
                    <TitleCenter>
                        Co je ReactGirls Prague?
                    </TitleCenter>
                </WrapperColumn>
            </Container>
            {productArr.map((product) => (
            <Container lightblue={product.lightblue} >
                <Wrapper imgstart={product.imgstart}> 
                    <ProductInfoContainer>
                        <SubTitleLeft>
                            {product.title}
                        </SubTitleLeft>
                        <ProductInfo>
                        {product.info}
                        </ProductInfo>
                        <Button hidebutton={product.hidebutton} >{product.buttontext}</Button>
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
