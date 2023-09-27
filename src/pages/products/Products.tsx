// This component manages the display, creation, editing, and deletion of products.
// It fetches data from the productsService, displays it in a table, allows adding/editing products
// through a form modal, and confirms deletions through a separate modal.

import React from 'react';
import Button from '../../components/button/Button';

import { 
  ProductHeaderContainer, 
  TableWrapper, 
  StyledTable, 
  TableHeader, 
  TableRow, 
  TableCell, 
  ProductActionsButtons 
} from './styles';

import {
  ActionButton, 
  AddEditProductForm, 
  DeleteProductModal
} from './components';

import useProducts from './hooks/useProducts';

const Products: React.FC = () => {

  const { 
    tableData, 
    productToEdit,
    productToDelete,
    handleAddProduct, 
    handleUpdateProduct, 
    handleDeleteProduct,
    toggleEditProduct,
    toggleDeleteProduct,
    modalIsOpen, 
    toogleModal 
  } = useProducts()
  
  return (
    <div>
      {/* Header section */}
      <ProductHeaderContainer>
        <h3>Products</h3>
        <Button
          testId="add-product-button"
          onClick={toogleModal}
          color="success">Add new</Button>
      </ProductHeaderContainer>

      {/* Table displaying product data */}
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              {tableData.headers.map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {tableData.headers.map((header, colIndex) => (
                  <TableCell key={colIndex}>{(row as any)[header]}</TableCell>
                ))}
                <TableCell>
                  <ProductActionsButtons>
                    <ActionButton
                      item={row}
                      onClick={toggleDeleteProduct}
                      color="danger"
                      label="Del" />
                    <ActionButton
                      item={row}
                      onClick={toggleEditProduct}
                      color="system"
                      label="Edit" />
                  </ProductActionsButtons>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>


      {/* Modal for adding/editing products */}
      <AddEditProductForm
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        data={productToEdit}
        isOpen={modalIsOpen}
        toggle={productToEdit ? toggleEditProduct : toogleModal} />

      {/* Modal for confirming product deletion */}
      <DeleteProductModal
        item={productToDelete}
        toggle={toggleDeleteProduct}
        onDeleteProduct={handleDeleteProduct} 
        />
    </div>
  );
};

export default Products;