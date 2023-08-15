import { BsPerson } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';
import { TbMessageReport } from 'react-icons/tb';
import { RiBillLine } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { MdFormatListBulleted } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCommentEdit } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { TbReportMoney } from 'react-icons/tb';

export const sideBar = [
    {
        "title": "",
        "links": [
            {
                "name": "داشبورد",
                "link": "/",
                "icon": BsPerson
            },
            {
                "name": "رمز عبور",
                "link": "changePassword",
                "icon": RiLockPasswordLine
            },
            {
                "name": "صورتحساب",
                "link": "/facture",
                "icon": TbReportMoney
            },
            {
                "name": "گزارش مالی",
                "link": "bill",
                "icon": RiBillLine
            }
        ]
    },
    {
        "title": "محتوا",
        "links": [
            {
                "name": "ثبت ممیزی",
                "link": "addAudit",
                "icon": MdOutlineLibraryAdd
            },
            {
                "name": "لیست ممیزی",
                "link": "audit",
                "icon": TbMessageReport
            },
            {
                "name": "لیست محتوا",
                "link": "content",
                "icon": MdFormatListBulleted
            },
            {
                "name": "گزارش ترافیک",
                "link": "traffic",
                "icon": RiBillLine
            }
        ]
    },
    {
        "title": "مدیریت سیستم",
        "links": [
            {
                "name": "ثبت کاربر",
                "link": "addUser",
                "icon": AiOutlineUserAdd
            },
            {
                "name": "جستجو/ ویرایش کاربر",
                "link": "editUser",
                "icon": BiCommentEdit
            }
        ]
    }
    //,
    //{
    //    "title": "دیتا سنتر",
    //    "links": [
    //        {
    //            "name": "محتوا",
    //            "link": "content",
    //            "icon": MdContentCopy
    //        } 
    //    ]
    //}
    //,
    //{
    //    "title": "مدیریت سیستم",
    //    "links": [
    //        {
    //            "name": "ایجاد کاربر جدید",
    //            "link": "content",
    //            "icon": MdContentCopy
    //        } 
    //    ]
    //}
];

export const languages = [
    {
        "label": "همه",
        "value":""
    },
    {
        "label": "زیرنویس چسبیده",
        "value": "زیرنویس چسبیده"
    },
    {
        "label": "زیرنویس فارسی",
        "value": "زیرنویس فارسی"
    },
    {
        "label": "دوبله پیشتازمووی",
        "value": "دوبله پیشتازمووی"
    },
];

export const typeIncome = [
    {
        "label": "همه",
        "value": ""
    },
    {
        "label": "Aggregation",
        "value": "Aggregation"
    },
    {
        "label": "MCI",
        "value": "mci"
    },
    {
        "label": "Irancell",
        "value": "mtni"
    }, {
        "label": "Rightel",
        "value": "rtl"
    },
];




export const billColumns = ['ردیف', 'نوع حساب ', 'شرح', 'تاریخ', 'بستانکار(ریال)', 'مانده (ریال) '];

export const trafficColumns = ['ردیف', 'هاست', 'عنوان', 'ترافیک(گیگ)', 'تاریخ', 'نوع درآمد'];


export const contentColumns = ['ردیف', 'عنوان فارسی', 'عنوان لاتین', 'زبان', 'وضعیت', 'سال انتشار', 'جزییات'];


export const hostColumns = ['نام هاست', 'ای پی', 'مدیر','وضعیت'];