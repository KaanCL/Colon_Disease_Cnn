from flask import Flask ,request, jsonify
import os

from model import Model

app = Flask(__name__)

model = None

@app.route("/upload",methods=["POST"])

def classify_image():
    try:
         file = request.files['file']
         file_path = os.path.join('Uploads',file.filename)
         os.makedirs(os.path.dirname(file_path),exist_ok=True)
         file.save(file_path)
         model_instance = Model(file_path)
         result = model_instance.evulateModel()
         
         return jsonify({"Result":result})
    
    except Exception as e:
     return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)