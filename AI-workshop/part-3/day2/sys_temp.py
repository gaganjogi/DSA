import os
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

my_api_key = os.getenv("GROQ_API_KEY")

if not my_api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set.")

client = Groq(api_key=my_api_key)
model = "openai/gpt-oss-20b"
role='user'

system_message = {"role": 'system', "content": "You are a brand manager and suggest the best brand name for a product.Name should be in one word and should be catchy and unique."}
prompt = "Suggest a brand name for a new energy drink that is targeted towards young adults and emphasizes health and vitality."
message = {"role": role, "content": prompt}
messages = [system_message, message]
response = client.chat.completions.create(model=model, messages=messages, temperature=2)
print(response.choices[0].message.content)