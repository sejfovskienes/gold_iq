import chainlit as cl
from pydantic_ai import Agent

from dotenv import load_dotenv
import os

load_dotenv(override=True)

@cl.on_app_startup
async def app_startup() -> None:
    print('starting application')

@cl.on_chat_start
async def chat_start_logic() -> None:
    agent = Agent(name='goldiq_assistant', model='google-gla:gemini-1.0-pro')
    cl.user_session.set('agent', agent)

@cl.on_message
async def on_message_logic(message: cl.Message) -> None:
    query = f'{message}'
    print(query)

    agent : Agent = cl.user_session.get('agent')
    result = agent.run_sync(query)
    print(result)
    await cl.Message(content=f'{result}').send()