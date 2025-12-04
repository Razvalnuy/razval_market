import { defineField, defineType } from "sanity"

export const product = defineType({
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		defineField({
			name: "productName",
			title: "Product Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "productName",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "productImages",
			title: "Product Images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "price",
			title: "Price $",
			type: "number",
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: "discount",
			title: "Discount %",
			type: "number",
			validation: (Rule) => Rule.min(0).max(100),
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
		}),
		defineField({
			name: "stock",
			title: "Stock",
			type: "number",
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: "brand",
			title: "Brand",
			type: "string",
		}),
		defineField({
			name: "productStatus",
			title: "Product Status",
			type: "string",
			options: {
				list: [
					{ title: "Sale", value: "sale" },
					{ title: "Hot", value: "hot" },
					{ title: "New", value: "new" },
				],
				layout: "radio",
			},
		}),
		defineField({
			name: "productType",
			title: "Product Type",
			type: "string",
			options: {
				list: [
					{ title: "Gadget", value: "gadget" },
					{ title: "Others", value: "others" },
				],
			},
		}),
		defineField({
			name: "featuredProduct",
			title: "Featured Product",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "productName",
			subtitle: "brand",
			media: "productImages.0.asset",
		},
	},
})
