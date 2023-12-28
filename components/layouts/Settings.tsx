"use client";
import { LogoutOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const contentt = function loadSetting(profile: () => void, signOut: () => void, role: string) {
    return (
        <div className='rounded-lg flex-col'>
            <button className="w-full text-lg font-semibold flex rounded-lg hover:bg-gray-100 p-2" onClick={profile}>
                <div className=" mr-5">
                    <UserOutlined/>
                </div>
                Trang cá nhân
            </button>
            { role == 'admin' &&
            <button className="w-full text-lg font-semibold flex rounded-lg hover:bg-gray-100 p-2">
                <a href="http://localhost:8000/admin" className="flex">
                    <div className="mr-5">
                        <ProfileOutlined/>
                    </div>
                    Admin
                </a>
            </button>
            }
            <button className="w-full text-lg text-red-500 font-semibold flex rounded-lg hover:bg-gray-100 p-2" onClick={signOut}>
                <div className="mr-5">
                    <LogoutOutlined/>
                </div>
                Đăng xuất
            </button>
        </div>
    );
} 

export {contentt}