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
            <Container lightblue >
                <WrapperColumn>
                    <TitleCenter>
                        Co je ReactGirls Prague?
                    </TitleCenter>
                </WrapperColumn>
            </Container>
            {productArr.map((product) => (
            <Container lightblue={product.lightblue} id={product.id} >
                <Wrapper imgstart={product.imgstart}> 
                    <ProductInfoContainer>
                        <SubTitleLeft>
                            {product.title}
                        </SubTitleLeft>
                        <ProductInfo>
                        {product.info}
                        </ProductInfo>
                        {!product.hidebutton && 
                            <Button to={product.link}>{product.buttontext}</Button>    
                        }
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
