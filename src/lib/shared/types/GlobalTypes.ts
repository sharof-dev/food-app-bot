import React from "react";

export interface ButtonProps {
    text: string;
    onClick: () => void;
};

export interface IconButtonProps{
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}