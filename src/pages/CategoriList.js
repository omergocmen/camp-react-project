import React, { useState } from "react";
import { Menu, MenuItem, Label } from "semantic-ui-react";
import { useEffect } from "react";
import CategoryService from "../services/categoryService";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../store/actions/categoryActions";
import { changePage } from "../store/actions/paginationActions";

export default function Categories() {
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategories(result.data.data), []);
  });

  const change = (category) => {
    dispatch(changeCategory(category));
    dispatch(changePage(1));
  };

  return (
    <div>
      <Menu fluid vertical>
        <MenuItem
          onClick={() => change({ categoryName: "" })}
          active={"" === selectedCategory}
        >
          Tüm Ürünler
        </MenuItem>
        {categories.map((category, index) => (
          <MenuItem
            className="item"
            onClick={() => change(category)}
            active={category.categoryName === selectedCategory}
            key={index}
          >
            <h4 className="ui header">{category.categoryName}</h4>
            <p>{category.description}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
