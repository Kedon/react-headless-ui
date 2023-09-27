
import { Product } from '../../../interfaces/product.interface';
import { TableData } from '../interfaces/tableData.interface';
import { productsService } from '../../../services/api';

export const add = (prevValue: TableData, item: Product) => {
    return {
        ...prevValue,
        rows: [item, ...prevValue.rows]
    }
}

export const update = (prevValue: TableData, item: Product) => {
    return {
        ...prevValue,
        rows: prevValue.rows.map((p) => {
            if (p.id === item.id) {
                return item;
            }
            return p;
        })
    }
}

export const del = (prevValue: TableData, item: Product) => {
    return {
        ...prevValue,
        rows: prevValue.rows.filter((p) => p.id !== item.id)
    }
}

export const fetchData = async (prevValue: TableData) => {
    try {
        const response = await productsService.get();
        if (response && response.products) {
            return {
                ...prevValue,
                rows: response.products.map((item: Product) => item),
            };
        }
    } catch (error) {
        return {
            ...prevValue,
            status: 'error',
            data: error,
        };
    }
};