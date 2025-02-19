import React from "react";

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode;
};

export interface IconButtonProps{
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export interface notificationProps {
    showDrawer?: boolean;
    onClose?: () => void;
}