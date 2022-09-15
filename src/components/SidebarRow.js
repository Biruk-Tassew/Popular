import React from "react";
import { Avatar } from '@mui/material';
import styled from 'styled-components';

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <SidebarRowWrapper>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </SidebarRowWrapper>
    )
}
const SidebarRowWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-bottom: -10px;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
        border-radius: 10px;
    }
    p{
        margin-left:10px;
        font-weight:600;
    }
    .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: x-large;
        color: #2e81f4;
    }
`

export default SidebarRow