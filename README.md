Trigger: a. When a user opens the cart drawer, the drawer should also display up to 4 suggested products.
i have created related product login on cart page and added swiper slider to show the related products items

Logic: a. Use either product recommendations API, tags, or collections to suggest relevant products. b. The logic can be one of the following: i. Products from the same collection as the first item in the cart. ii. Products with matching tags. iii. Store-wide bestsellers (fallback).
according to Products from the same collection as the first item in the cart it will show the related products and the products which is added in cart it's will not show in to realted products script and also there is settings in theme settings "Related products cart" from where you can manage the swiper slider item on desktop and mobile

Display: a. Display product image, title, price, and an Add to Cart button. b. Should not block or interfere with the current cart items.
all these points which is mention i have added

Performance: a. Load suggestions asynchronously (after cart drawer is opened). b. Ensure it does not block drawer load or degrade page speed.
also this points i have also cover

Bonus (Optional): a. Allow adding suggested product to cart without leaving the drawer.
this functionality i have added b. Show "Added!" confirmation inline on add.
