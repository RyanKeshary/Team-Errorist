import spacy
import json
import os
import requests

# Load spaCy model (offline capable)
nlp = spacy.load("en_core_web_sm")

OFFLINE_FILE = "offline_data.json"
UPLOAD_URL = "https://example.com/api/upload"  # Replace with your actual endpoint later

# ------------------------------------------
# Function to check internet connectivity
# ------------------------------------------
def is_connected():
    try:
        requests.get("https://www.google.com", timeout=3)
        return True
    except requests.ConnectionError:
        return False

# ------------------------------------------
# Process and store user query
# ------------------------------------------
def handle_disaster_query(user_text):
    print("\nProcessing query:", user_text)
    doc = nlp(user_text)

    # Extract named entities (e.g., location, organization)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    
    # Basic heuristic for disaster type detection
    disaster_keywords = ["flood", "earthquake", "fire", "landslide", "cyclone", "tsunami", "storm"]
    detected_type = next((word for word in disaster_keywords if word in user_text.lower()), "unknown")

    # Construct record
    data = {
        "query": user_text,
        "entities": entities,
        "disaster_type": detected_type
    }

    if is_connected():
        print("✅ Internet available — uploading data...")
        # Simulate upload
        try:
            response = requests.post(UPLOAD_URL, json=data)
            print("Server response:", response.status_code)
        except Exception as e:
            print("Upload failed, saving offline:", e)
            save_offline(data)
    else:
        print("⚠️ No internet connection — saving offline.")
        save_offline(data)

# ------------------------------------------
# Save data locally
# ------------------------------------------
def save_offline(data):
    offline_data = []
    if os.path.exists(OFFLINE_FILE):
        with open(OFFLINE_FILE, "r") as f:
            offline_data = json.load(f)
    offline_data.append(data)
    with open(OFFLINE_FILE, "w") as f:
        json.dump(offline_data, f, indent=4)
    print("🗃️ Saved locally to", OFFLINE_FILE)

# ------------------------------------------
# Re-upload saved data when online
# ------------------------------------------
def upload_offline_data():
    if not os.path.exists(OFFLINE_FILE):
        print("No offline data found.")
        return

    if is_connected():
        with open(OFFLINE_FILE, "r") as f:
            offline_data = json.load(f)

        for item in offline_data:
            try:
                response = requests.post(UPLOAD_URL, json=item)
                print(f"Uploaded: {item['query']} → Status {response.status_code}")
            except Exception as e:
                print("Upload failed:", e)
                return

        os.remove(OFFLINE_FILE)
        print("✅ All offline data uploaded and file cleared.")
    else:
        print("⚠️ Still offline, cannot upload yet.")

# ------------------------------------------
# Example usage
# ------------------------------------------
if __name__ == "__main__":
    handle_disaster_query("There is a flood in Surat near river Tapi, people need rescue and food supplies.")
    handle_disaster_query("Earthquake tremors felt in Delhi, multiple buildings damaged.")
    upload_offline_data()
