// 从第 27 章提取
// 代码清单: Client Component 标记
// 文件名: chapter27_ChatPage.tsx
// src/app/chat/page.tsx
'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat/stream',
  });

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1>AI 助手</h1>
      </header>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 rounded-lg p-3">
              <span className="animate-pulse">AI 正在思考...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="输入你的问题..."
            className="flex-1 border rounded-lg px-4 py-2"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
}
