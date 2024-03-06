# DO_Product_Card

Este es un paquete de pruebas de despliegue en NPM

### Jefferson Aguilar

## Ejemplo

```
import { ProductImage,
        ProductTitle,
        ProductButtons, } from JA-Do-Product-Card
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 15,
    }}>
    {({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
        <>
            <ProductImage />

            <ProductTitle />

            <ProductButtons />
        </>
    )}
</ProductCard>

```
