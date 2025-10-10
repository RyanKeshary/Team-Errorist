# main.py
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
import spaCy   # <- your existing module

app = FastAPI(title="Disaster API")

class TextIn(BaseModel):
    text: str

@app.post("/process-text")
async def process_text_endpoint(payload: TextIn):
    # call your sync function; if it's CPU-bound, see note below
    result = spaCy.process_text(payload.text)
    return {"ok": True, "result": result}

# Example file-upload endpoint (if you want)
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    contents = await file.read()
    # pass bytes or decode to str depending on your function
    res = spaCy.process_bytes(contents)
    return {"ok": True, "result": res}
