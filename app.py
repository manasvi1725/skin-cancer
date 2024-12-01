from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import cv2
#from tensoflow.keras.models import load_model
 #Initialize the Flask app
app = Flask(__name__)
CORS(app)

# Load your trained model (ensure 'model.h5' is in the same directory as this file)
model = tf.keras.models.load_model('model.h5')
class_labels = ['actinic keratosis','basal cell carcinoma','dermatofibroma','melanoma','nevus','pigmented benign keratosis','seborrheic keratosis','squamous cell carcinoma','vascular lesion']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get image from the request
        file = request.files['file']
        img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
        img_resized = cv2.resize(img, (224, 224))  # Resize to model input size
        img_rgba = cv2.cvtColor(img_resized, cv2.COLOR_BGR2BGRA)
        img_normalized = img_rgba/255.0

        img_array = np.expand_dims(img_normalized, axis=0)  # Add batch dimension
        img_array = img_array.astype(np.float32)
        # Make prediction
        predictions = model.predict(img_array)
        print(f"Predictions:{predictions}")
        predicted_class = np.argmax(predictions)
        predicted_class_name = class_labels[predicted_class]

        return jsonify({'class': predicted_class_name})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)  # Run locally with debugging enabled


