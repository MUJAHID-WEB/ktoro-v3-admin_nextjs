import Box from "@/components/svg/Box";
import Catalog from "@/components/svg/Catalog";
import GroupPeople from "@/components/svg/GroupPeople";
import Home from "@/components/svg/Home";
import Network from "@/components/svg/Network";
import Paper from "@/components/svg/Paper";
import Target from "@/components/svg/Target";
import Ticket from "@/components/svg/Ticket";

export const orders = [
    {
        id: 1,
        icon: "",
        title: "Pending",
        count: 32,
    },
    {
        id: 2,
        icon: "",
        title: "Processing",
        count: "100/50/20",
    },
    {
        id: 3,
        icon: "",
        title: "shipped out",
        count: 12,
    },
    {
        id: 4,
        icon: "",
        title: "delivered",
        count: 2,
    },
    {
        id: 5,
        icon: "",
        title: "return",
        count: 32,
    },
    {
        id: 6,
        icon: "",
        title: "Lost",
        count: 12,
    },
    {
        id: 7,
        icon: "",
        title: "Cancel",
        count: 18,
    },
    {
        id: 8,
        icon: "",
        title: "Fail order",
        count: 8,
    },
    {
        id: 8,
        icon: "",
        title: "Fail order",
        count: 8,
    },
    {
        id: 9,
        icon: "",
        title: "Refend on way",
        count: 32,
    },
    {
        id: 10,
        icon: "",
        title: "Refend delivered",
        count: 32,
    },
];

export const sidebars = [
    {
        id: 1,
        icon: Home,
        titleAr: "لوحه التحكم",
        titleEn: "Dashboard",
        link: "/",
    },
    {
        id: 2,
        icon: Box,
        titleAr: "الطلبات",
        titleEn: "Orders",
        link: "#",
        subItems: [
            {
                id: 1,
                titleAr: "الطلبات",
                titleEn: "Orders",
                link: "/orders",
            },
            {
                id: 2,
                titleAr: "الشحنات",
                titleEn: "Shipments",
                link: "/orders/shipments",
            },
            {
                id: 3,
                titleAr: "Return",
                titleEn: "Return",
                link: "/orders/return",
            },
            {
                id: 4,
                titleAr: "استرداد",
                titleEn: "Refund",
                link: "/orders/refund",
            },

            {
                id: 5,
                titleAr: "ضائع",
                titleEn: "Lost",
                link: "/orders/lost",
            },
            {
                id: 6,
                titleAr: "تحويل المبالغ",
                titleEn: "Transferring amounts",
                link: "/orders/transferring-amount",
            },

            {
                id: 7,
                titleAr: "نظام الطلب المسبق",
                titleEn: "Pre-order system",
                link: "/orders/pre-order-system",
            },
            {
                id: 8,
                titleAr: "نظام أمر العبور",
                titleEn: "Transit-order system",
                link: "/orders/transit-order-system",
            },
            {
                id: 9,
                titleAr: "قائمة القيام به",
                titleEn: "Done list",
                link: "/orders/done-list",
            },
        ],
    },
    {
        id: 3,
        icon: Target,
        titleAr: "التسويق",
        titleEn: "Marketing",
        link: "#",
        subItems: [
            {
                id: 1,
                titleAr: "لوحة التحكم",
                titleEn: "Dashboard",
                link: "/dashboard",
            },
            {
                id: 2,
                titleAr: "المؤثرون",
                titleEn: "Influencers",
                link: "/influencers",
            },
            {
                id: 3,
                titleAr: "المستخدمين",
                titleEn: "Users",
                link: "/users",
            },
            {
                id: 4,
                titleAr: "المشاريع",
                titleEn: "Projects",
                link: "/projects",
            },
            {
                id: 5,
                titleAr: "بحث",
                titleEn: "Search",
                link: "/search",
            },
            {
                id: 6,
                titleAr: "صفحة الفواتير",
                titleEn: "Billing page",
                link: "/billing-page",
            },
        ],
    },
    {
        id: 4,
        icon: Catalog,
        titleAr: "قسم المنتجات",
        titleEn: "Catalogue",
        link: "#",
        subItems: [
            {
                id: 1,
                titleAr: "قائمة المنتجات",
                titleEn: "Item list",
                link: "/item-list",
            },
            {
                id: 2,
                titleAr: "قائمة الأضرار",
                titleEn: "Damage list",
                link: "/damage-list",
            },
            {
                id: 3,
                titleAr: "فئات",
                titleEn: "Categories",
                link: "/categories",
            },
            {
                id: 4,
                titleAr: "العلامات التجارية",
                titleEn: "Brands",
                link: "/brands",
            },
            {
                id: 5,
                titleAr: "الاستيراد & والتصدير",
                titleEn: "Export & Import",
                link: "/export-import",
            },
            {
                id: 6,
                titleAr: "قائمة عناصر الشحن",
                titleEn: "Shipping item list",
                link: "/shipping-item-list",
            },
            {
                id: 7,
                titleAr: "الموردين",
                titleEn: "Suppliers",
                link: "/suppliers",
            },
            {
                id: 8,
                titleAr: "منتجات",
                titleEn: "Products",
                link: "/products",
            },
        ],
    },
    {
        id: 5,
        icon: GroupPeople,
        titleAr: "عملاء",
        titleEn: "Customers",
        link: "/customers",
    },
    {
        id: 6,
        icon: Ticket,
        titleAr: "التذاكر",
        titleEn: "Tickets",
        link: "/tickets",
    },
    {
        id: 7,
        icon: Box,
        titleAr: "الأعدادات",
        titleEn: "Settings",
        link: "#",
        subItems: [
            {
                id: 1,
                titleAr: "المستخدمين",
                titleEn: "Users",
                link: "/settings/users",
            },
            {
                id: 2,
                titleAr: "الأدوار",
                titleEn: "Roles",
                link: "/settings/users/role",
            },
            {
                id: 3,
                titleAr: "الصفحة الرئيسية",
                titleEn: "Home page",
                link: "/settings/home-page",
            },
            {
                id: 4,
                titleAr: "إدارة الحالة",
                titleEn: "Status managements",
                link: "/settings/status-managements",
            },
            {
                id: 5,
                titleAr: "قسيمة",
                titleEn: "Coupon",
                link: "/settings/coupon",
            },
            {
                id: 6,
                titleAr: "كود الرسوم",
                titleEn: "COD Fee",
                link: "/settings/cod-fee",
            },
        ],
    },
    {
        id: 8,
        icon: Paper,
        titleAr: "النشرة الإخبارية",
        titleEn: "Newsletter",
        link: "/newsletter",
    },
    {
        id: 9,
        icon: Network,
        titleAr: "التقارير",
        titleEn: "Reports",
        link: "/reports",
    },
];

export const roles = [
    {
        id: 1,
        title: "Role 1",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 2,
        title: "Role 2",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 3,
        title: "Role 3",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 4,
        title: "Role 4",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 5,
        title: "Role 5",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 6,
        title: "Role 6",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
    {
        id: 7,
        title: "Role 7",
        nesRole: [
            {
                title: "Role A",
            },
            {
                title: "Role B",
            },
            {
                title: "Role C",
            },
        ],
    },
];
