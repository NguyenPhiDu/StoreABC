import React, { useState, useContext } from 'react';
import { Alert } from "react-native";
import { database, auth } from "./firebase-Config"

export const createAccount = (data) => {
    const db_account = database.ref("accounts" + "/" + data.uid)
    var account = {
        accountId: data.uid,
        name: "Khách hàng",
        email: data.email,
        gender: "1",
        birthday: "",
        phone: "",
        address: "",
    };
    db_account.set(account)
}

export const UpdateAccount = (data) => {
    try {
        const db_account = database.ref("accounts" + "/" + data.uid)
        var account = {
            accountId: data.uid,
            name: data.name,
            email: data.email,
            gender: data.gender,
            birthday: data.birthday,
            phone: data.phone,
            address: data.address,
        };
        db_account.set(account)
        Alert.alert("Thông báo", "Cập nhật thành công")
    } catch (error) {
        alert(error)
    }
}
export const UpdateProduct = (data) => {
    try {
        const db_product = database.ref("products" + "/" + data.id)
        var product = {
            id: data.id,
            name: data.name,
            quantity: data.quantity,
            display: data.display,
            os: data.os,
            cameraS: data.cameraS,
            cameraT: data.cameraT,
            chip: data.chip,
            ram: data.ram,
            rom: data.rom,
            sim: data.sim,
            pin: data.pin,
            price: data.price,
            firm: data.firm,
        };
        db_product.set(product)
        Alert.alert("Thông báo", "Cập nhật thành công")
    } catch (error) {
        alert(error)
    }
}

export const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(() => {
            alert('Yêu cầu đã được gửi đến email của bạn')
        }).catch((e) => {
            alert(e)
        })
}


export const createProduct = (data) => {
    try {
        const db_product = database.ref("products/").push()
        var product = {
            id: db_product.key,
            img: data.img,
            name: data.name,
            quantity: data.quantity,
            display: data.display,
            os: data.os,
            cameraS: data.cameraS,
            cameraT: data.cameraT,
            chip: data.chip,
            ram: data.ram,
            rom: data.rom,
            sim: data.sim,
            pin: data.pin,
            price: data.price,
            firm: data.firm,
        };
        db_product.set(product)
        Alert.alert("Thông báo", "Tạo sản phẩm thành công")
    } catch (error) {
        alert(error)
    }
}

export const del = (data) => {
    try {
        database
            .ref(`/${data.ref}/` + data.id).remove();
    } catch (error) {
        alert(error)
    }
}

export const createCart = (data) => {
    try {
        const db_cart = database.ref("carts/").push()
        var cart = {
            id: db_cart.key,
            productId: data.id,
            productName: data.name,
            userId: data.userId,
            userName: data.userName,
            quantity: data.quantity,
            rom: data.rom,
            price: data.price,
        };
        db_cart.set(cart)
        Alert.alert("Thông báo", "Thêm thành công")
    } catch (error) {
        alert(error)
    }
}