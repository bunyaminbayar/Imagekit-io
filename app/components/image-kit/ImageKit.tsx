"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const imageKitList = '/image-io-test/'

export default function ImageKit(props) {
  return (
    <IKImage urlEndpoint={urlEndpoint + imageKitList} {...props} />
  )
}
