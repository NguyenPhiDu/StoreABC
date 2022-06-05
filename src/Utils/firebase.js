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
    set(db_account, account)
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
        set(db_account, account)
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
            img1: data.img1,
            img2: data.img2,
            img3: data.img3,
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

export const delCart = (data) => {
    try {
        set(ref(database, 'carts/' + data.userId + '/' + data.id), null)
    } catch (error) {
        alert(error)
    }
}
export const delOrder = (data) => {
    try {
        set(ref(database, 'orders/' + data.id), null)
    } catch (error) {
        alert(error)
    }
}

export const delAdminBill = (data) => {
    try {
        set(ref(database, 'AdminBills/' + data.userId + '/' + data.id), null)
    } catch (error) {
        alert(error)
    }
}

export const createCart = (data) => {

    try {
        const money = data.price * data.quantity
        var db_cart = ref(database, 'carts/')
        db_cart = ref(database, 'carts/' + data.userId + '/' + data.id)
        var cart = {
            id: data.id,
            productId: data.id,
            productName: data.name,
            userId: data.userId,
            userName: data.userName,
            quantity: data.quantity,
            price: money,
            img: data.img1
        };
        set(db_cart, cart)
        Alert.alert("Thông báo", "Thêm thành công")
    } catch (error) {
        alert(error)
    }
}


export const createOrder = (data) => {
    try {
        var db_order = ref(database, 'orders/')
        const newReference = push(db_order);
        db_order = ref(database, 'orders/' + newReference.key)
        var order = {
            id: newReference.key,
            userId: data.userId,
            userName: data.userName,
            userPhone: data.phone,
            userAddress: data.address,
            quantity: data.quantity,
            money: data.money,
            trangThai: data.trangThai,
            carts: data.cart
        };
        set(db_order, order)
        Alert.alert("Thông báo", "đặt thành công, chờ xác nhận từ cửa hàng")
    } catch (error) {
        alert(error)
    }
}

export const createBill = (data) => {
    try {

        var db_bill = ref(database, 'AdminBills/')
        db_bill = ref(database, 'AdminBills/' + data.userId + '/' + data.id)
        var bill = {
            id: data.id,
            userId: data.userId,
            userName: data.userName,
            userPhone: data.phone,
            userAddress: data.address,
            quantity: data.quantity,
            money: data.money,
            carts: data.cart
        };
        set(db_bill, bill)
        Alert.alert("Thông báo", "đặt thành công")
    } catch (error) {
        alert(error)
    }
}

export const createBillUser = (data) => {
    try {
        var db_bill = ref(database, 'bills/')
        db_bill = ref(database, 'bills/' + data.userId + '/' + data.id)
        var bill = {
            id: data.id,
            userId: data.userId,
            userName: data.userName,
            userPhone: data.phone,
            userAddress: data.address,
            quantity: data.quantity,
            money: data.money,
            carts: data.cart
        };
        set(db_bill, bill)
    } catch (error) {
        alert(error)
    }
}
export const delBill = (data) => {
    try {
        set(ref(database, 'bills/' + data.userId + '/' + data.id), null)
    } catch (error) {
        alert(error)
    }
}

export const delNotification = (data) => {
    try {
        set(ref(database, 'notifications/' + data.userId + '/' + data.id), null)
    } catch (error) {
        alert(error)
    }
}

export const createNotification = (data) => {
    try {
        var db_notification = ref(database, 'notifications/')
        db_notification = ref(database, 'notifications/' + data.userId + '/' + data.id)
        var notification = {
            userId: data.userId,
            idOrder: data.id,
            userName: data.userName,
            comment: data.comment
        };
        set(db_notification, notification)
    } catch (error) {
        alert(error)
    }
}