from dotenv import load_dotenv
import os
from livekit import agents
from livekit.agents import AgentSession, Agent, RoomInputOptions
from livekit.plugins import (
    google,
    noise_cancellation,
)


print("Google API Key:", os.getenv("LIVEKIT_API_KEY"))



load_dotenv()


# Custom Gemini Agent
class Assistant(Agent):
    def __init__(self) -> None:
        super().__init__(instructions="You are a helpful voice AI assistant.")


# Entrypoint for the LiveKit agent
async def entrypoint(ctx: agents.JobContext):
    agent = Assistant()  # store the agent instance

    session = AgentSession(
        llm=google.beta.realtime.RealtimeModel(
            model="gemini-2.0-flash-exp",
            voice="Puck",
            temperature=0.8,
            instructions="You are a helpful assistant who speaks clearly.",
        )
    )

    await session.start(
        room=ctx.room,
        agent=agent,  # pass it here
        room_input_options=RoomInputOptions(
            noise_cancellation=noise_cancellation.BVC(),
        ),
    )

    await ctx.connect()

    # ✅ Correct way to generate a reply
    await agent.generate_reply("Hello! How can I assist you today?")


# CLI Entry
if __name__ == "__main__":
    agents.cli.run_app(agents.WorkerOptions(entrypoint_fnc=entrypoint))
