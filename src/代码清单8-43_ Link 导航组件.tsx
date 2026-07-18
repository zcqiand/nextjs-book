// src/app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">联系我们</h1>
      <p className="text-gray-600 mb-8">我们随时准备回答您的问题</p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            姓名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="您的姓名"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            邮箱
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            留言
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none"
            placeholder="请输入您的留言..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          提交
        </button>
      </form>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">其他联系方式</h3>
        <p className="text-gray-600">邮箱: contact@example.com</p>
        <p className="text-gray-600">电话: +86 138 0000 0000</p>
      </div>
    </main>
  );
}