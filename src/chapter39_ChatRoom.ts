// 从第 39 章提取
// 代码清单: ChatRoom 函数
// 文件名: chapter39_ChatRoom.ts
import { useOptimistic } from 'react';
import { sendMessage } from './actions';

function ChatRoom({ messages, roomId }) {
  const [optimisticMessages, setOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      { id: 'temp', text: newMessage, sending: true },
    ]
  );

  async function handleSubmit(formData) {
    const text = formData.get('message');
    setOptimisticMessage(text);
    await sendMessage(roomId, text);
  }

  return (
    <div>
      {optimisticMessages.map(msg => (
        <Message key={msg.id} {...msg} />
      ))}
      <form action={handleSubmit}>
        <input name="message" />
      </form>
    </div>
  );
}
