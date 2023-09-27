// External imports
import { useState, useEffect } from 'react';

// Internal imports
import { Product } from '../../../interfaces/product.interface';
import { TableData } from '../interfaces/tableData.interface';
import { add, update, del, fetchData } from '../utils/productPageLogic';

/**
 * Custom hook to manage products.
 */

const useProducts = () => {

  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  
  // State for storing and managing table data
  const [tableData, setTableData] = useState<TableData>({
    headers: ["title", "description", "actions"],
    rows: [],
    loading: false
  });

  /**
   * Effect to fetch products on component mount.
   */
  useEffect(() => {
    const productsRequest = async () => {
      const response = await fetchData(tableData);
      
      if (response?.status === 'error') {
        alert(`Error: ${response.data}`);
      } else {
        if(response?.rows)
        setTableData(response);
      }
    };
    
    productsRequest();
}, []);
  
  /**
   * Add a new product to the table data and close the modal.
   */
  const handleAddProduct = (product: Product) => {
    setTableData(add(tableData, product));
    setModalIsOpen(false);
  };

  /**
   * Update an existing product in the table data and reset product to edit.
   */
  const handleUpdateProduct = (product: Product) => {
    setTableData(update(tableData, product));
    setProductToEdit(null);
  };

  /**
   * Delete a product from the table data and reset product to delete.
   */
  const handleDeleteProduct = (item: Product) => {
    setTableData(del(tableData, item));
    setProductToDelete(null);
  };

  /**
   * Set or unset the product being edited.
   */
  const toggleEditProduct = (item?: Product) => {
    if (item?.id) {
      setProductToEdit(item);
    }
    else {
      setProductToEdit(null);
    }
  };

  /**
   * Set or unset the product marked for deletion.
   */
  const toggleDeleteProduct = (item?: Product) => {
    if (item?.id) {
      setProductToDelete(item);
    }
    else {
      setProductToDelete(null);
    }
  };

  /**
   * Toggle the visibility of the add product modal.
   */
  const toogleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return {
    tableData,
    productToEdit,
    productToDelete,
    toggleEditProduct,
    toggleDeleteProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    toogleModal,
    modalIsOpen
  };
}

export default useProducts;