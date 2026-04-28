import os
from PIL import Image

# Define source paths
projects_src = r"C:\Users\atult\.gemini\antigravity\brain\0741a4a4-9760-4f58-bf24-616b8dd59d3d\uploaded_image_1767251422694.png"
services_src = r"C:\Users\atult\.gemini\antigravity\brain\0741a4a4-9760-4f58-bf24-616b8dd59d3d\uploaded_image_1767251878337.jpg"

output_dir = r"k:\project02\public\assets"
os.makedirs(output_dir, exist_ok=True)

def extract_projects():
    if not os.path.exists(projects_src):
        print(f"Projects source not found: {projects_src}")
        return

    print("Processing Projects grid...")
    img = Image.open(projects_src)
    w, h = img.size
    
    # Grid Logic: 2x2
    # Top-Left: House
    # Top-Right: Login (Mobile)
    # Bottom-Left: Calendar
    # Bottom-Right: Penguin
    
    # Adding small padding/crop to avoid borders if any
    grid = [
        ("thumb_web_cottage.png", (0, 0, w//2, h//2)),
        ("thumb_ai_login.png", (w//2, 0, w, h//2)),
        ("thumb_python_cal.png", (0, h//2, w//2, h)),
        ("thumb_data_penguin.png", (w//2, h//2, w, h))
    ]
    
    for name, box in grid:
        # Crop
        crop = img.crop(box)
        
        # Center crop the asset further? 
        # The screenshot likely has the card visuals. 
        # Let's save the whole quadrant for now, CSS can handle display.
        # Actually better to crop slightly inner to remove potential white gaps from screenshot grid
        # crop = crop.crop((20, 20, crop.width-20, crop.height-20))
        
        crop.save(os.path.join(output_dir, name))
        print(f"Saved {name}")

def extract_services():
    if not os.path.exists(services_src):
        print(f"Services source not found: {services_src}")
        return

    print("Processing Services cards...")
    img = Image.open(services_src)
    w, h = img.size
    
    # Logic: 2 cards side-by-side
    # Left: ML (Hand)
    # Right: Prompt Eng (Robot)
    # We want just the IMAGES at the bottom.
    
    mid_w = w // 2
    
    # Left Half
    left_img = img.crop((0, 0, mid_w, h))
    # Crop to bottom 45% where image usually is
    hand_img = left_img.crop((0, int(h*0.4), mid_w, h))
    hand_img.save(os.path.join(output_dir, "service_ml_hand.png"))
    print("Saved service_ml_hand.png")
    
    # Right Half
    right_img = img.crop((mid_w, 0, w, h))
    robot_img = right_img.crop((0, int(h*0.4), mid_w, h))
    robot_img.save(os.path.join(output_dir, "service_robot_face.png"))
    print("Saved service_robot_face.png")

def extract_avatar():
    avatar_src = r"C:\Users\atult\.gemini\antigravity\brain\0741a4a4-9760-4f58-bf24-616b8dd59d3d\uploaded_image_1767251964940.png"
    if not os.path.exists(avatar_src):
        print(f"Avatar source not found: {avatar_src}")
        return

    print("Processing Avatar...")
    img = Image.open(avatar_src)
    w, h = img.size
    
    # The image is a card with the avatar in the center-ish. 
    # It has a white border/card background.
    # We want to crop specifically the 3D character.
    # Based on visual estimate of typical card layouts:
    # It's likely centered horizontally.
    # Let's crop a square/portrait aspect ratio from the center-top area.
    
    # Heuristic crop:
    # Left: 10%, Right: 90%
    # Top: 10%, Bottom: 85% (excluding text at bottom)
    
    left = int(w * 0.1)
    top = int(h * 0.1)
    right = int(w * 0.9)
    bottom = int(h * 0.82) # Cut off name text
    
    avatar_crop = img.crop((left, top, right, bottom))
    avatar_crop.save(os.path.join(output_dir, "avatar_3d.png"))
    print("Saved avatar_3d.png")

if __name__ == "__main__":
    extract_projects()
    extract_services()
    extract_avatar()
