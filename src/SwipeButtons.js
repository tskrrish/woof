import React from 'react';
import "./SwipeButtons.css"


import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';


function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className="ReplayIcon">
            <ReplayIcon fontSize='large'></ReplayIcon>
            </IconButton>
            <IconButton className="CloseIcon">
            <CloseIcon fontSize='large'></CloseIcon>
            </IconButton>
            <IconButton className="StarIcon">
            <StarIcon fontSize='large'></StarIcon>
            </IconButton>
            <IconButton className="FavoriteIcon">
            <FavoriteIcon fontSize='large'></FavoriteIcon>
            </IconButton>
            <IconButton className="FlashOnIcon">
            <FlashOnIcon fontSize='large'></FlashOnIcon>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
