import Message from 'App/Models/Message'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Message, ({ faker }) => {
  return {
    //
    text: faker.lorem.words(),
    user_id: Math.random() > 0.5 ? 8 : 9,
    chat_id: 1
  }
}).build()
