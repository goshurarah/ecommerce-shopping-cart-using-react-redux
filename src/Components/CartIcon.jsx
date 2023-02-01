import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function CartIcon(CART_ICON_STORE) {
    // console.log('props2 in cart icon :>> ', props2);
    return (
        <>
            <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'center' }}>
                <IconButton aria-label="cart" size="small" title="Shopping Cart">
                    <StyledBadge badgeContent={CART_ICON_STORE.count2} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Box>
        </>
    );
}
export default CartIcon