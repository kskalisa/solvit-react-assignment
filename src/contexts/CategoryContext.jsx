import React, {createContext, useState, useContext, useEffect } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const storedCategories = localStorage.getItem('categories');
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories));
        }
        else {
        const defaultCategories = [
        { id: '1', name: 'Laptops', description: 'Laptop computers', productCount: 0 },
        { id: '2', name: 'Tablets', description: 'Tablet devices', productCount: 0 },
        { id: '3', name: 'Phones', description: 'Mobile phones', productCount: 0 },
        { id: '4', name: 'Accessories', description: 'Computer accessories', productCount: 0 },
      ];
      setCategories(defaultCategories);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('categories', JSON.stringify(categories));
        }

    }, [categories, loading]);

    const addCategory = (category) => {
        const newCategory = {
            ...category,
            id: Date.now().toString(),
            productCount: 0,
            createdAt: new Date().toISOString()
        };
        setCategories([...categories, newCategory]);
        return newCategory;
    };

    const updateCategory = (id, updatedCategory) => {
        const updatedCategories = categories.map(category => 
            category.id === id ? {...category, ...updatedCategory} : category
        );
        setCategories(updatedCategories)
    };

    const deleteCategory = (id) => {
        const category = categories.find(c => c.id === id);
        if (category && category.productCount > 0){
            throw new Error('Cannot delete category with products');
        }
        setCategories(categories.filter(category => category.id !== id));
    };

    const getCategory = (id) => {
        return categories.find(category => category.id === id);
    };

    const incrementProductCount = (categoryId) => {
        setCategories(categories.map(category => 
            category.id === categoryId ?
            {...category, productCount: (category.productCount || 0) + 1}
            : category
        ));
    };

    const decrementProductCount = (categoryId) => {
        setCategories(categories.map(category => 
            category.id === categoryId ?
            {...category, productCount: Math.max(0, (category.productCount || 0) - 1)}
             : category
        ));
    };

    return (
        <CategoryContext.Provider value = {{
            categories, 
            loading,
            addCategory,
            updateCategory,
            deleteCategory,
            getCategory,
            incrementProductCount,
            decrementProductCount
        }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategories must be used within a CategoryProvider')
    }
    return context;
}