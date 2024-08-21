import { CartItem } from "@/store/slices/cartSlice";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request:NextRequest) {
    try {
        //receive the checkout products from client
        const {products} = await request.json()
        const checkoutProducts: CartItem[] = products
        console.log(checkoutProducts)
        return NextResponse.json({url:""})
        
    } catch (error) {
        console.error(error)
    }
}