import { connectionSrt } from "@/util/db";
import { Product } from "@/util/model/products";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
  } catch (error) {
    data = { result: "error" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
}

export async function POST(request) {
  let success = true;
  const payload = await request.json();
  await mongoose.connect(connectionSrt);

  let product = new Product(payload);
  const result = await product.save();

  return NextResponse.json({ result, success });
}
