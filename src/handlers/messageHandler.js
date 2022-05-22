import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname('..components/db/db.json');

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
db.read()

db.defaults({
    messages: [
      {
        id: '1',
        src: '1',
        sender_name: 'Bob',
        messageText: 'What are you doing here?'
      },
      {
        id: '2',
        src: '2',
        sender_name: 'Alice',
        messageText: 'Go back to work!'
      }
    ]
  }).write()

  const getMessages = () => {
    // получаем сообщения из БД
    const messages = db.get('messages').value()
    // передаем сообщения пользователям, находящимся в комнате
    // синонимы - распространение, вещание, публикация
    io.in(socket.roomId).emit('messages', messages)
  }

  const addMessage = (message) => {
    db.get('messages')
      .push({
        // генерируем идентификатор с помощью nanoid, 8 - длина id
        messageId: nanoid(8),
        createdAt: new Date(),
        ...message
      })
      .write()

    // выполняем запрос на получение сообщений
    getMessages()
  }

  export default messageHandler;