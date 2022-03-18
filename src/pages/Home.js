import React from "react";
import ProductList from "./ProductList";
import Categories from "./CategoriList";
import { Grid } from "semantic-ui-react";
import { Routes } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <Grid>
        <hr />
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
              <ProductList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
