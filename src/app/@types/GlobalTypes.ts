import React from "react";

export interface ButtonProps {
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
};

export interface IconButtonProps {
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export interface notificationProps {
    showDrawer?: boolean;
    onClose?: () => void;
}

export interface CountState {
    value: number;
};

export interface CartItem {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    quantity: number;
}

export type CartState = {
    items: CartItem[];
}