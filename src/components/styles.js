import styled from "styled-components";

export const S_header = {

    Container: styled.header `
        height: 40vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #E6A8FC ;
        /* box-shadow: 0 3px 2px 5px gray; */
        /* z-index: 2; */
    `,

    LogoAndTitleContender: styled.a `
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        margin-left: 4rem;
    `,

    Title: styled.p `
        color: #FFFD98; 
        text-align: center;
        text-transform: lowercase;
        font-size: 32px;

        ::after{
            content: 'Art';
            color: #3D0B37;
            height: 10px;
            width: 70px;
            border-left: 2px solid #FFFD98;
            border-right: 2px solid #FFFD98;
            margin: 0 5px;
            padding: 0 5px;
        }
    
    `,

    Logo: styled.img `
        width: 40px;
        transition: 3s ease-in-out;
       
        &:hover{
            transform: rotate(90deg);
            
        }
    `,

    Menu: styled.ul `
        width: 380px;
        margin-right: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    ItemMenu: styled.li `
        width: fit-content;
        /* max-width: 100px; */
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 6px;
        padding: 5px;
        font-size: 18px;
        color: #3D0B37;

        ::after{
            content: '';
            width: 1px;
            height: 24px;
            border-right: 1px #FFFD98 solid;
            margin-left: 1rem;
            
        }

        ::before{
            ${props => props.firstIndex
            ? 'content: ""; width: 1px; height: 24px; border-left: 1px #FFFD98 solid; margin-right: 1rem; '
            : ''
            }
        }

        &:hover p {
           color: #242838;
           
        }
    `,

    ItemMenuImage: styled.img `
        width: 20px;
        margin-right: 3px;
        cursor: pointer;
    `,

    ItemMenuText: styled.p `
        width: fit-content;
        font-size: 21px;
        font-weight: 300;
        text-align: center;
        cursor: pointer;
       

        &:hover{
            /* transform: scale(.8); */
            /* font-weight: bold; */
        }
    `
}

export const S_main ={

    Container: styled.main `
        height: 80vh;
        background-color: #ECBEFD ;
    `
}