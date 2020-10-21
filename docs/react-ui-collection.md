---
id: react-ui-collection
title: React UI Collection
sidebar_label: React UI Collection
---

## React Pakistan

<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" width="100%" />

React Pakistan is an OpenSource & Free Software (FOSS) platform, creating React software solutions for the global community.

## React UI/UX Collection

<div>
  <img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-ui-collection.jpg" width="70%"/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1K6JwhYEBfsv52nUT30dAIjoFyp252cH6VVkhXB_Gq1bUSz-" width="20%" />
</div>

- [React UI Storybook Playground](https://taimoormk.github.io/react-ui-collection/?path=/docs/react-pakistan-intro--page/)
- [React UI NPM Module](https://www.npmjs.com/package/@react-pakistan/react-ui-collection)

A generic to specific, UI/UX library for React web apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

## Getting Started

Install React UI Collection to your project:

`yarn add @react-pakistan/react-ui-collection` or `npm install @react-pakistan/react-ui-collection`

## Documentation of React UI/UX Components

- ### Breadcrumbs
```javascript
import { Breadcrumbs } from '@react-pakistan/react-ui-collection/eCommerceV1UI/breadcrumbs';

  <Breadcrumbs
    breadcrumbs={['Item1','Item2','Item3']}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### CartSummary
```javascript
	import { CartSummary } from '@react-pakistan/react-ui-collection/eCommerceV1UI/cart-summary';

  <CartSummary
    topHeadingH4="4 Items In Your Cart"
    headerItems={[
      {id: 'header-item-1',colLabel: 'Item',justify: 'start'},
      {id: 'header-item-2',colLabel: 'Size',justify: 'center'},
      {id: 'header-item-3',colLabel: 'Quantity',justify: 'center'},
    ]}
    bodyItems={[
      {
        id: 'body-item-1',
        imageUrl: 'https://cdn.shopify.com/s/files/1/3003/0152/produc…',
        productTitle: 'Green T-shirt 2016',
      },
      {
        id: 'body-item-2',
        imageUrl: 'https://i.pinimg.com/originals/a5/52/78/a552788755…',
        productTitle: 'Purple T-shirt 2016',
      },
      {
        id: 'body-item-3',
        imageUrl: 'https://www.netballuk.co.uk/acatalog/Thunder-Bee-T…',
        productTitle: 'Yellow T-shirt 2016',
      },
    ]}
    backButton="Back to Shop"
		nextButton="Checkout"
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### Cart
```javascript
import { Cart } from '@react-pakistan/react-ui-collection/eCommerceV1UI/cart';

  <Cart
    cartItemsNumber={6}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### CategoryBanner
```javascript
import { CategoryBanner } from '@react-pakistan/react-ui-collection/eCommerceV1UI/category-banner';

  <CategoryBanner
    imageBackgroundPadding="5em"
    imageBackgroundWidth="100%"
    imageBackgroundHeight="500px"
    imageBackgroundUrl="https://demo.accesspressthemes.com/fashstore-pro/w…"
    headingH3="Mens wear"
    menuItems={[
      {id: 'menu-item-1',menuLabel: 'Accessories',menuUrl: '/accessories'},
      {id: 'menu-item-2',menuLabel: 'ASOS Baisc Tops',menuUrl: '/asos-basic-tops'},
      {id: 'menu-item-3',menuLabel: 'Bags',menuUrl: '/bags'},
    ]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### CategoryCard
```javascript
import { CategoryCard } from '@react-pakistan/react-ui-collection/eCommerceV1UI/category-card';

  <CategoryCard
    imageBackgroundUrl="http://cdn.shopify.com/s/files/1/0014/1980/4719/co…"
    imageBackgroundWidth="100%"
    imageBackgroundHeight="500px"
    overlayColor="rgba(30, 144, 255, 0.5)"
    headingH3="Blue"
    categoryText="Shop now"
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### ButtonText
```javascript
import { ButtonText } from '@react-pakistan/react-ui-collection/eCommerceV1UI/category-card';

  <ButtonText 
    textTransform='uppercase'
		textAlign='center'
		letterSpacing='normal'
		lineHeight={1}
		fontWeight={700}
		fontSize='1em'
		fontfamily='Montserrat'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
  />
```

- ### Button
```javascript 
import { Button } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

  <Button 
		backgroundColor='#F62F5E'
		borderRadius='3em'
		padding='1em 3.5em'
		onClick={() => null}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	>
		Shop Now
  </Button>
```

- ### CheckoutConfirmation
```javascript 
import { CheckoutConfirmation} from '';

  <CheckoutConfirmation
		headingH4='Checkout'
		steps={[
			{
				id:"step-item-1",
				stepLabel:"Delivery"},
			{
				id:"step-item-2",
				stepLabel:"Confirmation"},
			{
				id:"step-item-3",
				stepLabel:"Payment"},
			{
				id:"step-item-4",
				stepLabel:"Finish"}
			]}
		orderSummary='Order summary'
		orderBodyItems={[
			{
				id:"order-body-item-1",
				itemName:"Green T-shirt 2016",
				sku:"Men BK3569",
				quantity:2,
				priceCurrency:"£",
				price:14},
			}
		delivery='Delivery'
		address='Office 64, 8 Colmore Row Birmingham, England, 42000'
		deliveryOption='Standard delivery (free, 2-3 days)'
		backButton='Back'
		nextButton='Next Step'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### CheckoutDelivery
```javascript
import { CheckoutDelivery } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<CheckoutDelivery
		backButton='Back'
		billingInfo='My billing information is the same as my delivery information'
		checkoutDeliveryFormFields={[
			{
				id:"checkout-delivery-form-field-1",
				label:"First name *",
				placeholder:"First name"
			},
			{
				id:"checkout-delivery-form-field-2",
				label:"Last name *",
				placeholder:"Last name"
			},
			{
				id:"checkout-delivery-form-field-3",
				label:"Address *",
				placeholder:"Address"
			},
			{
				id:"checkout-delivery-form-field-4",
				label:"City *",
				placeholder:"City"
			},
			{
				id:"checkout-delivery-form-field-5",
				label:"State *",
				placeholder:"State"
			},
			{
				id:"checkout-delivery-form-field-6",
				label:"ZIP code *",
				placeholder:"ZIP code"
			}
		]}
		country='Great Britain'
		countryLabel='Country'
		expressShippingMainText='Express shipping:'
		expressShippingSubText='(£28, 1-2 business days)'
		mainHeadingH4='Checkout'
		nextButton='Next Step'
		standardShippingMainText='Standard shipping: '
		standardShippingSubText='(free, 2-3 business days)'
		steps={[
			{
				id:"step-item-1",
				stepLabel:"Delivery"
			},
			{
				id:"step-item-2",
				stepLabel:"Confirmation"
			},
			{
				id:"step-item-3",
				stepLabel:"Payment"
			},
			{
				id:"step-item-4",
				stepLabel:"Finish"
			}
		]}
		subHeadingH4='Delivery options'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### CheckoutFinish
```javascript
import { CheckoutFinish } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<CheckoutFinish
		mainHeadingH4='Checkout'
		steps={[
			{
				id:"step-item-1",
				stepLabel:"Delivery"
			},
			{
				id:"step-item-2",
				stepLabel:"Confirmation"
			},
			{
				id:"step-item-3",
				stepLabel:"Payment"
			},
			{
				id:"step-item-4",
				stepLabel:"Finish"
			}
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### CheckoutFooter
```javascript
import { CheckoutFooter } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<CheckoutFooter
		backButton='Back'
		nextButton='Checkout'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### CheckoutPayment
```javascript
import { CheckoutPayment } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<CheckoutPayment
		backButton='Back'
		headingH4='Checkout'
		nextButton='Next Step'
		paymentFormFields={[
			{
				id:"payment-form-field-1",
				label:"Cardholder's Name"
			},
			{
				id:"payment-form-field-2",
				label:"Card number"
			}
		]}
		steps={[
			{
				id:"step-item-1",
				stepLabel:"Delivery"
			},
			{
				id:"step-item-2",
				stepLabel:"Confirmation"
			},
			{
				id:"step-item-3",
				stepLabel:"Payment"
			},
			{
				id:"step-item-4",
				stepLabel:"Finish"
			}
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ColorPalette
```javascript
import { ColorPalette } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<ColorPalette
		width='20px'
		height='20px'
		borderRadius='50%'
		paletteColor='#3C3C3C'
		margin='0px 10px 0px 0px'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ContactUs
```javascript
import { ContactUs } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<ContactUs
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Counter
```javascript
import { Counter } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<Counter 
		counter={2}
		center={false}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### DisplayCard
```javascript
import { DisplayCard } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<DisplayCard
		buttonBackgroundColor='#F62F5E'
		colorButtonText='#FFFFFF'
		fontFamilyButton='Montserrat'
		fontSizeButton='1.2em'
		headingTextH1='Let the Game begin'
		headingTextH5='Registration is on - get ready for the Open'
		imageHeight='500px'
		imageUrl='https://runningmagazine.ca/wp-content/uploads/2017/05/sunrise-runner.jpg'
		imageWidth='100%'
		textButton='Register'
		textTransformButton='none'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### DropDown
```javascript
import { DropDown } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<DropDown 
		dropDownItems={
			[
				"Red",
				"Green",
				"Blue"
			]
		}
		minWidth='12em'
		margin='0em'
		padding='0.5em 1em'
		borderRadius='0.25em'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### EmailBar
```javascript
import { EmailBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<EmailBar 
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### FilterBar
```javascript
import { FilterBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<FilterBar 
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Footer
```javascript
import { Footer } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<Footer
		footerMenuItems={[
			{
				id:"menu-bar-item-1",
				menuLabel:"Women",
				url:"./women"
			},
		]}
		footerSocialIcons={[
			{
				id:"social-icon-1",
				iconName:"instagram",
				url:"https://instagram.com"
			},
			{
				id:"social-icon-2",
				iconName:"pinterest",
				url:"https://pinterest.com"
			},
			{
				id:"social-icon-3",
				iconName:"twitter",
				url:"https://instagram.com"
			},
			{
				id:"social-icon-4",
				iconName:"facebook",
				url:"https://facebook.com"
			}
		]}
		footerText='©2016 shopmate Ltd • Contact • Privacy Policy'
		type='footer_type.DARK'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### HighlightCard
```javascript 
import { HighlightCard } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<HighlightCard
		backgroundColorButton='#FFFFFF'
		buttonText='Shop'
		colorButtonText='#F62F5E'
		fontFamilyButtonText='Montserrat'
		fontSizeButtonText='1.5em'
		headingButtonText='Scandi-cool'
		headingH2='"New Trend"'
		headingH3='"Scandi-cool"'
		imageBackgroundHeight='500px'
		imageBackgroundUrl='http://kyotobowtie.com/images/onlineshop/banner_onlineshop.jpg'
		imageBackgroundWidth='100%'
		textAlignButtonText='left'
		textTransformButtonText='normal'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### IconWrapper
```javascript
import { IconWrapper } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<IconWrapper
		backgroundColor='#FFFFFF'
		isSelected={false}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Label
```javascript
import { Label } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<Label
		backgroundColor='#2E2E2E'
		left='1.5em'
		padding='0.5em 0.75em'
		top='1.5em'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### MenuBar
```javascript
import { MenuBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<MenuBar
		cartItemsNumber={6}
		iconFill='#FFFFFF'
		logoText='Shopmate'
		menuItems={[
			{
				id:"menu-bar-item-1",
				menuLabel:"Women",
				menuUrl:"./women"
			},
		]}
		type='menubar_type.NORMAL'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### MenuItem
```javascript
import { MenuItem } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<MenuItem 
		color='#2E2E2E'
		fontFamily='Open Sans'
		fontSize='0.7em'
		fontWeight={400}
		letterSpacing=''
		lineHeight={0.8}
		textAlign='left'
		textTransform='uppercase'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### OrderTable
```javascript 
import { OrderTable } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<OrderTable
		orderBodyItems={[
			{
				id:"order-body-item-1",
				itemName:"Green T-shirt 2016",
				sku:"Men BK3569",
				quantity:2,
				priceCurrency:"£",
				price:14
			},
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
``` 

- ### PaginatorBar
```javascript
import { PaginatorBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<PaginatorBar
		pagination={[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Paginator
```javascript
import { Paginator } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<Paginator
		pagination={[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]}
		width=''
		height=''
		borderRadius=''
		backgroundColor=''
		backgroundColorHover=''
		colorHover=''
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ProductItem
```javascript
import { ProductItem } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	<ProductItem
		backgroundColorButton='#F62F5E'
		backgroundColorLabel='#F62F5E'
		buttonText='Buy now'
		buttonTextVariationPrice='From £4.95'
		buttonTextWishlist='Add to Wish List'
		colorButtonText='#FFFFFF'
		colorButtonTextWishlist='#6C6C6C'
		colorH5='#2E2E2E'
		colorLabelText='#FFFFFF'
		colorVariationPrice='F62F5E'
		fontFamilyButtonText='Montserrat'
		fontFamilyButtonTextWishlist='Montserrat'
		fontFamilyVariationPrice='Montserrat'
		fontSizeButtonText='1.5em'
		fontSizeButtonTextWishlist='0.8em'
		iconColorWishlist='#F62F5E'
		imageBackgroundColor='none'
		imageBackgroundHeight='300px'
		imageBackgroundSize='contain'
		imageBackgroundUrl='https://media.matinique.com/images/medium-denim-trostol-bd-shirt.jpg?i=AFaRMYyo1gg/125123&w=294&h=441'
		imageBackgroundWidth='100%'
		labelText='Hot'
		overlayButtonText='Quick View'
		productItemHeadingH5='Various T-shirts'
		textTransformButtonText='normal'
		textTransformVariationPrice='normal'
		variationColors={[
			{
				id:"item-color-1",
				colorShade:"red"
			},
			{
				id:"item-color-2",
				colorShade:"green"
			},
			{
				id:"item-color-3",
				colorShade:"blue"
			}
		]}
		textAlignH5=''
		textTransformH5=''
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ProductReview
```javascript
import { ProductReview } from '@react-pakistan/react-ui-collection/eCommerceV1UI';
	
	<ProductReview
		colorDisclaimerText='#B4B4B4'
		colorDisclaimerTextSpan='#F62F5E'
		colorMainText='#6C6C6C'
		colorTimeText='#B4B4B4'
		fontFamilyDisclaimerText='Montserrat'
		fontFamilyH4Add='Montserrat'
		fontFamilyH4Product='Montserrat'
		fontFamilyH5='Montserrat'
		fontFamilyMainText='Montserrat'
		fontFamilyTimeText='Montserrat'
		fontSizeDisclaimerText='0.9em'
		fontSizeMainText='1.2em'
		fontWeightMainText={400}
		headingH4Add='Add a review'
		headingH4Product='Product Reviews'
		headingH5='Pablo Permis'
		likeIconColor='#F62F5E'
		lineColor='#F7F7F7'
		nicknameH5='Choose a nickname'
		numberOfStars={5}
		rating={4}
		ratingH5='Overall rating'
		reviewH5='Your review'
		starDimension='2em'
		starRatedColor='#F1AD3D'
		textAlignDisclaimerText='left'
		textAlignH4Add='left'
		textAlignH4Product='left'
		textAlignH5='left'
		textAlignMainText='left'
		textAlignTimeText='left'
		textDisclaimerText='Your review must be at least 50 characters'
		textDisclaimerTextSpan='Full review guidelines'
		textMainText='Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done'
		textTransformH4Add='none'
		textTransformH4Product='none'
		textTransformH5='none'
		timeText='one hour ago'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### PromoCard
```javascript
import { PromoCard } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<PromoCard
		alt='alt-image'
		backgroundColorButton='#F62F5E'
		backgroundColorLabel='#00D3CA'
		buttonText='Shop Now'
		colorButtonText='#FFFFFF'
		colorLabelText='#FFFFFF'
		fontFamilyButtonText='Montserrat'
		fontFamilyHeading='Montserrat'
		fontFamilyLabelText='Montserrat'
		fontFamilyText='Montserrat'
		fontSizeButtonText='1.5em'
		fontSizeLabelText='1em'
		fontWeightLabelText={700}
		height='auto'
		imageUrl='https://images-na.ssl-images-amazon.com/images/I/619twX5-uaL._UY395_.jpg'
		labelText='Hello'
		letterSpacingLabelText='1px'
		lineHeightLabelText='normal'
		lineHeightText='normal'
		margin={0}
		padding={0}
		promoHeading='Heading'
		promoText='Carry the day in style with this extra-large tote crafted in our chic B. B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed as a to keep smaller items organised and easy to find.'
		textAlignHeading='left'
		textAlignLabelText='center'
		textAlignText='left'
		textTransformHeading='normal'
		textTransformLabelText='uppercase'
		textTransformText='normal'
		width='300px'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### RangeSlider
```javascript 
import { RangeSlider } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<RangeSlider 
		allowCross={false}
		defaultValue={[
			10,
			80
		]}
		railColor='#6C6C6C'
		trackColor='#B4B4B4'
		handleColor='#1E90FF'
		handleBorderColor='#F1AD3D'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### RemoveTag
```javascript
import { RemoveTag } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<RemoveTag
		tagLabel='Remove'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### SearchBar
```javascript
import { SearchBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<SearchBar
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ShopImageGallery
```javascript
import { ShopImageGallery } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<ShopImageGallery
		shopImageGallery={[
			{
				id:"image-1",
				imageUrl:"https://cdn.store.vegemite.com.au/wp-content/uploads/2018/05/VEGEMITE_Male_Tshirt1-600x600.jpg",
				altImage:"image-1"
			},
			{
				id:"image-2",
				imageUrl:"https://c.76.my/Malaysia/pokemon-pikachu-face-t-shirt-5w33-1609-22-5w33@1.jpg",
				altImage:"image-2"
			},
			{
				id:"image-3",
				imageUrl:"https://mide.com.my/wp-content/uploads/2017/12/Long-Sleeves_T-shirt_v2-01-edited.jpg",
				altImage:"image-3"
			}
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ShopItem
```javascript
import { ShopItem } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<ShopItem
		altImage='shop-main-item-image'
		breadcrumbs={[
			"Home",
			"All Categories",
			"Men's Clothing & Accessories"
		]}
		buttonText='Add to Wish List'
		colorButtonText='#6C6C6C'
		colorH3='#2E2E2E'
		colorH3Price='#F62F5E'
		colorPalettes={[
			"#1E90FF",
			"#00D3CA",
			"#F62F5E",
			"#F1AD3D",
			"#EFFC90",
			"#00D3CA"
		]}
		counter={2}
		headingH3='Super Oversized T-Shirt With Raw Sleeves In Brown'
		headingH3Price='£13.99'
		heightMainImage='auto'
		iconColor='#F62F5E'
		imageUrl='https://ae01.alicdn.com/kf/HTB19imskrsrBKNjSZFpq6AXhFXas/Men-Funny-T-Shirt-Women-Cool-tshirt-Luke-Cage-Pops-Barber-Shop-Comic-Black-Superhero-T.jpg_640x640.jpg'
		numberOfStars={5}
		rating={4}
		shopImageGallery={[
			{
				id:"image-1",
				imageUrl:"https://cdn.store.vegemite.com.au/wp-content/uploads/2018/05/VEGEMITE_Male_Tshirt1-600x600.jpg"},
			{
				id:"image-2",
				imageUrl:"https://c.76.my/Malaysia/pokemon-pikachu-face-t-shirt-5w33-1609-22-5w33@1.jpg"
			},
			{
				id:"image-3",
				imageUrl:"https://mide.com.my/wp-content/uploads/2017/12/Long-Sleeves_T-shirt_v2-01-edited.jpg"
			}
		]}
		sizePalettes={[
			"XS",
			"S",
			"M",
			"L",
			"XL",
			"XXL"
		]}
		starDimension='2em'
		starRatedColor='#F1AD3D'
		widthMainImage='100%'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### ShopItemsSummary
```javascript 
import { ShopItemsSummary } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<ShopItemsSummary
		backgroundColorButton='#F62F5E'
		breadcrumbs={[
			"Home",
			"All Categories",
			"Men's Clothing & Accessories"
		]}
		buttonText='Add to Wish List'
		colorButtonText='#6C6C6C'
		colorH3='#2E2E2E'
		colorH3Price='#F62F5E'
		colorH5='#2E2E2E'
		colorText='#B4B4B4'
		colorTextPrice='#6C6C6C'
		iconColor='#F62F5E'
		iconIsSelected={false}
		itemsSummaryHeadingH3='Men Shirts & Tops'
		lineColor='#F7F7F7'
		pagination={[
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10
		]}
		shopItems={[
			{
				id:"shop-item-1",
				itemImage:"https://cdn.shopify.com/s/files/1/1755/5355/products/mock-10-2122-14213D-nh-ns-111802514472174936291489614087-3_1200x.png?v=1543020586",
				itemImageAlt:"shop-product",
				itemName:"Pull&Bear Jumper In Textured Knit In Blue",
				itemCategory:"Tops",
				itemCurrency:"£",
				itemSalesPrice:"14.99",
				itemRegularPrice:"19.99",
				itemSizes:[
					{
						id:"section-product-size-1a",
						label:"Small"
					},
					{
						id:"section-product-size-2a",
						label:"Medium"
					},
					{
						id:"section-product-size-3a",
						label:"Large"
					}
				],
				buttonLabel:"Add to cart",
				favIcon:"http://www.stickpng.com/assets/images/5a02bfca18e87004f1ca4395.png",
				favIconText:"Add to wish list"
			},
		]}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Sign
```javascript
import { Sign } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<Sign
		signType='sign_type.SIGNIN'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### SizePalette
```javascript
import { SizePalette } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<SizePalette
		backgroundColor='#6C6C6C'
		borderRadius='0.25em'
		margin={0}
		padding='5px 15px'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### SortBar
```javascript
import { SortBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<SortBar
		lowerLimit={48}
		upperLimit={120}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### StarRating
```javascript
import { StarRating } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<StarRating
		name='rating'
		numberOfStars={5}
		rating={4}
		starDimension='30px'
		starRatedColor='#3C3C3C'
		starSpacing='5px'
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### Stepper
```javascript 
import { Stepper } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<Stepper
		currentStep={2}
		steps={[
			{
				id:"step-item-1",
				stepLabel:"Delivery"
			},
			{
				id:"step-item-2",
				stepLabel:"Confirmation"
			},
			{
				id:"step-item-3",
				stepLabel:"Payment"
			},
			{
				id:"step-item-4",
				stepLabel:"Finish"
			}
		]}
		theme={{"typography":{"fontFamily":"Montserrat","h1":{"fontFamily":"Playfair Display","fontSize":"2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h2":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h3":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h4":{"fontFamily":"Montserrat","fontSize":"1.4em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h5":{"fontFamily":"Montserrat","fontSize":"1.2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"none"},"text":{"fontFamily":"Montserrat","fontSize":"1em","fontWeight":400,"letterSpacing":"normal","lineHeight":"normal","textAlign":"left","textTransform":"none"}},"avatarSizes":{"small":"16px","medium":"24px","large":"32px","xlarge":"40px"},"breakpoints":{"mobileS":"only screen and (min-width: 320px) and (max-width: 374px)","mobileM":"only screen and (min-width: 375px) and (max-width: 424px)","mobileL":"only screen and (min-width: 425px) and (max-width: 767px)","tablet":"only screen and (min-width: 768px) and (max-width: 1023px)","laptop":"only screen and (min-width: 1024px) and (max-width: 1439px)","laptopL":"only screen and (min-width: 1440px) and (max-width: 2559px)","desktop":"only screen and (min-width: 2560px)"},"colors":{"black":"#2E2E2E","cherryRed":"#F62F5E","darkGrey":"#EFEFEF","inputBorder":"#E1E1E1","lightBlack":"#6C6C6C","lighterBlack":"#B4B4B4","lightGrey":"#F7F7F7","limeYellow":"#EFFC90","paleGreen":"#00D3CA","rustyGold":"#F1AD3D","skyBlue":"#1E90FF","white":"#FFFFFF"},"misc":{},"radius":{"default":"0.25em","double":"0.5em","half":"0.75em","full":"1em"},"shadow":{"default":"0px 1px 4px #E5E9F2","medium":"-4px 0 12px rgba(0, 0, 0, 0.3)"},"spacing":{"xsmall":"0.25em","small":"0.50em","medium":"0.75em","default":"1em","large":"1.5em","xlarge":"1.75em","huge":"2em"},"zIndex":{"dropdown":100,"pageFooter":200,"modal":300}}}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```

- ### SubscriptionBar
```javascript 
import { SubscriptionBar } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<SubscriptionBar
		colorH4='#F62F5E'
		headingH4='10% Discount for your subscription'
		headingH5='Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior.'
		style='subscriptionbar_type.REGULAR'
		theme={{"typography":{"fontFamily":"Montserrat","h1":{"fontFamily":"Playfair Display","fontSize":"2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h2":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h3":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h4":{"fontFamily":"Montserrat","fontSize":"1.4em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h5":{"fontFamily":"Montserrat","fontSize":"1.2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"none"},"text":{"fontFamily":"Montserrat","fontSize":"1em","fontWeight":400,"letterSpacing":"normal","lineHeight":"normal","textAlign":"left","textTransform":"none"}},"avatarSizes":{"small":"16px","medium":"24px","large":"32px","xlarge":"40px"},"breakpoints":{"mobileS":"only screen and (min-width: 320px) and (max-width: 374px)","mobileM":"only screen and (min-width: 375px) and (max-width: 424px)","mobileL":"only screen and (min-width: 425px) and (max-width: 767px)","tablet":"only screen and (min-width: 768px) and (max-width: 1023px)","laptop":"only screen and (min-width: 1024px) and (max-width: 1439px)","laptopL":"only screen and (min-width: 1440px) and (max-width: 2559px)","desktop":"only screen and (min-width: 2560px)"},"colors":{"black":"#2E2E2E","cherryRed":"#F62F5E","darkGrey":"#EFEFEF","inputBorder":"#E1E1E1","lightBlack":"#6C6C6C","lighterBlack":"#B4B4B4","lightGrey":"#F7F7F7","limeYellow":"#EFFC90","paleGreen":"#00D3CA","rustyGold":"#F1AD3D","skyBlue":"#1E90FF","white":"#FFFFFF"},"misc":{},"radius":{"default":"0.25em","double":"0.5em","half":"0.75em","full":"1em"},"shadow":{"default":"0px 1px 4px #E5E9F2","medium":"-4px 0 12px rgba(0, 0, 0, 0.3)"},"spacing":{"xsmall":"0.25em","small":"0.50em","medium":"0.75em","default":"1em","large":"1.5em","xlarge":"1.75em","huge":"2em"},"zIndex":{"dropdown":100,"pageFooter":200,"modal":300}}}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''

	/>
```

- ### SubscriptionOffer
```javascript
import { SubscriptionOffer } from '@react-pakistan/react-ui-collection/eCommerceV1UI';

	<SubcriptionOffer
		headingH4='10% Discount for your subscription'
		bodyH5='Carry the day on style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colourful faux leather trim, this tote offers a roomy interior.'
		buttonText='Subscribe'
		style='subscriptionoffer_type.NORMAL'

		theme={{"typography":{"fontFamily":"Montserrat","h1":{"fontFamily":"Playfair Display","fontSize":"2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h2":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h3":{"fontFamily":"Montserrat","fontSize":"1.6em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h4":{"fontFamily":"Montserrat","fontSize":"1.4em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"uppercase"},"h5":{"fontFamily":"Montserrat","fontSize":"1.2em","fontWeight":700,"letterSpacing":"1px","lineHeight":"normal","textAlign":"left","textTransform":"none"},"text":{"fontFamily":"Montserrat","fontSize":"1em","fontWeight":400,"letterSpacing":"normal","lineHeight":"normal","textAlign":"left","textTransform":"none"}},"avatarSizes":{"small":"16px","medium":"24px","large":"32px","xlarge":"40px"},"breakpoints":{"mobileS":"only screen and (min-width: 320px) and (max-width: 374px)","mobileM":"only screen and (min-width: 375px) and (max-width: 424px)","mobileL":"only screen and (min-width: 425px) and (max-width: 767px)","tablet":"only screen and (min-width: 768px) and (max-width: 1023px)","laptop":"only screen and (min-width: 1024px) and (max-width: 1439px)","laptopL":"only screen and (min-width: 1440px) and (max-width: 2559px)","desktop":"only screen and (min-width: 2560px)"},"colors":{"black":"#2E2E2E","cherryRed":"#F62F5E","darkGrey":"#EFEFEF","inputBorder":"#E1E1E1","lightBlack":"#6C6C6C","lighterBlack":"#B4B4B4","lightGrey":"#F7F7F7","limeYellow":"#EFFC90","paleGreen":"#00D3CA","rustyGold":"#F1AD3D","skyBlue":"#1E90FF","white":"#FFFFFF"},"misc":{},"radius":{"default":"0.25em","double":"0.5em","half":"0.75em","full":"1em"},"shadow":{"default":"0px 1px 4px #E5E9F2","medium":"-4px 0 12px rgba(0, 0, 0, 0.3)"},"spacing":{"xsmall":"0.25em","small":"0.50em","medium":"0.75em","default":"1em","large":"1.5em","xlarge":"1.75em","huge":"2em"},"zIndex":{"dropdown":100,"pageFooter":200,"modal":300}}}
		desktop=''
		laptop=''
		laptopL=''
		mobileL=''
  	mobileM=''
		mobileS=''
		tablet=''
	/>
```
