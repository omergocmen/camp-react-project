import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import ProductService from "../services/productService";
import { toast } from "react-toastify";

export default function ProductAdd() {
  const initialValues = { productName: "",quantityPerUnit:""};
  const productService=new ProductService();
  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunludur"),
    categoryId: Yup.number().required("Kategori Numarası Zorunludur"),
    unitPrice: Yup.number().required("Birim Fiyat Zorunludur"),
    quantityPerUnit: Yup.string().required("Ürün Açıklaması Zorunludur"),
    unitsInStock: Yup.number().required("Stoktaki Ürün Sayısı Zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
             const product={
                 productName:values.productName,
                 unitPrice:values.unitPrice,
                 unitsInStock:values.unitsInStock,
                 quantityPerUnit:values.quantityPerUnit,
                 category:{
                     categoryId:values.categoryId,
                 }
             }
            productService.addProduct(product).then(result=>{
                toast.success(result.data.message);
            });
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
          <KodlamaIoTextInput name="categoryId" placeholder="Kategori Numarası" />
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <KodlamaIoTextInput name="quantityPerUnit" placeholder="Ürün Açıklaması" />
          <KodlamaIoTextInput name="unitsInStock" placeholder="Stok Adedi" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
