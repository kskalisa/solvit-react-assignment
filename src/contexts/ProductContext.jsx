import React, {createContext, useState, useContext, useEffect} from 'react';
import { CategoryContext } from './CategoryContext';

const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoryContext = useContext(CategoryContext);
    const incrementProductCount = categoryContext?.incrementProductCount ?? (() => {});
    const decrementProductCount = categoryContext?.decrementProductCount ?? (() => {});

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (loading) return;
        localStorage.setItem('products', JSON.stringify(products));

    }, [products, loading]);


    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        setProducts(prev => [...prev, newProduct]);
        if (newProduct.category) {
            incrementProductCount(newProduct.category);
        }
        return newProduct;
    };


    const updateProduct = (id, updatedProduct) => {
        const oldProduct = getProduct(id);
        const updatedProducts = products.map(product => 
            product.id === id ? {...product, ...updatedProduct, updatedAt: new Date().toISOString()} : product
        );
        setProducts(updatedProducts);
        const newProd = updatedProducts.find(p => p.id === id);
        const oldCat = oldProduct?.category;
        const newCat = newProd?.category;
        if (oldCat !== newCat) {
            if (oldCat) decrementProductCount(oldCat);
            if (newCat) incrementProductCount(newCat);
        }
        return newProd;
    };

    const deleteProduct = (id) => {
        const prodToDelete = getProduct(id);
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        if (prodToDelete?.category) {
            decrementProductCount(prodToDelete.category);
        }
    };

    const getProduct = (id) => {
        return products.find(product => product.id === id);
    };

    // get user's own products
    const getUserProducts = (userId) => {
        return products.filter(product => product.ownerId === userId);
    };
    
    return (
        <ProductContext.Provider value={{
            products,
            loading,
            addProduct,
            updateProduct,
            deleteProduct,
            getProduct,
            getUserProducts
        }
        }>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if(!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
}

