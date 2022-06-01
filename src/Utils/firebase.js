import React, { useState, useContext } from 'react';
import { Alert } from "react-native";
import { auth } from "./firebase-Config"
import { getDatabase, ref, set, onValue, push } from "firebase/database"
import { sendPasswordResetEmail } from 'firebase/auth';
const database = getDatabase()
export const createAccount = (data) => {
    const db_account = ref(database, "accounts" + "/" + data.uid)
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
        const db_account = ref(database, "accounts" + "/" + data.uid)
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
        const db_product = ref(database, "products" + "/" + data.id)
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
        set(db_product, product)
        Alert.alert("Thông báo", "Cập nhật thành công")
    } catch (error) {
        alert(error)
    }
}

export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Yêu cầu đã được gửi đến email của bạn')
        }).catch((e) => {
            alert(e)
        })
}


export const createProduct = (data) => {
    try {
        var db_product = ref(database, 'products/')
        const newReference = push(db_product);
        db_product = ref(database, 'products/' + newReference.key);
        var product = {
            id: newReference.key,
            img1: data.img1,
            img2: data.img2,
            img3: data.img3,
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
        set(db_product, product)
        Alert.alert("Thông báo", "Tạo sản phẩm thành công")
    } catch (error) {
        alert(error)
    }
}

export const del = (data) => {
    try {
        set(ref(database, `/${data.ref}/` + data.id), null)
    } catch (error) {
        alert(error)
    }
}

export const createCart = (data) => {
    try {
        const db_cart = ref(database, "carts/")
        const newReference = push(db_cart);
        db_cart = ref(database, 'carts/' + newReference.key);
        var cart = {
            id: newReference.key,
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