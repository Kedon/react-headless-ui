import React from 'react';
import { ProductActionsButton } from './actionButton.styles';
import { Product } from '../../../interfaces/product.interface';

interface ActionButtonProps {
    item: Product,
    onClick: (product: Product) => void,
    color: "primary" | "secondary" | "tertiary" | "white" | "black" | "gray" | "success" | "info" | "system" | "warning" | "danger",
    label: string
}

const ActionButton: React.FC<ActionButtonProps> = ({ item, onClick, color, label}) => 
    <ProductActionsButton 
    onClick={() => onClick(item)}
    color={color}>{label}
</ProductActionsButton>

export default ActionButton;