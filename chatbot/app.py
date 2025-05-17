import chainlit as cl

@cl.on_chat_start
async def app_startap():
    print('====================== STARTING THE APPLICATION ======================')