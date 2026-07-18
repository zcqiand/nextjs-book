import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "实验室管理系统",
    template: "%s · 实验室管理系统",
  },
  description: "面向检测机构的合同、设备、样品、报告全流程管理系统",
  robots: {
    index: true,
    follow: true,
  },
};