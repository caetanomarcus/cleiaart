import React, {useState} from 'react';
import {S_header} from './styles';
import needles from '../assets/needles.png'
import crochet from '../assets/crochet.png'
import crochetHovered from '../assets/crochet-hovered.png'

const Header = () => {
    const {Container, 
        LogoAndTitleContender, 
        Title, 
        Logo, 
        Menu, 
        ItemMenu, 
        ItemMenuImage,
        ItemMenuText
        } = S_header;
    const [menuItems] = useState([
        {name: 'início', id: 1},
        {name: 'produtos', id: 2},
        {name: 'sobre', id: 3}
    ])
    const [isHovered, setHovered] = useState(false)


    return(
        <Container>
            <LogoAndTitleContender>
                <Title>Cleia</Title>
                <Logo src={needles} alt= 'a needle image' />
            </LogoAndTitleContender>
            <Menu>
                {menuItems.map((item, index) => (
                    <ItemMenu 
                    key={index}
                    firstIndex={index === 0? true: false}
                    >
                        <ItemMenuImage 
                        src={isHovered === item.id? crochetHovered: crochet}
                        onMouseEnter={()=> setHovered(item.id)}
                        onMouseLeave={()=> setHovered(null)}
                        /> 
                        <ItemMenuText
                         onMouseEnter={()=> setHovered(item.id)}
                         onMouseLeave={()=> setHovered(null)}
                        >{item.name}</ItemMenuText>
                    </ItemMenu>
                )
                )}
            </Menu>
        </Container>
    )
}

export default Header